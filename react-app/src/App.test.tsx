import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchRomanNumeral, RomanNumeralResponse } from './services/api';
import App from './App';
import "@testing-library/jest-dom/vitest"
import { vi, it, describe, expect, beforeEach, afterEach } from 'vitest';

vi.mock('global', () => ({
  document: {
    createElement: () => ({}),
    body: {
      appendChild: vi.fn(),
    },
  },
}));
global.fetch = vi.fn();


vi.mock('./services/api', () => ({
  fetchRomanNumeral: vi.fn(),
}));


describe('Roman Component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', async () => {
    render(<App />);

    // Check if title is rendered
     expect( await screen.getByText(/Roman Numeral Converter/i)).toBeInTheDocument();
     expect( await screen.getByText('Convert to roman numeral')).toBeInTheDocument();
  });

  it('should handle valid input correctly and update roman numeral', async () => {
    // Mock the API response for a valid input
    (fetchRomanNumeral as vi.Mock).mockResolvedValue({ romanNumeral: 'V' });

    render(<App />);

    const input = screen.getByPlaceholderText('Enter an integer');
    const button = screen.getByText('Convert to roman numeral');


    userEvent.type(input, '5');
    button.click()
    await waitFor(() => {
      expect(screen.queryByText('RomanText Letter are V')).toBeInTheDocument();
    });

  });

  it('should show an error message for invalid input', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Enter an integer');
    fireEvent.change(input, { target: { value: 'a' } });
    const button = screen.getByText('Convert to roman numeral');

    button.click()

    expect(screen.queryAllByText(/Please enter a valid integer!/i).length).toBeGreaterThan(0);

  });

  it('toggles light and dark mode', () => {
    render(<App />);

    // Initial check for light mode (default)
    expect(document.body).toHaveStyle('background-color: rgba(0, 0, 0, 0)'); // light theme background
    expect(screen.getByText('Toggle Dark Mode')).toBeInTheDocument(); // toggle button is visible

    // Click the toggle button to switch to dark mode
    fireEvent.click(screen.getByText('Toggle Dark Mode'));

    // After clicking, check that the body background is dark
    expect(document.body).toHaveStyle('background-color: rgba(0, 0, 0, 0)'); // dark theme background

    // Click the toggle again to switch back to light mode
    fireEvent.click(screen.getByText('Toggle Light Mode'));
    expect(document.body).toHaveStyle('background-color:  rgba(0, 0, 0, 0)');
  });

});
