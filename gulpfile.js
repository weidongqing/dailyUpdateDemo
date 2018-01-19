var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testless',function(){
	gulp.src('css/common.less')
	    .pipe(less())
	    .pipe(gulp.dest('css'))
});
gulp.task('default',['testless'])