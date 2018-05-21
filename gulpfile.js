var gulp = require("gulp");
var server = require("gulp-webserver");
var minHtml = require("gulp-htmlmin");
var minJs = require("gulp-uglify");
var minCss = require("gulp-clean-css");
var scss = require("gulp-sass");
var rev = require("gulp-rev");
var revCollector = require("gulp-rev-collector");

gulp.task("html", function() {
    gulp.src("./src/*.html")
        .pipe(gulp.dest("./build"));
});
gulp.task("copyCss", function() {
    gulp.src("./src/css/*.scss")
        .pipe(scss())
        .pipe(minCss())
        .pipe(gulp.dest("./build/css"))
});


gulp.task("js", function() {
    gulp.src("./src/*.js")
        .pipe(minJs())
        .pipe(gulp.dest("./build/js"));
});

gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8888,
            open: true
        }))
});

gulp.task("watch", function() {
    gulp.watch(["html", "copyCss", "js"])
});

gulp.task("default", ["server", "watch"]);