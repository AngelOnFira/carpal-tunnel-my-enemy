var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

var src = "../src/";

var files = [
    src + 'main.js',
    src + 'enemy.js',
    src + 'wall.js',
    src + 'spawn.js'
]

gulp.task('js-fef', function(){
    return gulp.src(files)
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('game.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('../static/'));
});

gulp.task('default', ['js-fef'], function(){});

gulp.task('watch', function(){
    gulp.watch(files, ['default']);
});