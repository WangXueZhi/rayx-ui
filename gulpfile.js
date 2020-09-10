// let gulp = require('gulp');
let shell = require('shelljs');
const path = require('path')
let gulpWatch = require('gulp-watch');
const builder = require('./builder/build2')
const {
    series
} = require('gulp');

// 构建文档
const build = function (cb) {
    builder()
    cb && cb();
}

// 打包lib
const lib = function (cb) {
    shell.exec('npm run lib:test', {
        async: false,
        silent: false
    });
    cb();
}

// 开发服务
const dev = function (cb) {
    shell.exec('npm run open', {
        async: true,
        silent: false
    });
    cb();
}

const watch = function(cb){
    gulpWatch('packages/**/**', function (file) {
        
        const filePath = path.resolve(file.history[0])
        console.log(filePath)
        console.log(!filePath.includes('\\packages\\index.js'))
        if (!filePath.includes('\\packages\\index.js')) {
            build();
        }
    });
    cb()
}

exports.dev = series(build, watch, dev);
exports.buildAll = series(build, lib);
exports.build = build;
exports.lib = lib;