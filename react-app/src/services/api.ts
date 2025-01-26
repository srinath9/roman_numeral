import { API_BASE_URL } from '../utils/constants';

export interface RomanNumeralResponse {
  romanNumeral: string;
}

// This is for the error response when the request fails
export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

/**
 * Fetch the Roman numeral from the API
 * @param query - The integer query to convert to a Roman numeral
 * @returns A promise containing the Roman numeral
 */
export const fetchRomanNumeral = async (query: string): Promise<RomanNumeralResponse> => {
  const API_URL = API_BASE_URL;
  try {
    const response = await fetch(`${API_URL}/romannumeral?query=${query}`);
    if (!response.ok) {
      const errorResponse: ErrorResponse = await response.json();
      throw new Error(`Error: ${errorResponse.message} `);
    }
    return response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};
