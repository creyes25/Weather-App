import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const CitiesList = ({cities}) => {
  const [formatedCities, setFormatedCities] = useState([])
  
  const formatCityName = () => {
    const formatedList = cities.map(city => {
      return city[0].toUpperCase() + city.slice(1).toLowerCase()
    })
    
    setFormatedCities([...formatedList])

  }

  useEffect(() => {
    formatCityName()
  }, [cities])

  return (
    <>
    {formatedCities.map(city => (
      <li key={city}>
        <Link key={city} to={`/city/${city}`}>{city}</Link>
      </li>
    ))}
    </>
  )
}

export default CitiesList