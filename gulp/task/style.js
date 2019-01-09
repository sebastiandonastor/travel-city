const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefix = require('autoprefixer');
const varcss = require('postcss-simple-vars');
const nesting = require('postcss-nested');
const imp_css = require('postcss-import');
const mixins= require('postcss-mixins');

gulp.task('style', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([imp_css, mixins ,autoprefix,varcss,nesting]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        } )
        .pipe(gulp.dest('./app/temp/styles') );
});