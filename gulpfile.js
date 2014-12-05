var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('static/js/main.js')
        .pipe(browserify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
   gulp.src('views/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('static/css/*.css')
    .pipe(gulp.dest('dist/css'));

  gulp.src('static/js/**/*.*')
    .pipe(gulp.dest('dist/js'));

});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
   gulp.watch('views/**/*.*', ['default'])
   	   .watch('static/**/*.*', ['default']); 
});
