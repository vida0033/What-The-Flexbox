const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

/*gulp.task('styles', () =>
    gulp.src('css/styles.css')
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(gulp.dest('build'))
  );
*/
  function styles (cb) {
    gulp.src('css/styles.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('build'))
    cb()
  }

/*
gulp.task('watch', () =>
    gulp.watch('css/styles.css', gulp.series('styles'))
    );
*/

function watch (cb){
    gulp.watch('css/styles.css', styles)
    cb()
}
    
exports.watch = watch
exports.default = styles