'use strict';

var gulp = require('gulp');
var maven = require('gulp-maven-deploy');
var path = require('path');
var zip = require('gulp-zip');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('jar-clean', function() {
    return $.del([path.join(conf.paths.jar_dist, '/')]);
});

gulp.task('jar-expanded', ['build'], function() {
    return gulp.src(path.join(conf.paths.dist, '/**'))
        .pipe(gulp.dest(path.join(conf.paths.jar_dist, '/expanded/META-INF/resources/')));
});

gulp.task('jar', ['jar-expanded'], function() {
    return gulp.src(path.join(conf.paths.jar_dist, '/expanded/**'))
        .pipe(zip('gm.jar'))
        .pipe(gulp.dest(path.join(conf.paths.jar_dist,'/lib')))
});

gulp.task('jar-install', ['jar-expanded'], function() {
    return gulp.src(path.join(conf.paths.jar_dist, '/expanded/**'))
        .pipe(zip('gm.jar'))
        .pipe(maven.install({
            'groupId': 'io2010.gm',
        }));
});

// See deployment example at https://www.npmjs.com/package/gulp-maven-deploy
