var gulp = require('gulp'),
postcss = require('gulp-postcss'),
mixins = require('postcss-mixins'),
cssimport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
  return gulp.src('./app/assets/Styles/style.css')
    .pipe(postcss([cssimport, mixins, nested, cssvars, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
