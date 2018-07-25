const htmlmin = require('gulp-htmlmin');

const htmlPath = 'src/*.html';
const destPath = 'dist';

module.exports = gulp => {
  gulp.task('html', () => {
    return gulp
      .src(htmlPath)
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(destPath));
  });
};
