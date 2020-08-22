const gulp = require("gulp");


gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
})

gulp.task("images",function(){
    return gulp.src("*.{png,jpg}")
    .pipe(gulp.dest("dist/images"))
})

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
})

gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
})

gulp.task("build",["copy-html","images","data","scripts"],function(){
    console.log("项目搭建成功");
})

const scss = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("minify",function(){
    return gulp
    .src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
})

gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("*.{png,jpg}",["images"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
    gulp.watch("stylesheet/index.scss", ["minify"]);
})

const connect = require("gulp-connect");

gulp.task("server", function () {
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true,
  });
});


//同时启动server 和 watch 这两个任务
gulp.task("default", ["server", 'watch']);
