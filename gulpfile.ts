import { src, dest } from 'gulp'
import sass from 'sass'
import path from 'path'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

export default function() {
  return src(path.resolve(__dirname, 'src/**/*.scss'))
    .pipe(gulpSass(sass).sync())
    .pipe(autoprefixer())
    .pipe(dest(path.resolve(__dirname, 'dist')))
}
