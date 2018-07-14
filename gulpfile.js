var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('./src/components/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./src/components/css/'))
});

// gulp.task('watch', function() {
//   gulp.watch('./src/components/*.scss', ['sass']); 
// })

// gulp.task('default', function (callback) {
//   runSequence(['sass', 'watch'], callback)
// })