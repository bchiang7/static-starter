const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');

const scssPath    = 'src/scss/**/*.scss';
const destPath    = 'dist/css';

module.exports = gulp => {

  gulp.task( 'sass', () => {
    return gulp.src( scssPath )
    .pipe( sass( {
      includePaths: ['scss'],
      outputStyle: 'expanded'
    } ) )
    .pipe( prefix( {
      browsers: [ 'last 2 versions' ],
      cascade: false
    } ) )
    .pipe( gulp.dest( destPath ) );
  });

}