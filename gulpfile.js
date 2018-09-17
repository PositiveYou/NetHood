var gulp = require('gulp');
var clean = require('gulp-clean');

var htmlSrc = 'nethood-react/build/*.html';
var staticSrc = ['nethood-react/build/**/*', 
                 'nethood-react/build/*.json',
                 'nethood-react/build/*.ico',
                 'nethood-react/build/*.js'];

var staticDest = 'nethood/frontend/static/frontend/build';
var htmlDest = 'nethood/frontend/templates/frontend/build';

gulp.task('clean-static', function() {
  gulp.src(htmlDest + '/*', {read: false})
    .pipe(clean());  
});

gulp.task('clean-html', function() {
  gulp.src(staticDest + '/*', {read: false})
    .pipe(clean());  
});

gulp.task('html', ['clean-html'], function() {
  gulp.src(htmlSrc)
    .pipe(gulp.dest(htmlDest));  
});

gulp.task('static', ['clean-static'], function() {
  gulp.src(staticSrc)
    .pipe(gulp.dest(staticDest));  
});

gulp.task('react-to-django', ['static', 'html']);

gulp.task('default', function() {
  
});