//require dependencies
const gulp         = require('gulp');
const concat       = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');

//define paths
const pathCSS = { 
  sourceCSS: 'src/css/**/*.css',
  destCSS: 'dist/css'
};
const pathJS = {
  sourceJS: [
            'src/js/background.js', /* the sourceJS is an array because the order of concatenation is important */
            'src/js/proverb.js',
            'src/js/quote.js',
            'src/js/app.js'        // must come last!
            ],
  destJS: 'dist/js'
};

//concatenate css files and add vendor prefixed properities in css rules
function css() {
  return gulp
    .src(pathCSS.sourceCSS)
    .pipe(concat('stylesheet-quote-app.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']  // config object
    }))
    .pipe(gulp.dest(pathCSS.destCSS));
}

//concatenate, transpile and minify js files
function js() {
  return gulp
    .src(pathJS.sourceJS)     
    .pipe(concat('app.min.js'))
    .pipe(babel({
      presets: ['@babel/env']  // babel config object
    }))
    .pipe(uglify())
    .pipe(gulp.dest(pathJS.destJS));
}



//export functions as tasks
exports.css = css;
exports.js = js;
