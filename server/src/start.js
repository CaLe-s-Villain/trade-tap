// src/start.js
const { execSync } = require('child_process');

try {
  if (process.env.NODE_ENV === 'development') {
    console.log('🛠 Running DB migrations...');
    execSync('npx sequelize-cli db:migrate', { stdio: 'inherit' });

    console.log('🌱 Running DB seeders...');
    execSync('npx sequelize-cli db:seed:all', { stdio: 'inherit' });
  } else {
    console.log('⚠️ Skipping DB migration and seeding in non-dev mode');
  }
} catch (err) {
  console.error('❌ Migration or seeding failed:', err);
  process.exit(1);
}

require('./index');
