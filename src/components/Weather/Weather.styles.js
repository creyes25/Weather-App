import styled from "styled-components";

export const WeatherCont = styled.div`
  padding: 10px 10px 10px 0;
  width: 100%;
`

export const WeatherInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  // gap: 1em;
  padding: 10px;

`

export const LeftWeatherCont = styled.div`
  width: 400px;

`
export const RightWeatherCont = styled.div`
  width: 30%;
`

export const WeatherInfo = styled.div`
  // border: 1px solid red;
  // width: 500px;
  text-align: center;
  line-height: 2.5em;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WeatherDeatailsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px;
  gap: 2.5em;
`