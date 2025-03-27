import express from 'express';
import request from 'supertest';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import messageRoutes from '../src/routes/message.routes.js';

describe('Message API', () => {
  let app;
  let mockModels;

  beforeEach(() => {
    // Arrange: set up app and mock models
    app = express();
    app.use(express.json());

    mockModels = {
      Message: {
        findAll: vi.fn(),
        findOne: vi.fn(),
        create: vi.fn(),
      },
    };

    // Load only the message routes with mocked models
    app.use('/api/message', messageRoutes(mockModels.Message));
  });

  it('GET /api/message/latest should return message text from DB', async () => {
    // Arrange
    mockModels.Message.findOne.mockResolvedValue({ text: 'Test message' });

    // Act
    const response = await request(app).get('/api/message/latest');

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ text: 'Test message' });
  });

  it('GET /api/message/latest should return fallback if no message found', async () => {
    // Arrange
    mockModels.Message.findOne.mockResolvedValue(null);

    // Act
    const response = await request(app).get('/api/message/latest');

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ text: 'No message found' });
  });

  it('POST /api/message should create and return a new message', async () => {
    // Arrange
    const mockText = 'This is a new message';
    mockModels.Message.create.mockResolvedValue({ text: mockText });

    // Act
    const response = await request(app)
      .post('/api/message')
      .send({ text: mockText });

    // Assert
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ text: mockText });
    expect(mockModels.Message.create).toHaveBeenCalledWith({ text: mockText });
  });
});
