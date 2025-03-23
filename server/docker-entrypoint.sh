#!/bin/sh

echo "🔧 Running migrations..."
npx sequelize-cli db:migrate

# Optionally seed only when DB is fresh
if [ ! -f ".migrated.lock" ]; then
  echo "🌱 Running seeds..."
  npx sequelize-cli db:seed:all
  touch .migrated.lock
fi

echo "🚀 Starting dev server..."
npm run dev
