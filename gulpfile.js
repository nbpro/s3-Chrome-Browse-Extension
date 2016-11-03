var gulp  = require('gulp');
var notify = require("gulp-notify");

var copy = require('gulp-copy')
	,browserify = require('browserify')
	,buffer = require('vinyl-buffer')
	,gulpCssNano = require('gulp-cssnano')
	,gulpIf = require('gulp-if')
	,gulpLess = require('gulp-less')
	,gulpUglify = require('gulp-uglify')
	,reactify = require('reactify')
	,babelify = require("babelify")
	,source = require("vinyl-source-stream");

var argv = require('yargs').argv
	,statics = ['index.html', 'manifest.json', 'images/*', 'fonts/*'];

gulp.task('statics', function(){
	return gulp.src(statics)
		.pipe(copy('build'));
});

gulp.task('style', function(){
	if(!argv.prod) gulp.watch(['less/**'], ['style']);

	return gulp.src('less/app.less')
		.pipe(gulpLess())
		.pipe(gulpCssNano())
		.pipe(gulp.dest('build/css'));
});

gulp.task('browserify', function(){
	if(!argv.prod) gulp.watch(['js/**'], ['browserify']);
	if(!argv.prod) gulp.watch(statics, ['init']);

	return browserify({debug: true})
		.transform(reactify,babelify,{presets: ["es2015", "react"]})
		.add('js/app.jsx')
		.bundle()
		.pipe(source("app.js"))
		.pipe(buffer())
		//.pipe(babel({
		//	presets: ['es2015'],
		//	plugins: ['transform-runtime'],
		//}))
		.pipe(gulpIf(argv.prod, gulpUglify()))
		.pipe(gulp.dest('./build/js'));
});


gulp.src("./src/test.ext")
	.pipe(notify("Hello Gulp!"));

gulp.task('init', ['statics']);

gulp.task('build', ['browserify', 'style']);
