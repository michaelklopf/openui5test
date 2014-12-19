var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

// Take main.js and link all module calls, we set up with Browserify
gulp.task('browserify', function() {
    gulp.src('static/js/main.js')
        .pipe(browserify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

// Copy css, js, and html files in dist folder
gulp.task('copy', function() {
   gulp.src('views/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('static/css/*.css')
    .pipe(gulp.dest('dist/css'));

  gulp.src('static/js/**/*.*')
    .pipe(gulp.dest('dist/js'));

});

// Create a task called default, which does the browserify step and then copies the files
gulp.task('default', ['browserify', 'copy']);

// Sets up a task to watch for changes in the source folder and start the default task automatically
// Apparently works only with *unix shell
gulp.task('watch', function() {
   gulp.watch('views/**/*.*', ['default'])
   	   .watch('static/**/*.*', ['default']); 
});
