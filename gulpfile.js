var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('indexApp', function() {
    gulp.src('src/js/indexApp.js')
      .pipe(browserify({transform:'reactify'}))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['indexApp']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
