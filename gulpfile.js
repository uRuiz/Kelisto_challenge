// importamos gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// definimos tarea para compilar SASS
gulp.task("default", ["compile-sass"], function(){
    gulp.watch("src/scss/*.scss", ["compile-sass"]);
});

// definimos tarea para compilar SASS
gulp.task("compile-sass", function(){
    gulp.src("./src/scss/style.scss") // cargamos el archivo
    .pipe(sass().on('error', sass.logError)) // compilamos el archivo SASS
    .pipe(gulp.dest("./dist/css/")); // guardamos el archivo en dist/css
});