/*
 * gulpFile.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
/*jshint esnext: true*/
"use strict"; //jshint ignore: line

import gulp from 'gulp';
import babel from 'gulp-babel';

const JS_FILE_SOURCE_PATH = './client/static/es6/**/*.js';
const JS_FILE_DESTINATION_PATH = './client/static/js/app';

gulp.task('compile', () => {
  return gulp.src(JS_FILE_SOURCE_PATH)
    .pipe(babel({
      presets: ['es2015', 'stage-2']
    }))
    .pipe(gulp.dest(JS_FILE_DESTINATION_PATH));
});

gulp.task('watch', () => {
  return gulp.watch(JS_FILE_SOURCE_PATH, () => gulp.start('compile'));
});

gulp.task('default', ['compile']);
