// @flow

const path = require('path')

const APP_PORT = 8000
const BASE_URL = '/aliway'
const ENV = process.env.NODE_ENV || 'development'

const SRC = path.join(__dirname, 'app')
const DEST = path.join(__dirname, 'build')

const STATIC = path.join(DEST, 'static')

const PATHS = {
  styles: {
    src: path.join(SRC, 'styles/main.scss'),
    dest: path.join(STATIC, BASE_URL, 'styles'),
  },
  fonts: {
    src: path.join(SRC, 'fonts/**/*'),
    dest: path.join(STATIC, BASE_URL, 'fonts'),
  },
  images: {
    src: path.join(SRC, 'images/**/*'),
    dest: path.join(STATIC, BASE_URL, 'images'),
  },
  scripts: {
    src: path.join(SRC, 'scripts/**/*.js'),
    dest: path.join(DEST, 'scripts'),
  },
  webpack: {
    src: path.join(SRC, 'scripts/client/**/*.js'),
    dest: path.join(STATIC, BASE_URL, 'bundles'),
  },
}

module.exports = {
  APP_PORT,
  BASE_URL,
  SRC,
  DEST,
  STATIC,
  PATHS,
  ENV,
}
