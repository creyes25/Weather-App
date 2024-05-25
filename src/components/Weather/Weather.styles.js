import styled from "styled-components";

import { 
  mainClear,
  mainClouds,
  mainRain,
  mainDrizzle,
  mainThunder,
  mainSnow,
  mainAtmosphere,
  clearBox,
  cloudBox,
  rainBox,
  drizzleBox,
  thunderBox,
  snowBox,
  atmosphereBox,
  clearIcon,
  cloudsIcon,
  rainIcon,
  drizzleIcon,
  thunderIcon,
  snowIcon,
  atmosphereIcon
} from "../../images/images";

export const mainBackgroundImg = (weather) => {
  switch (weather) {
    case 'Clear':
      return `url(${mainClear})`
    case 'Clouds':
      return `url(${mainClouds})`;
    case 'Rain':
      return `url(${mainRain})`;
    case 'Drizzle':
      return `url(${mainDrizzle})`;
    case 'Thunderstorm':
      return `url(${mainThunder})`;
    case 'Snow':
      return `url(${mainSnow})`;
    default:
      return `url(${mainAtmosphere})`;
  }
}

export const weatherIcon = (weather) => {
  switch (weather) {
    case 'Clear':
      return clearIcon;
    case 'Clouds':
      return cloudsIcon;
    case 'Rain':
      return rainIcon;
    case 'Drizzle':
      return drizzleIcon;
    case 'Thunderstorm':
      return thunderIcon;
    case 'Snow':
      return snowIcon;
    default:
      return atmosphereIcon;
  }
}

export const boxBackground = (weather) => {
  switch (weather) {
    case 'Clear':
      return `url(${clearBox})`
    case 'Clouds':
      return `url(${cloudBox})`;
    case 'Rain':
      return `url(${rainBox})`;
    case 'Drizzle':
      return `url(${drizzleBox})`;
    case 'Thunderstorm':
      return `url(${thunderBox})`;
    case 'Snow':
      return `url(${snowBox})`;
    default:
      return `url(${atmosphereBox})`;
  }
}

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
  text-align: center;
  line-height: 2.5em;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: top left ;
  background-size: cover;
  color: white;
  text-shadow: 2px 2px 2px black;

  h2,h1 {
    margin: 12px;
  }
  
  h1 {
    font-size: 3em;
  }

  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6;
    margin: 12px auto;  
  }

  video {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    box-shadow: 1px 1px 4px black;
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

  @media screen and (max-width: 500px) {
    gap: 1em;
    gap: 0.5em;
  }
`