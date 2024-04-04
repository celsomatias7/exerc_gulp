const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require ('gulp-uglify');

function comprimeImagens () {
    return gulp.src('./source/images/*')
        .pipe(gulp.dest('./build/images'));
}


function comprimeJavaScript () {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' /*para diminuir (comprimir) o tamanho do arquivo, tirando espaços e quebras*/
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilaSass;
exports.watch = function () {
    gulp.watch('./source/styles/*.scss' , gulp.series(compilaSass)); /*para npm run gulp sass fica rodando a cada alteração */
    
}
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;