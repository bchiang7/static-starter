const uglify = require('gulp-uglify');

const jsPath = 'src/js/*.js';
const destPath = 'dist/js';

module.exports = gulp => {
  gulp.task('scripts', () => {
    return gulp
      .src(jsPath)
      .pipe(uglify())
      .pipe(gulp.dest(destPath));
  });
};
