'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('assets/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('assets/sass/*.scss', gulp.series('sass'));
});