import axios from 'axios';

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
const apiId = 'c280715d3252b3470097491122ae9ce1'

const getWeather = async (cityId, isLoading, handleError, weatherInfo) => {
  try {
    isLoading(true)
    handleError(false)
    const {data} = await axios(`${baseUrl}${cityId}&appid=${apiId}&units=imperial`)
    weatherInfo(data)
    isLoading(false)
  } catch (error) {
    isLoading(false)
    handleError(true)
    console.log(error)
  }
}

export default getWeather