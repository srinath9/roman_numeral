import { renderHook, act } from '@testing-library/react-hooks';
import useIntegerInput from '../useIntegerInput'; // Adjust path as necessary
import {it, describe, expect} from 'vitest'

describe('useIntegerInput', () => {

  it('should initialize with default value of "" (empty string)', () => {
    const { result } = renderHook(() => useIntegerInput());
    
    expect(result.current.inputValue).toBe('');
    expect(result.current.error).toBe(false);
  });

  it('should update input value when handleInputChange is called with valid integer', () => {
    const { result } = renderHook(() => useIntegerInput());

    act(() => {
      result.current.handleInputChange({ target: { value: '123' } });
    });

    expect(result.current.inputValue).toBe('123');
    expect(result.current.error).toBe(false); // No error for valid integer
  });

  it('should set error to true when handleInputChange is called with non-integer input', () => {
    const { result } = renderHook(() => useIntegerInput());

    act(() => {
      result.current.handleInputChange({ target: { value: 'abc' } });
    });

    expect(result.current.error).toBe(true);
  });

  it('should clear error when a valid integer is entered after an invalid input', () => {
    const { result } = renderHook(() => useIntegerInput());

    act(() => {
      result.current.handleInputChange({ target: { value: 'abc' } });
    });

    expect(result.current.error).toBe(true);

    act(() => {
      result.current.handleInputChange({ target: { value: '123' } });
    });

    expect(result.current.error).toBe(false);
    expect(result.current.inputValue).toBe('123');
  });

  it('should allow negative integers', () => {
    const { result } = renderHook(() => useIntegerInput());

    act(() => {
      result.current.handleInputChange({ target: { value: '-123' } });
    });

    expect(result.current.inputValue).toBe('-123');
    expect(result.current.error).toBe(false); 
  });

  it('should not allow input with special characters', () => {
    const { result } = renderHook(() => useIntegerInput());

    act(() => {
      result.current.handleInputChange({ target: { value: '12$#' } });
    });

    expect(result.current.error).toBe(true);
  });
});
