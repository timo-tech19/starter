const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Compile scss to css
function style() {
    // Find scss
    return gulp.src('./src/scss/**/*.scss')
    // pass that file through scss compiler
            .pipe(sass().on('error', sass.logError))
    // set location for compile scss
            .pipe(gulp.dest('./dist/css'))
    // Sync style changes to all browsers
            .pipe(browserSync.stream());        
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;