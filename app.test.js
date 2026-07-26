const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 OK and greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, wrong CI/CD World!');
  });
});