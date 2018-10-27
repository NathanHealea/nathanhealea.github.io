var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// gulp example
/*gulp.task('task-name', function(){
	// Stuff here
});*/

// Copy node_modules to vender directory
gulp.task('copy', function() {

	// Bootstrap
	gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
	.pipe(gulp.dest('assets/vendor/bootstrap'))

	// Jquery
	 gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('assets/vendor/jquery'))	

    // Font Awesome styles
     gulp.src(['node_modules/font-awesome/css/*', '!**/*.map'])
        .pipe(gulp.dest('assets/vendor/font-awesome/css'))

        // Font Awesome styles
     gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('assets/vendor/font-awesome/fonts'))
    }
)

// Run everything
gulp.task('default', ['copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
    //gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});