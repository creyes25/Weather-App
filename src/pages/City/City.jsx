import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import getWeather from "../../components/utils/getWeather"
import { Weather } from "../../components/Weather/Weather"




const City = () => {
  let {cityId} = useParams()
  cityId = cityId.toLowerCase()

  const [weatherInfo, setWeatherInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error , setError] = useState(false)


  useEffect(()=> {
    getWeather(cityId, setIsLoading, setError, setWeatherInfo)
  }, [cityId])

  
  return (
    <div>
      {isLoading && <div>Is Loading</div>}
      {error 
        ? 
      <h1>There was an error</h1> 
        : 
      <Weather weatherInfo={weatherInfo} error={error} />}
      
    </div>
  )
}


export default City