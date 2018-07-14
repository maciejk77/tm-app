var gulp = require('gulp');
var sass = require('gulp-sass');
//var runSequence = require('run-sequence');
//var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./src/components/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./src/components/css/'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
});

// gulp.task('watch' ['browserSync'], function() {
//   gulp.watch('./src/components/*.scss', ['sass']); 
// })

// gulp.task('default', function (callback) {
//   runSequence(['sass', 'watch'], callback)
// })

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//   })
// })

