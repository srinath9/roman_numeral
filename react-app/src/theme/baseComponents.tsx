import styled from 'styled-components';



export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin: 10px;
  border-radius: 12px; 
  border:  ${(props) => `1px solid  ${props.theme.color}` };
  background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  `;

export  const ChildContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background };
  color: ${({ theme }) => theme.color};
  border-radius: 8px;
  min-height:  100vh;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.background };  // Access the theme
  color: ${({ theme }) => theme.color };  // Access the theme
  padding: 10px;
  font-size: 16px;
  border: ${({ theme }) =>  `2px solid ${theme.color}` };
  border-radius: 4px; 
`;
