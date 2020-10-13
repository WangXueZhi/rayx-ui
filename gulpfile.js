const gulp = require('gulp');
const shell = require('shelljs');
const path = require('path')
const fs = require('fs')
const gulpWatch = require('gulp-watch');
const scss = require('gulp-sass')
const ts = require('gulp-typescript');
const builder = require('./builder/build')
const util = require('./builder/util')
const {
    series
} = require('gulp');

// 复制scss
const copyScss = function () {
    return gulp.src('./packages/**/*.scss')
        .pipe(gulp.dest('lib'));
}

// 构建文档
const build = function (cb) {
    console.log('build start', new Date())
    builder(function () {})
    cb && cb();
}

// 打包lib
const lib = function () {
    shell.exec('npm run lib:test', {
        async: false,
        silent: false
    });
    return gulp.src('./packages/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./lib'));
}

// 开发服务
const dev = function (cb) {
    console.log('dev start', new Date())
    shell.exec('npm run open', {
        async: true,
        silent: false
    });
    console.log('dev end', new Date())
    cb();
}

const watch = function (cb) {
    gulpWatch('packages/**/**', function (file) {
        const filePath = path.resolve(file.history[0])
        console.log(filePath)
        console.log(!filePath.includes('\\packages\\index.js') && !filePath.includes('\\packages\\index.scss'))
        if (!filePath.includes('\\packages\\index.js') && !filePath.includes('\\packages\\index.scss')) {
            buildAll();
        }
    });
    cb()
}

const libAll = series(lib, copyScss);

const buildAll = series(build, libAll);


exports.dev = series(buildAll, watch, dev);
exports.buildAll = buildAll;
exports.build = build;
exports.lib = libAll;