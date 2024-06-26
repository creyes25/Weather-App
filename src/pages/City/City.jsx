import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import getWeather from "../../utils/getWeather"
import { Weather } from "../../components/Weather/Weather"

const City = () => {
  let {cityId} = useParams()
  cityId = cityId.toLowerCase()

  const [weatherInfo, setWeatherInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error , setError] = useState(false)

  const handleWeather = (info) => {
    setWeatherInfo(info);
  }

  useEffect(()=> {
    getWeather(cityId, setIsLoading, setError, handleWeather)
  }, [cityId])

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

export default City