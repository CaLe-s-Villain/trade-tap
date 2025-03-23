/* eslint-env jest */
const request = require('supertest');
const app = require('../src/app'); // or wherever your Express app is exported

describe('GET /api', () => {
  it('should return a message from the backend', async () => {
    const res = await request(app).get('/api');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(typeof res.body.message).toBe('string');
  });
});
