import { useEffect, useState } from "react"

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
    <div>
      <h3>{title}</h3>
      {(title !== 'Country') 
      ?
      <h2>{info}&deg;F</h2>
      :
      <h2>{info}</h2>
    }
      <h3>{weatherIconDesc}</h3>
    </div>
  )
}