import styled from "styled-components";

export const WeatherCardCont = styled.div`
  width: 25%;
  border: 1px solid red;


  @media screen and (max-width: 1180px) {
    width: 40%
  }

  @media screen and (max-width: 800px) {
    h2,h3,h4 {
      margin: 10px auto;
    }
  }
`