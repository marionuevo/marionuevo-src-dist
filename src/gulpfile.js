var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	uncss = require('gulp-uncss'),
	concat = require('gulp-concat'),

	tasks = ['less', 'scripts', 'index-minify', 'bower-to-dist', 'images'];

gulp.task('less', function () {
	gulp.src(['less/custom-styles.less', 'css/stylesheet.css'])
    .pipe(less())
    .pipe(uncss({
		html: ['index.html']
	}))
	.pipe(concat('styles.css'))
    .pipe(minifyCSS())
	.pipe(gulp.dest('../dist/css'));
});

gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('../dist/js'));
});

gulp.task('images', function() {
	gulp.src('images/*')
		.pipe(gulp.dest('../dist/images'));
});

gulp.task('index-minify', function() {
	gulp.src('*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(htmlmin({removeComments: true}))
		.pipe(gulp.dest('../dist'));
});

gulp.task('bower-to-dist', function() {
	gulp.src(['bower_components/bootstrap/dist/js/bootstrap.min.js'])
		.pipe(gulp.dest('../dist/js'));	
	gulp.src(['bower_components/jquery/dist/jquery.min.js'])
		.pipe(gulp.dest('../dist/js'));
	gulp.src(['bower_components/angularjs/angular.min.js'])
		.pipe(gulp.dest('../dist/js'));
});

gulp.task('watch', function (){
	gulp.watch(['less/*.less', 'css/*.css', '*.html', 'images/*', 'js/*.js'], tasks);
})

tasks.push('watch');

gulp.task('default', tasks);