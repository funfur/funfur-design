"use strict";
const gulp = require('gulp');


const preview = require('sketch-preview')({
	input: './sketch/Funfur_RN_1x.sketch',
}, gulp)


gulp.task('export', preview)
