import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

import { Weather } from "../../components/Weather/Weather"


const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`

const apiId = 'c280715d3252b3470097491122ae9ce1'

const City = () => {
  let {cityId} = useParams()
  cityId = cityId.toLowerCase()

  const [weatherInfo, setWeatherInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error , setError] = useState(false)

  const getCityWeather = async () => {
    try {
      setError(false)
      setIsLoading(true)
      const {data} = await axios(`${baseUrl}${cityId}&appid=${apiId}&units=imperial`)
      setWeatherInfo(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(true)
      console.log(error)
    }
  }

  useEffect(()=> {
    getCityWeather()
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