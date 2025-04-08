// scripts/lint-staged-filtered.js
import { execSync } from 'child_process';
import path from 'path';

try {
  const staged = execSync('git diff --cached --name-only --diff-filter=ACMR', {
    encoding: 'utf-8',
  })
    .split('\n')
    .filter(Boolean);

  const clientFiles = staged
    .filter((file) => file.startsWith('client/') && /\.(js|jsx)$/.test(file))
    .map((file) => file.replace(/^client\//, ''));

  const serverFiles = staged
    .filter((file) => file.startsWith('server/') && /\.js$/.test(file))
    .map((file) => file.replace(/^server\//, ''));

  if (clientFiles.length + serverFiles.length === 0) {
    console.log('No JS/JSX files to lint.');
    process.exit(0);
  }

  if (clientFiles.length) {
    console.log('\n🔍 Linting client files:\n' + clientFiles.join('\n'));
    execSync(`npx eslint --fix ${clientFiles.join(' ')}`, {
      cwd: path.resolve('./client'),
      stdio: 'inherit',
    });
  }

  if (serverFiles.length) {
    console.log('\n🔍 Linting server files:\n' + serverFiles.join('\n'));
    execSync(`npx eslint --fix ${serverFiles.join(' ')}`, {
      cwd: path.resolve('./server'),
      stdio: 'inherit',
    });
  }
} catch (err) {
  console.error('❌ Failed to run custom lint-staged script');
  console.error(err.message || err);
  process.exit(1);
}
