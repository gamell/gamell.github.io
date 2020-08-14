const gulp = require("gulp");
const del = require("del");
const shell = require("shelljs");
const gzip = require("gulp-gzip");

function clean() {
  return del(["docs"]);
}

function buildCljs(cb) {
  shell.cd("./cljs");
  shell.exec("lein build");
  shell.cd("../..");
  shell.exec("sleep 2");
  cb();
}

function compress() {
  return gulp.src(["cljs/build/**/*"]).pipe(gulp.dest("docs"));
}

exports.default = gulp.series(clean, buildCljs, compress);

exports.compress = compress;
