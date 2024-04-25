import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import { CityLi, CityLiCont, CountryIconCont } from "./CitiesList.styles";



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
      <CityLi>
        <Link key={city} to={`/city/${city}`}>
          <CityLiCont>
            <CountryIconCont>
              
            </CountryIconCont>
            {city}
          </CityLiCont>
        </Link>
      </CityLi>
  
    ))}
    </>
  )
}

export default CitiesList