import styled from "styled-components";

export const AppDiv = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  display: flex;
  justify-content: center;
  overflow-x: hidden;
  padding: 10px;
  
  @media screen and (max-width: 800px) {
    overflow-x: auto;
  }

`