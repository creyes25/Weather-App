import { useEffect, useState } from "react"
import axios from "axios"
import getWeather from "../../utils/getWeather"
import { Weather } from "../../components/Weather/Weather"

const apiId = 'c280715d3252b3470097491122ae9ce1'

const Home = ({handleCurrentWeather}) => {
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
      setIsLoading(true)
      const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`)

      await getWeather(data.name, setIsLoading, setError, setWeatherInfo)
      
      setWeatherInfo((prevWeatherInfo) => {
        handleCurrentWeather(prevWeatherInfo);
        return prevWeatherInfo;
      });

    } catch (error) {
      setIsLoading(false)
      setError(true)
      console.log(error)
    }
  }
  useEffect(() => {
    getCurrentLocation()

  }, [])

  return (
    <div>
      {error 
        ? 
      <h1>There was an error</h1> 
        : 
      <Weather weatherInfo={weatherInfo} isLoading={isLoading} />}
    </div>
  )
}

export default Home