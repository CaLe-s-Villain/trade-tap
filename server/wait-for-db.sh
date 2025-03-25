#!/bin/sh

echo "⏳ Waiting for Postgres at $DB_HOST:$DB_PORT..."
until nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 1
done

echo "🔧 Running migrations..."
npx sequelize-cli db:migrate

if [ ! -f ".migrated.lock" ]; then
  echo "🌱 Running seeds..."
  npx sequelize-cli db:seed:all
  touch .migrated.lock
fi

echo "🚀 Starting dev server..."
npm run dev
