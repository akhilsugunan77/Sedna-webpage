const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync =require("browser-sync").create();
const cleanCss = require('gulp-clean-css');
const a = require('gulp-imagemin');
const cache = require('gulp-cache');

// css

function style(){
    return gulp.src("./src/scss/**/*.scss")
            .pipe(sass().on("error",sass.logError))
            .pipe(gulp.dest("./src/css"))
            .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir:"./public"
        }
    })
    gulp.watch("./src/scss/**/*.scss",style);
    gulp.watch("./public/**/*.html").on("change",browserSync.reload)
}

function buildCss(){
    return gulp.src("./src/css/**/*.css")
            .pipe(cleanCss())
            .pipe(gulp.dest('public/css'))
};



exports.style = style;
exports.watch = watch;
exports.buildCss = buildCss;
