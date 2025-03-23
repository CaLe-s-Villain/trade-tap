import React from 'react'; // 👈 this fixes the JSX runtime error
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../utils/env', () => ({
  API_URL: 'http://localhost:3000',
}));

test('renders backend message placeholder', () => {
  render(<App />);
  expect(screen.getByText(/backend says/i)).toBeInTheDocument();
});
