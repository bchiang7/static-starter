const browserSync  = require('browser-sync').create();

const htmlPath     = 'src/*.html';
const scssPath     = 'src/scss/**/*.scss';
const jsPath       = 'src/js/*.js';

module.exports = gulp => {
  gulp.task('serve', () => {
    browserSync.init({
      notify: false,
      server: {
        baseDir: './dist'
      }
    });

    gulp.watch(scssPath, ['sass', browserSync.reload]);
    gulp.watch(jsPath, ['scripts', browserSync.reload]);
    gulp.watch(htmlPath, ['html', browserSync.reload]);
  });
}
