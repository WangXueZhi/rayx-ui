const gulp = require('gulp')
const shell = require('shelljs')
const path = require('path')
const fs = require('fs')
const gulpWatch = require('gulp-watch')
const scss = require('gulp-sass')
const less = require('gulp-less')
const ts = require('gulp-typescript')
const builder = require('./builder/build')
const util = require('./builder/util')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const {
  series
} = require('gulp')

// 复制scss
const copyScss = function () {
  return gulp.src('./packages/**/*.scss')
    .pipe(gulp.dest('lib'))
}

// 复制less
const copyLess = function () {
  return gulp.src('./packages/**/*.less')
    .pipe(gulp.dest('lib'))
}

// 构建文档
const build = function (cb) {
  console.log('build start', new Date())
  builder(function () {})
  cb && cb()
}

// scss编译
const buildScss = function () {
  return gulp.src('./packages/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./lib'))
}

// less编译
const buildLess = function () {
  return gulp.src('./packages/**/*.less')
    .pipe(less({
      javascriptEnabled: true
    }))
    .pipe(gulp.dest('./lib'))
}

// 打包lib
const lib = function (cb) {
  shell.exec('npm run lib:test', {
    async: false,
    silent: false
  })
  cb()
}

// 开发服务
const dev = function (cb) {
  console.log('dev start', new Date())

  shell.exec('npm run open', {
    async: true,
    silent: false
  })
  console.log('dev end', new Date())
  cb()
}

const watch = function (cb) {
  gulpWatch('packages/**/**', function (file) {
    const filePath = path.resolve(file.history[0])
    console.log('gulpWatch => ', path.resolve(filePath))
    if (!filePath.includes('\\packages\\index.js') && !filePath.includes('\\packages\\index.scss') && !filePath.includes('/packages/index.js') && !filePath.includes('/packages/index.scss')) {
      const ext = filePath.split('.').pop()
      // build不涉及样式文件的编译，可以直接跳过
      if (ext === 'scss' || ext === 'less' || ext === 'css') {
        return
      }
      build()
    }
  })
  cb()
}

// 创建组件
const create = function (cb) {
  var argv = require('minimist')(process.argv.slice(2))
  const kebabCaseName = util.bigCamelCaseToKebabCase(argv.name) // 短横线命名
  const bigCamelCaseName = util.cpNameTransfer(kebabCaseName) // 大驼峰命名
  const cpPath = `./packages/${kebabCaseName}`
  const isExist = fs.existsSync(cpPath)
  if (isExist) {
    console.log('error: 同名组件已存在')
    cb()
    return
  }

  gulp.src('./tpl/component/**')
    .pipe(rename(function (path) {
      if (path.basename === 'component') {
        path.basename = kebabCaseName
      }
      return path
    }))
    .pipe(replace('_component_', kebabCaseName))
    .pipe(replace('_COMPONENT_', bigCamelCaseName))
    .pipe(gulp.dest(cpPath))
  cb()
}

const libAll = series(lib, buildScss, buildLess, copyScss, copyLess)
const buildAll = series(build, libAll)

// 构建文档
exports.build = build

// 打包所有文件
exports.lib = libAll

// 构建文档并打包所有文件
exports.buildAll = buildAll

// 开发服务
exports.dev = series(build, watch, dev)

// 创建组件
exports.create = create
