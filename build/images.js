const imagemin = require('gulp-imagemin');

const imgPath = 'src/img/**/*.+(png|jpg|gif|svg)';
const destPath = 'dist/img';

module.exports = gulp => {
  gulp.task('images', () => {
    return gulp
      .src(imgPath)
      .pipe(imagemin())
      .pipe(gulp.dest(destPath));
  });
};
