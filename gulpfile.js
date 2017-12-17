const gulp = require('gulp');

gulp.task('default',
    function () {
        return gulp.src(['./src/**/*.png', '!./**/*.ts', '!./**/*.tsx']).pipe(gulp.dest('./build'));
    }
);
