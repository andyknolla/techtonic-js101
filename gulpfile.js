// Gulp.js configuration

  // modules
  var gulp = require('gulp');
  var babel = require('gulp-babel');
  var sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano');

  gulp.task('default', function() {
      return gulp.src('src/**/*.js')
          .pipe(babel({
              presets: ['es2015']
          }))
          .pipe(gulp.dest('build'));
  });

  // CSS processing
gulp.task('css', function() {

  var postCssOpts = [
  assets({ loadPaths: ['images/'] }),
  autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
  mqpacker
  ];

  return gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(postcss(postCssOpts))
    .pipe(gulp.dest('build'));

});
