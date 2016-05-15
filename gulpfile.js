var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var reload = browserSync.reload;

gulp.task('server', function() {

    browserSync.init(null, {
        proxy: "http://localhost:8080/"
    });
});


gulp.task('jade', function() {
    return gulp.src("src/**/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("production"))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass', function() {
    return gulp.src("src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("production/css"))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function(){
  gulp.watch(['src/**/*.scss'], ['sass']);
  gulp.watch(['src/**/*.jade'], ['jade']);
});

gulp.task('serve', ['server', 'watch']);
gulp.task('default', ['serve']);
