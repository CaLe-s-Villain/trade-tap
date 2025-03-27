const { exec } = require('child_process');
const isWSL = require('os').release().toLowerCase().includes('microsoft');

// Force NODE_ENV=development and set legacy-watch only on WSL
const nodemonCmd = isWSL
  ? 'cross-env NODE_ENV=development nodemon --legacy-watch src/index.js'
  : 'cross-env NODE_ENV=development nodemon src/index.js';

console.log(`Starting: ${nodemonCmd}`);
const devProcess = exec(nodemonCmd, { stdio: 'inherit', shell: true });

devProcess.stdout?.pipe(process.stdout);
devProcess.stderr?.pipe(process.stderr);
