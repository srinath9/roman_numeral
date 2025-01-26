// src/hooks/useIntegerInput.ts
import { useState } from 'react';

/**
 * Custom hook to handle integer input validation.
 * @param initialValue - initial value for the input (optional)
 * @returns Object containing the input value, error state, and input change handler
 */
const useIntegerInput = (initialValue: string = '') => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Regex to validate integer input (positive or negative)
    if (/^-?\d*$/.test(value)) {
      setError(false);  // Clear error if the input is valid
      setInputValue(value);
    } else {
      setError(true);  // Show error if the input is invalid
    }
  };

  return {
    inputValue,
    error,
    handleInputChange,
  };
};

export default useIntegerInput;
