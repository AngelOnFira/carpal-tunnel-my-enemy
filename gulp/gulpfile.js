var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');
    gp_util = require('gulp-util');

var src = "../src/";

var files = [
    src + 'main.js',
    src + 'enemy.js',
    src + 'wall.js',
    src + 'spawn.js',
    src + 'init.js',
    src + 'tower.js',
    src + 'input.js',
    src + 'projectile.js',
    src + 'functions.js',
    src + 'button.js',
    src + 'draw.js',
    src + 'playerOrb.js'
]

gulp.task('js-fef', function(){
    return gulp.src(files)
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('game.min.js'))
        .pipe(gp_uglify())
        .on('error', function (err) { gp_util.log(gp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('../static/'));
});

gulp.task('default', ['js-fef'], function(){});

gulp.task('watch', function(){
    gulp.watch(files, ['default']);
});