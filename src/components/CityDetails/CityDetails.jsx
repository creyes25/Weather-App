
import { Header } from "../Header/Header"
import { WeatherCard } from "../WeatherCard/WeatherCard"
import { WeatherSideBar } from "../WeatherSideBar/WeatherSideBar"

export const CityDetails = ({ weatherInfo }) => {
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
    <div>
      <Header />
      <div>
        <h2>{weatherIconName}</h2>
        <h1>{currentTemp}</h1>
        <h2>{cityName}</h2>
      </div>
      <div>
        <WeatherCard type='feelLike' info={feelsLikeTemp} weatherIconDesc={weatherIconDesc} />
        <WeatherCard type='max' info={maxTemp} weatherIconDesc={weatherIconDesc} />
        <WeatherCard type='min' info={minTemp} weatherIconDesc={weatherIconDesc} />
        <WeatherCard type='country' info={country} weatherIconDesc={weatherIconDesc} />
      </div>
      <div>
        <WeatherSideBar type='visibility' info={visibilityInFt} />
        <WeatherSideBar type='wind' info={windSpeed} />
        <WeatherSideBar type='clouds' info={cloundPercent} />
        <WeatherSideBar type='humidity' info={humidityPercent} />
      </div>
    </div>
  )
}