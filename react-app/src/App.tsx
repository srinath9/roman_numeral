import Roman from './Roman';


import  { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from './theme/theme'; // Import themes

// const lightTheme = {
//   background: '#fff',
//   color: '#000',
// };

// const darkTheme = {
//   background: '#333',
//   color: '#fff',
// };

interface AppProps {
  theme: ThemeType;
  toggleTheme: () => void;
}


// Button to toggle theme
const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.color};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;


const ThemeToggle = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 1px solid ${({ theme }) => theme.color};

  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  cursor: pointer;
`;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [romanNumeral, setRomanNumeral] = useState('');
  const [theme, setTheme] = useState('light');


  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <ThemeToggle onClick={handleThemeToggle}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </ThemeToggle>
        <Roman />
      </Container>
    </ThemeProvider>
  );
};

export default App;


