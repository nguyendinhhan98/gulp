const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

function scssTask() {
  return src("app/assets/scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist/css/main.css", { sourcemaps: "." }));
}

exports.scssTask = scssTask;
exports.default = series("scssTask");

// function jsTask(){
//   return src("app/assets/js/main.js", { sourcemaps})
// }
