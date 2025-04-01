// scripts/lint-staged-filtered.js
import { execSync } from 'child_process';

try {
  const staged = execSync('git diff --cached --name-only --diff-filter=ACMR', {
    encoding: 'utf-8',
  })
    .split('\n')
    .filter(Boolean);

  const jsFiles = staged.filter(
    (file) =>
      /\.(js|jsx)$/.test(file) &&
      (file.startsWith('client/') || file.startsWith('server/')),
  );

  if (jsFiles.length > 0) {
    console.log('Linting staged JS/JSX files:');
    console.log(jsFiles.join('\n'));
    execSync(`npx eslint --fix ${jsFiles.join(' ')}`, { stdio: 'inherit' });
  } else {
    console.log('No JS/JSX files to lint.');
  }
} catch (err) {
  console.error('Failed to run custom lint-staged script', err);
  process.exit(1);
}
