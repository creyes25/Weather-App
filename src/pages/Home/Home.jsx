import { useEffect, useState } from "react"
import axios from "axios"

import { CityDetails } from "../../components/Weather/Weather"

const apiId = 'c280715d3252b3470097491122ae9ce1'

const Home = () => {
  const [weatherInfo, setWeatherInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      getCurrentCity(latitude, longitude)
    })
  }

  const getCurrentCity = async (lat, lon) => {
    try {
      const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`)
      getCityWeather(data.name)
    } catch (error) {
      console.log(error)
    }
  }

  const getCityWeather = async (city) => {
    try {
      setError(false)
      setIsLoading(true)
      const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=imperial`)
      setWeatherInfo(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div>
      {isLoading && <div>Is Loading</div>}
      {error 
        ? 
      <h1>There was an error</h1> 
        : 
      <CityDetails weatherInfo={weatherInfo} error={error} />}
      
    </div>
  )
}

export default Home