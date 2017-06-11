import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import path from 'path'

import {DEST, BASE_URL, PATHS, STATIC} from '../app.config'

const $ = plugins()

const env = process.env.NODE_ENV || 'dev'

const S3 = {
  BUCKET: `aliway-${env}`,
  REGION: 'eu-west-1',
}

const MANIFEST = 'rev-manifest.json'
const MANIFEST_PATH = path.join(DEST, MANIFEST)
const AWS_PREFIX = `https://s3-${S3.REGION}.amazonaws.com/${S3.BUCKET}`

const getRevReplaceOptions = () => ({
  prefix: AWS_PREFIX,
  manifest: gulp.src(MANIFEST_PATH),
  replaceInExtensions: ['.js', '.css', '.html', '.png', '.jpg'],
})

const getRevUrlsOptions = () => ({
  revise: (origUrl, fullUrl, manifest) => {
    return path.join('/static', origUrl)
  },
  pattern: RegExp(`[("'](${BASE_URL}.+?)['")]`, 'g'),
})

gulp.task('revision:images', () =>
  gulp.src(
    ['/**/*', '!/**/favicon.ico'],
    {root: PATHS.images.dest}
  )
  .pipe($.rev())
  .pipe($.revDeleteOriginal())
  .pipe(gulp.dest(DEST))
  .pipe($.rev.manifest(MANIFEST_PATH, {merge: true}))
  .pipe(gulp.dest(DEST))
)

gulp.task('revision:bundles', () =>
  gulp.src(['/**/*'], {root: path.join(STATIC, BASE_URL, 'bundles')})
  .pipe($.rev())
  .pipe($.revDeleteOriginal())
  .pipe(gulp.dest(DEST))
  .pipe($.rev.manifest(MANIFEST_PATH, {merge: true}))
  .pipe(gulp.dest(DEST))
)

gulp.task('revision:styles', () =>
  gulp.src('/**/*.css', {root: PATHS.styles.dest})
  // Replace urls
  .pipe($.revUrls(getRevUrlsOptions()))
  .pipe($.revReplace(getRevReplaceOptions()))
  .pipe(gulp.dest(DEST))
  // File revision
  .pipe($.rev())
  .pipe($.revDeleteOriginal())
  .pipe(gulp.dest(DEST))
  .pipe($.rev.manifest(MANIFEST_PATH, {merge: true}))
  .pipe(gulp.dest(DEST))
)

gulp.task('revision:scripts', () =>
  gulp.src(['/**/*.js'], {root: path.join(PATHS.scripts.dest)})
  .pipe($.revUrls(getRevUrlsOptions()))
  .pipe($.revReplace(getRevReplaceOptions()))
  .pipe(gulp.dest(DEST))
)

gulp.task('revision', $.sequence(
  'revision:images',
  'revision:styles',
  'revision:bundles',
  'revision:scripts'
))

gulp.task('deploy:static', () => {
  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const settings = {
    region: S3.REGION,
    params: {
      Bucket: S3.BUCKET,
      ACL: 'public-read',
    },
  }
  $.util.log('Deploying...')
  $.util.log('Region:' + $.util.colors.green(settings.region))
  $.util.log('Bucket:' + $.util.colors.green(settings.params.Bucket))

  const publisher = $.awspublish.create(settings)

  return gulp.src([DEST + '/static*/**'])
  .pipe($.awspublishRouter({
    cache: {
      public: true,
      allowTransform: false,
      useExpires: false,
      cacheTime: 300,
    },
    routes: {
      '.+\\.(?:js|css|svg|ttf|png|jpg)': {
        key: '$&',
        gzip: true,
        cacheTime: 630720000,
      },
      '^.+\\.html': {
        gzip: true,
      },
      '^.+$': '$&',
    },
  }))
  .pipe(publisher.publish())
  .pipe(publisher.cache())
  .pipe($.awspublish.reporter())
})

gulp.task('deploy', $.sequence('revision', 'deploy:static'))
