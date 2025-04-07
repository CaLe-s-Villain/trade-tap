require('dotenv').config({
  path: require('path').resolve(__dirname, '../../../.env'), // <== go up 3 levels
});

console.log('Loaded ENV →', {
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  DB_HOST: process.env.DB_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
});

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    port: Number(process.env.POSTGRES_PORT),
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    port: Number(process.env.POSTGRES_PORT),
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    port: Number(process.env.POSTGRES_PORT),
    dialect: 'postgres',
  },
};
