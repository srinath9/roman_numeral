import { useState, useCallback, useEffect } from 'react'
import './App.css'
import { fetchRomanNumeral, RomanNumeralResponse } from './services/api';
import InputField from './components/InputField';
import ErrorMessage from './components/ErrorMessage';
import {Button, ChildContainer} from './theme/baseComponents'
function Roman() {
  const [romanText, setRomanText] = useState('')

  const [loading, setLoading] = useState(true);
  // State for errors
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange =  (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    // Check if the value is a valid integer (positive or negative)
    if (/^-?\d*$/.test(value)) {
      setError(false);
      setInputValue(value); 
    } else {
      setError(true); 
    }
  };


  const fetchUsers = useCallback(async  (number : string) => {
    try {
      const result: RomanNumeralResponse = await fetchRomanNumeral(number);
        setRomanText(`RomanText Letter are ${result.romanNumeral}`);
    } catch (error) {
      if (error instanceof Error) {
        setRomanText(error.message);
      } else {
        setRomanText('Failed to fetch Roman numeral ');
      }
    } finally {
      setLoading(false);
    }
  },[]);


  return (
    <>
      <ChildContainer >
        <h1>Roman Numeral Converter</h1>
        
        <InputField
          value={inputValue}
          onChange={handleInputChange}
          error={error}
          placeholder="Enter an integer"
          
        />

        <Button onClick={() => fetchUsers(inputValue) }>Convert to roman numeral</Button>
        <p>
          {romanText}
        </p>
        {error && <ErrorMessage message="Please enter a valid integer!" />}
      </ChildContainer>
    </>
  )
}

export default Roman
