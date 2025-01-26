import React from 'react';
import {useTheme } from './../theme/ThemeContext'
import {Input } from '../theme/baseComponents'

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  placeholder: string;
}


const InputField: React.FC<InputFieldProps> = ({ value, onChange, error, placeholder }) => {

  return (
    <div>
      <label >Enter a number</label>
      <br />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
