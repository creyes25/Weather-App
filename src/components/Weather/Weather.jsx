
import { WeatherCont, WeatherInfoWrapper, LeftWeatherCont, RightWeatherCont, WeatherInfo, WeatherDeatailsCont } from "./Weather.styles"

//images 
import { mainBackgroundImg, boxBackground, weatherIcon } from "./Weather.styles"

// components
import { Header } from "../Header/Header"
import { WeatherCard } from "../WeatherCard/WeatherCard"
import { WeatherSideBar } from "../WeatherSideBar/WeatherSideBar"

export const Weather = ({ weatherInfo, isLoading }) => {
  const data = weatherInfo || {}
  const { name, main, sys, weather, wind, visibility, clouds } = data || {}

  const cityName = name
  const currentTemp = main && Math.round(main.temp)
  const feelsLikeTemp = main && Math.round(main.feels_like)
  const maxTemp = main && Math.round(main.temp_max)
  const minTemp = main && Math.round(main.temp_min)
  const country = sys && sys.country
  const weatherIconName = weather && weather[0].main
  const weatherIconDesc = weather && weather[0].description
  const visibilityInFt = visibility
  const windSpeed = wind && wind.speed
  const cloundPercent = clouds && Math.round(clouds.all)
  const humidityPercent = main && Math.round(main.humidity)

  return (
    <WeatherCont>
      <Header />
      {isLoading 
        ?
        <h1>Loading...</h1>
        :
        <WeatherInfoWrapper>
          <LeftWeatherCont>
            <WeatherInfo 
              style={{backgroundImage: mainBackgroundImg(weatherIconName) }}
            > 
              <div>
                <video 
                  src={weatherIcon(weatherIconName)}
                  autoPlay
                  loop
                  muted
                />
                <h2>{weatherIconName}</h2>
              </div>
              <h1>{currentTemp}&deg;F</h1>
              <h2>{cityName}</h2>
            </WeatherInfo>
            
            <WeatherDeatailsCont>
              <WeatherCard 
                backgroundImage={boxBackground(weatherIconName)}
                type='feelLike' 
                info={feelsLikeTemp} 
                weatherIconDesc={weatherIconDesc} 
              />

              <WeatherCard 
                backgroundImage={boxBackground(weatherIconName)}
                type='max' 
                info={maxTemp} 
                weatherIconDesc={weatherIconDesc} 
                />

              <WeatherCard 
                backgroundImage={boxBackground(weatherIconName)}
                type='min' 
                info={minTemp} 
                weatherIconDesc={weatherIconDesc} 
                />

              <WeatherCard
                backgroundImage={boxBackground(weatherIconName)} 
                type='country' 
                info={country} 
                weatherIconDesc={weatherIconDesc} 
              />
            </WeatherDeatailsCont>
          </LeftWeatherCont>

          <RightWeatherCont>
              <WeatherSideBar type='visibility' info={visibilityInFt} />
              <WeatherSideBar type='wind' info={windSpeed} />
              <WeatherSideBar type='clouds' info={cloundPercent} />
              <WeatherSideBar type='humidity' info={humidityPercent} />
          </RightWeatherCont>
        </WeatherInfoWrapper>
      }
    </WeatherCont>
  )
}