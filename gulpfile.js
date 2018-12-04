"use strict";

var gulp =          require('gulp'),
    sass =          require('gulp-sass'),
    autoprefixer =  require('gulp-autoprefixer'),
    newer =         require('gulp-newer'),
    sourcemaps =    require('gulp-sourcemaps'),
    imagemin =      require('gulp-imagemin'),
    browserSync =   require('browser-sync').create(),
    reload =        browserSync.reload,
    concat =        require('gulp-concat'),
    uglify =        require('gulp-uglify'),
    watch =         require('gulp-watch'),
    imgSrc =        'images/originals/*',
    imgDest =       'images/';

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://127.0.0.1:5500/index.html",
        files: "**/*"
    });
})


gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(sass({ outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./'));
})

gulp.task('watch', function() {

    //watch .scss files
    gulp.watch('sass/*.scss', ['sass']).on("change", browserSync.reload);
    gulp.watch('sass/**/*.scss', ['sass']).on("change", browserSync.reload);
    //watch js directory
    gulp.watch('js/dev/*.js', ['js'.on("change", browserSync.reload)])
    //watch original images directory
    gulp.watch($imgSrc, ['images']).on("change", browserSync.reload);
});

gulp.task('images', function() {
    return gulp.src(imgSrc, {base: 'images/originals'})
        .pipe(newer(imgDest))
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest(imgDest));
});

var jsInput = { js: 'js/dev/*.js' }
var jsOutput = 'js/dist/';

gulp.task('js', function(){
    return gulp.src(jsInput)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/dist/'))
});


gulp.task('default', [ 'sass', 'browser-sync', 'watch', 'images', 'js']);