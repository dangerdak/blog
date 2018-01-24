var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  livereload = require('gulp-livereload'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src('styles/*.scss')
    .pipe(sass({style: 'compressed'}))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/styles'))
    .pipe(livereload())
});

gulp.task('default', ['styles']);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('styles/*.scss', ['styles']);
});
