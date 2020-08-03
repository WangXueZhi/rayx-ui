let gulp = require('gulp');
let shell = require('shelljs');
let watch = require('gulp-watch');
const build = require('./builder/build')

const toBuildAll = function () {
    shell.exec('npm run lib:test', {
        async: false,
        silent: false
    });
    build()
}

const openServer = function () {
    toBuildAll()
    shell.exec('npm run open', {
        async: true,
        silent: false
    });
}

// 开启开发服务
gulp.task('dev', async () => {
    openServer()
    watch('packages/**/**', function () {
        toBuildAll()
    });
});

// 构建所有
gulp.task('buildAll', async () => {
    toBuildAll()
});

// 构建文档
gulp.task('build', async () => {
    build()
});