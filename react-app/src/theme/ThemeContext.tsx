import React, { createContext, useState, useContext } from 'react';

// Default value for the theme context (you can customize this)
const defaultTheme = 'light'; 

// Create the context with the default value
const ThemeContext = createContext<string>(defaultTheme);

// Custom hook to access theme in components
export const useTheme = () => useContext(ThemeContext);

// Provider component to wrap around the app
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
