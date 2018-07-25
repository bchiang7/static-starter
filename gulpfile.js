'use strict';

const gulp = require('gulp');
const html = require('./build/html');
const sass = require('./build/sass');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[html, sass, scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', ['html', 'sass', 'scripts', 'images']);
