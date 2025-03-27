import { render, screen } from '@testing-library/react';
import App from '../App';
import { expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders the app title', async () => {
    // Arrnage
    render(<App />);

    // Assert
    expect(await screen.findByText(/Vite \+ React/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hello from backend/i)).toBeInTheDocument();
  });

  it('increments the counter when button is clicked', async () => {
    // Arrange
    render(<App />);
    const button = await screen.findByRole('button', { name: /count is /i });

    // Act
    await userEvent.click(button);
    await userEvent.click(button);

    // Assert
    expect(button).toHaveTextContent('count is 2');
  });
});
