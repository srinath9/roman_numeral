import React from 'react';
import { render, screen, fireEvent , cleanup} from '@testing-library/react';
import InputField from '../InputField';
import { describe, it, expect, vi, beforeEach, afterEach} from 'vitest';
import "@testing-library/jest-dom/vitest"


describe('InputField Component', () => {

  const mockOnChange = vi.fn(); 
  afterEach(cleanup);
  beforeEach(() => {
    vi.clearAllMocks();
  });


  it('should render correctly with given props', () => {
    render(<InputField value="" onChange={mockOnChange} error={false} placeholder="Enter a number" />);
    screen.logTestingPlaygroundURL();

    const inputElement = screen.getByPlaceholderText('Enter a number');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });

  it('should call onChange when input value changes', () => {
    render(<InputField value="" onChange={mockOnChange} error={false} placeholder="Enter a number" />);

    const inputElement = screen.getByPlaceholderText('Enter a number');
    fireEvent.change(inputElement, { target: { value: '5' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Check if onChange is called with an event
  });
  
  it('should not display an error message when error prop is false', () => {
    render(<InputField value="" onChange={mockOnChange} error={false} placeholder="Enter a number" />);

    const errorMessage = screen.queryByText(/Please enter a valid integer!/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});