import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ol, ul {
    list-style-type: none;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  border: 1px solid #e8e8e8;
  background-color: #f0f0f0;

  &:disabled {
    cursor: not-allowed;
  }
`;
