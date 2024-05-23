import styled from "styled-components";

export const WeatherCardCont = styled.div`
  width: 25%;
  background-size: cover;
  color: white;
  text-shadow: 2px 2px 2px black;

  h2,h3,h4 {
    font-size: 1.3em;
  }

  @media screen and (max-width: 1180px) {
    width: 47%
  }

  @media screen and (max-width: 800px) {
    h2,h3,h4 {
      margin: 10px auto;
    }
  }
`