let gulp = require('gulp');
let shell = require('shelljs');
const path = require('path')
let watch = require('gulp-watch');
const build = require('./builder/build2')

const toBuildAll = function () {
    build()
    shell.exec('npm run lib:test', {
        async: false,
        silent: false
    });
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
    watch('packages/**/**', function (file) {
        const filePath = path.resolve(file.history[0])
        if (!filePath.includes('\\packages\\index.js')) {
            toBuildAll()
        }
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