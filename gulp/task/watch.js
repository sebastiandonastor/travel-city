const gulp = require('gulp');
const watch = require('gulp-watch');
const brownSync = require('browser-sync');



 gulp.task('watch', () => {

    brownSync.init({
        server: {
            baseDir: "app"
        }
    });
 

    watch('./app/assets/**/*.css', () => { 
        gulp.start('cssInject');
    });




});

gulp.task('cssInject',['style'], () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(brownSync.stream());
});

