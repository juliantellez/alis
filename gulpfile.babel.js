// @flow

import path from 'path'
import del from 'del'
import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import forever from 'forever'

import webpackStream from 'webpack-stream'
import {PATHS, DEST} from './app.config'

const $ = plugins()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const toGlob = src => path.join(path.dirname(src), '**/*')

gulp.task('styles', () =>
  gulp.src(PATHS.styles.src)
  .pipe($.sassGlob())
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer())
  .pipe(gulp.dest(PATHS.styles.dest))
  .pipe($.print(p => `styles: ${p}`))
)

gulp.task('scripts', () =>
  gulp.src(PATHS.scripts.src)
  .pipe($.changed(PATHS.scripts.dest))
  .pipe($.flowtype({
    all: false,
    weak: false,
    killFlow: false,
    beep: true,
    abort: false,
  }))
  .pipe($.babel())
  .pipe(gulp.dest(PATHS.scripts.dest))
  .pipe($.print(fp => `scripts: ${fp}`))
)

gulp.task('webpack', () => {
  return gulp.src(PATHS.webpack.src)
  .pipe(webpackStream(require('./webpack.config')))
  .pipe(gulp.dest(PATHS.webpack.dest))
  .pipe($.print(fp => `webpack: ${fp}`))
})

gulp.task('fonts', () =>
  gulp.src(PATHS.fonts.src)
  .pipe(gulp.dest(PATHS.fonts.dest))
  .pipe($.print(fp => `fonts: ${fp}`))
)

gulp.task('images', () =>
  gulp.src(PATHS.images.src)
  .pipe(gulp.dest(PATHS.images.dest))
  .pipe($.print(fp => `images: ${fp}`))
)

gulp.task('forever', ['watch'], () => {
  const serverPath = path.join(DEST, 'scripts/server/main.js')
  const child = new (forever.Monitor)(serverPath, {
    watch: true,
    watchDirectory: DEST,
    silent: false,
    colors: true,
  })
  child.on('watch:restart', info => {
    console.error(`Restaring server because of a change in: ${info.stat}`)
  })
  child.on('exit', info => {
    console.log('server has exited ...', info)
  })
  child.on('restart', info => {
    console.log('Forever has restarted the server')
  })
  child.start()
})

gulp.task('clean', () => del([DEST]))

gulp.task('watch', ['build'], () => {
  Object.keys(PATHS).map(k => {
    gulp.watch(toGlob(PATHS[k].src), [k])
  })
})

gulp.task('build', Object.keys(PATHS))

gulp.task('default', ['forever'])
