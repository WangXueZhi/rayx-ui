let gulp = require('gulp');
let shell = require('shelljs');
const path = require('path')
let gulpWatch = require('gulp-watch');
const scss = require('gulp-sass')
const builder = require('./builder/build')
const {
    series
} = require('gulp');

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
        if (!filePath.includes('\\packages\\index.js') && !filePath.includes('\\packages\\index.scss')) {
            build();
        }
    });
    cb()
}

exports.dev = series(watch, dev);
exports.buildAll = series(build, lib);
exports.build = build;
exports.lib = lib;