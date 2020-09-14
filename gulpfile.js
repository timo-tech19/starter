const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer');


// Compile scss to css
function style() {
    // Find scss
    return gulp.src('./src/scss/**/*.scss')
    // pass that file through scss compiler
            .pipe(sass().on('error', sass.logError))
    // autoprefix compiled css code
            .pipe(autoprefixer({cascade: false}))
    // set location for compile scss
            .pipe(gulp.dest('./dist/css'))
    // Sync style changes to all browsers
            .pipe(browserSync.stream());        
}

// Watch task
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    // Reload browser on html/js file changes
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;