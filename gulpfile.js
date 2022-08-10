const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync =require("browser-sync").create();
const cleanCss = require('gulp-clean-css');
// css

function style(){
    return gulp.src("./src/scss/**/*.scss")
            .pipe(sass().on("error",sass.logError))
            .pipe(cleanCss())
            .pipe(gulp.dest("./public/css"))
            .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir:"./public"
        }
    })
    gulp.watch("./src/scss/**/*.scss",style);
    gulp.watch("./public/*.html").on("change",browserSync.reload)
}


exports.style = style;
exports.watch = watch;


