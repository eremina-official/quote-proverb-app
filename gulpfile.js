const gulp         = require('gulp');
const concat       = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');

var sourceJS = [
  'src/js/background.js',
  'src/js/proverb.js',
  'src/js/quote.js',
  'src/js/app.js'        // must come last!
];

//concatenate css files and add vendor prefixed properities in css rules
function css() {
  return gulp
    .src('src/css/**/*.css')
    .pipe(concat('stylesheet-quote-app.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']  // config object
    }))
    .pipe(gulp.dest('dist/css'));
}

function js() {
  return gulp
    .src(sourceJS)     /* src method takes an array of js files because the order of concatenation is important */
    .pipe(concat('app.min.js'))
    .pipe(babel({
      presets: ['@babel/env']  // babel config object
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

exports.css = css;
exports.js = js;
