const browserSync  = require('browser-sync').create();

const htmlPath     = 'src/*.html';
const scssPath     = 'src/scss/**/*.scss';
const jsPath       = 'src/js/*.js';
const imgPath      = 'src/img/**/*.+(png|jpg|gif|svg)';

module.exports = gulp => {
  gulp.task('serve', () => {
    browserSync.init({
      notify: false,
      server: {
        baseDir: './dist'
      }
    });

    gulp.watch(htmlPath, ['html', browserSync.reload]);
    gulp.watch(scssPath, ['sass', browserSync.reload]);
    gulp.watch(jsPath, ['scripts', browserSync.reload]);
    gulp.watch(imgPath, ['images', browserSync.reload]);
  });
}
