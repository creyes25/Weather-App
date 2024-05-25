import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 15px 10px;
  border-bottom: 1px solid #F2F2F2;
  margin: 0 auto 10px;

  h1 {
    text-align: left;
    width: 100%;
  }

  p {
    max-width: 450px;
  }

  @media screen and (max-width: 1220px ) {
    p {
      display: none;
    }
  }

  @media screen and (max-width: 500px ) {
    h1 {
      font-size: 1.2em;
      text-align: center;
    }
  }
`