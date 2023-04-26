const gulp  = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const watch  = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function (){
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))

})

gulp.task('watch', function (){
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})