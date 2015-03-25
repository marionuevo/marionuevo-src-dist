var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

var tasks = ['scripts', 'index-minify', 'styles', 'bower-to-dist', 'images'];

gulp.task('styles', function() {
	gulp.src('src/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
	gulp.src('src/images/*')
		.pipe(gulp.dest('dist/images'));
});

gulp.task('index-minify', function() {
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(htmlmin({removeComments: true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('bower-to-dist', function() {
	gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css'])
		.pipe(gulp.dest('dist/css'));
	gulp.src(['bower_components/bootstrap/dist/js/bootstrap.min.js'])
		.pipe(gulp.dest('dist/js'));	
	gulp.src(['bower_components/jquery/dist/jquery.min.js'])
		.pipe(gulp.dest('dist/js'));
	gulp.src(['bower_components/angularjs/angular.min.js'])
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function (){
	gulp.watch(['src/css/*.css', 'src/*.html', 'src/images/*', 'src/js/*.js'], tasks);
});

tasks.push('watch');

gulp.task('default', tasks);