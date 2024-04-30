import { useEffect, useState } from "react"
import { WeatherCardCont } from "./WeatherCard.styles"

export const WeatherCard = ({type, info, weatherIconDesc}) => {
  const [title, setTitle] = useState('')

  const getTitle = (type) => {
    switch (type) {
      case 'feelLike':
        setTitle('Feels like');
        break;
      case 'max':
        setTitle('Max Temp');
        break;
      case 'min':
        setTitle('Min Temp');
        break;
      case 'country':
        setTitle('Country');
        break;
      default:
        setTitle('')
        break;
    }
  }

  useEffect(() => {
    getTitle(type)
  },[type])

  return (
    <WeatherCardCont>
      <h3>{title}</h3>
      {(title !== 'Country') 
      ?
      <h2>{info}&deg;F</h2>
      :
      <h2>{info}</h2>
    }
      <h4>{weatherIconDesc}</h4>
    </WeatherCardCont>
  )
}