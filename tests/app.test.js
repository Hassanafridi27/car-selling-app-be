const request = require('supertest');
const express = require('express');

const app = express();

// Dummy route for testing
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test route' });
});

describe('GET /test', () => {
  it('should return a 200 status and a message', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Test route');
  });
});
