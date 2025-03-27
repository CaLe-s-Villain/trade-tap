import { beforeEach, afterEach, test, expect, vi } from 'vitest';
import request from 'supertest';
import app from '../src/app';

// Import the whole models object
import models from '../src/models';

// Shortcut for cleaner access
const { Message } = models;

afterEach(() => {
  vi.restoreAllMocks();
});

test('GET /api/message/latest should return message text from DB', async () => {
  // Arrange: Mock DB response for findOne
  vi.spyOn(Message, 'findOne').mockResolvedValue({ text: 'Test message' });

  // Act: Make the request
  const response = await request(app).get('/api/message/latest');

  // Assert: Check status and response
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ text: 'Test message' });
});

test('GET /api/message/latest should return fallback if no message found', async () => {
  // Arrange: Simulate no DB result
  vi.spyOn(Message, 'findOne').mockResolvedValue(null);

  // Act
  const response = await request(app).get('/api/message/latest');

  // Assert: Should return fallback message
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ text: 'No message found' });
});

test('POST /api/message should create and return a new message', async () => {
  const mockText = 'This is a new message';
  const mockMessage = {
    id: 1,
    text: mockText,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Arrange: Mock Message.create
  const createSpy = vi.spyOn(Message, 'create').mockResolvedValue(mockMessage);

  // Act
  const response = await request(app)
    .post('/api/message')
    .send({ text: mockText });

  // Assert
  expect(response.status).toBe(201);
  expect(response.body).toMatchObject({ text: mockText });
  expect(createSpy).toHaveBeenCalledWith({ text: mockText });
});
