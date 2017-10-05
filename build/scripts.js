const eslint   = require('gulp-eslint');
const uglify   = require('gulp-uglify');

const jsPath   = 'src/js/*.js';
const destPath = 'dist/js';

module.exports = gulp => {
  gulp.task('scripts', () => {
    return gulp.src(jsPath)
      .pipe(eslint({
        useEslintrc: true
      }))
      .pipe(eslint.format())
      .pipe(uglify())
      .pipe(gulp.dest(destPath));
  });
}
