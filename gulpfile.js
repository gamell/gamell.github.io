const fs = require("fs/promises");
const gulp = require("gulp");
const shell = require("shelljs");

async function clean() {
  await fs.rm("docs", { recursive: true, force: true });
  await fs.mkdir("docs", { recursive: true });
}

function buildCljs(cb) {
  shell.cd("./cljs");
  const result = shell.exec("lein build");
  shell.cd("..");
  cb(result.code === 0 ? undefined : new Error("lein build failed"));
}

function copy() {
  // encoding: false keeps binary assets (png) intact under gulp 5
  return gulp.src("cljs/build/**/*", { encoding: false }).pipe(gulp.dest("docs/"));
}

function startServer() {
  return shell.exec("npx http-server docs");
}

const build = gulp.series(clean, buildCljs, copy);

exports.default = build;
exports.build = build;
exports.serve = gulp.series(build, startServer);
