var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', ['serve']);
gulp.task('serve', function () {

    browserSync.init({
        server: "./app",
        port: 3000
    });

    // gulp.watch("www/*/*.*", ['sass']);
    gulp.watch("./app/**/*.*").on('change', browserSync.reload);
});

