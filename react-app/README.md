# Integer to Roman Numbers Convertor with Theme Toggle App

This is a simple React application that demonstrates the usage of themes (light and dark mode) in a React app using `styled-components`. The app includes a button to toggle between light and dark themes, and it uses `ThemeProvider` to manage the theme context. A child component (`Roman`) consumes the theme provided by the parent (`App.tsx`) and adjusts its styles accordingly.

## Features

- Light and dark theme toggle
- Dynamic styling using `styled-components`
- React `ThemeProvider` to manage theme context
- Child component that automatically consumes the theme
- Dockerized for easy execution in containerized environments

## Project Description

The Integer to Roman Numeral Converter is a simple utility that converts an integer into a Roman numeral string. The program is designed to handle integers in the range of 1 to 3999, which is the traditional range for Roman numerals. The project allows you to input an integer, and it outputs its Roman numeral representation, following the rules of Roman numerals.
Roman Numerals

Roman numerals are composed of seven symbols:

    I = 1
    V = 5
    X = 10
    L = 50
    C = 100
    D = 500
    M = 1000

The numbers are constructed by combining these symbols. For example:

    3 is written as III (1 + 1 + 1)
    4 is written as IV (5 - 1)
    9 is written as IX (10 - 1)
    58 is written as LVIII (50 + 5 + 3)
    1999 is written as MCMXCIX (1000 + 900 + 90 + 9)

Features

    Converts integers between 1 and 3999 into their Roman numeral equivalents.
    Works with any positive integer within the specified range.
    Provides an error message if an invalid integer is entered.
## Technologies Used

- React
- TypeScript
- styled-components
- Docker



## How to Run the Project Locally

### Prerequisites

- Node.js (>= 22.x.x)
- npm (>= 10.x.x) or Yarn (>= 1.x.x)

### Steps to Run Locally


### Execution commands

```
docker build -t react-app:dev .     
````

```
docker run -p 5173:5173 react-app:dev 
```