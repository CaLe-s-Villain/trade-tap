// server/vitest.config.js
module.exports = {
  test: {
    globals: true,
    environment: 'node',
    include: ['__tests__/**/*.test.js'], // adjust if needed
  },
};
