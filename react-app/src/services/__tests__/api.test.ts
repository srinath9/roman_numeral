import { fetchRomanNumeral, RomanNumeralResponse } from '../api';
import { vi, it, describe, afterEach, expect } from 'vitest';

// Mock the global fetch function
global.fetch = vi.fn();

describe('fetchRomanNumeral', () => {
  const mockApiUrl = 'http://localhost:8080/romannumeral?query='; // Adjust this based on your API_BASE_URL

  afterEach(() => {
  });

  it('should return the correct Roman numeral for a valid query', async () => {
    const mockResponse: RomanNumeralResponse = { romanNumeral: 'X' };
    
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchRomanNumeral('10');
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${mockApiUrl}10`);
  });

  it('should throw an error when the response is not ok', async () => {
    const mockRes = {
      "timestamp": "2025-01-25T17:38:50.504+0000",
      "status": 400,
      "error": "Bad Request",
      "message": "Requested roman numeral is not between 1 and 10000000",
      "path": "/romannumeral"
    };

    // Mock the fetch response to simulate an error
    // Mocking fetch to return a rejected response with a status code of 400
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false, // This indicates the response is not "OK" (e.g., status code 400 or 500)
      status: 400,
      json: async () => mockRes,
    });

    await expect(fetchRomanNumeral('10')).rejects.toThrow(`Error: ${mockRes.message} `);
  });

  it('should handle network errors', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));
    await expect(fetchRomanNumeral('10')).rejects.toThrow('Network Error');
  });
});