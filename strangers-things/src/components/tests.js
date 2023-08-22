import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest/dom/extend-expect"
import App from './App'

describe('Logged in or logged out tests', () => {
    test('should return logged out status initially', () => {
      const response = await request(App).get('/api/auth/status');
      expect(response.status).toBe(200);
      expect(response.body.loggedIn).toBe(false);
    });
  
    test('should return logged in status after successful login', async () => {
      const response = await request(App)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'password123' });
      expect(response.status).toBe(200);
      expect(response.body.loggedIn).toBe(true);
    });
  });