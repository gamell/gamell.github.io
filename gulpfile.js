const gulp = require("gulp");
const del = require("del");
const shell = require("shelljs");

function clean() {
  return del(["docs/**/*"]);
}

function buildCljs(cb) {
  shell.cd("./cljs");
  shell.exec("lein build");
  shell.cd("..");
  cb();
}

function copy() {
  return gulp.src("cljs/build/**/*").pipe(gulp.dest("docs/"));
}

function startServer() {
  return shell.exec("npx http-server docs");
}

function build() {
  return gulp.series(clean, buildCljs, copy);
}

exports.default = build();
exports.build = build();
exports.serve = gulp.series(clean, buildCljs, copy, startServer);
