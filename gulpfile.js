// gulpfile.js
import gulp from 'gulp';
import shell from 'gulp-shell';

// Task: Run Parcel
gulp.task('default', shell.task([
  'parcel serve starter/index.html'
]));

// Task: Run Mocha tests
gulp.task('test', shell.task([
  'npm run test'
]));

// Task: Run Cypress tests
gulp.task('cypress', shell.task([
  'npx cypress run'
]));


