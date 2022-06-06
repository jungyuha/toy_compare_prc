'use strict';
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
gulp.task('server', function () {
	return plugins.nodemon({
		script: 'bin/www',
		watch: 'src/'
	});
});

gulp.task('default', gulp.series('server'));
