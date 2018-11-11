// importamos gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// definimos tarea para compilar SASS
gulp.task("default", ["compile-sass"], function(){
    gulp.watch("src/scss/*.scss", ["compile-sass"]); //observa cambios en los archivos scss
});

// definimos tarea para compilar SASS
gulp.task("compile-sass", function(){
    gulp.src("./src/scss/style.scss") // cargamos el archivo
    .pipe(sass().on('error', sass.logError)) // compilamos el archivo SASS y controlamos errores
    .pipe(postcss([
        autoprefixer(), // autoprefija automáticamente el CSS
        cssnano() // minifica el CSS
    ]))
    .pipe(gulp.dest("./dist/css/")); // guardamos el archivo en dist/css
});
