import styled from "styled-components";

export const WeatherCont = styled.div`
  padding: 10px 10px 10px 0;
  width: 100%;
`

export const WeatherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2em;
  padding: 10px;

`

export const LeftWeatherCont = styled.div`
  width: 60%;

`
export const RightWeatherCont = styled.div`
  width: 40%;
`

export const WeatherInfo = styled.div`
  border: 1px solid blue;
  text-align: center;
  line-height: 2.5em;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2,h1 {
    margin: 12px;
  }

`

export const WeatherDeatailsCont = styled.div`
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  gap: 1em;

  @media screen and (max-width: 1040px) {
    flex-wrap: wrap;
  }
`