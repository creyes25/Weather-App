import styled from "styled-components";

export const WeatherCont = styled.div`
  padding: 10px 20px 10px 0;
  width: 100%;
`

export const WeatherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2em;
  padding: 10px;
  padding-right: 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

`

export const LeftWeatherCont = styled.div`
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 80%
  }

`
export const RightWeatherCont = styled.div`
  width: 40%;

  @media screen and (max-width: 800px) {
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 0.6em;
  }
`

export const WeatherInfo = styled.div`
  border: 1px solid blue;
  text-align: center;
  line-height: 2.5em;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2,h1 {
    margin: 12px;
  }

  @media screen and (max-width: 800px) {
    height: 250px;
  }

`

export const WeatherDeatailsCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  gap: 1em;

  @media screen and (max-width: 1180px) {
    flex-wrap: wrap;
  }
`