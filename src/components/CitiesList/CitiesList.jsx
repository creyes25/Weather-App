import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import { CityLi, CityLiCont, CountryIconCont } from "./CitiesList.styles";



const CitiesList = ({cities, cityWeather, handleRemoveCity}) => {
  const [citiesList, setCitiesList] = useState([])
  const {sys, name} = cityWeather || {}
  
  const addCityToList = () => {
    setCitiesList((prevCityList) => {
      let updatedList = [...prevCityList];
      cities.forEach((cityName) => {
        const cityExists = updatedList.some((city) => city.name === cityName);
        if (!cityExists) {
          updatedList.push({ name: cityName, country: "" });
        } else if (sys && name === cityName) {
          updatedList = updatedList.map((city) =>
            city.name === name ? { ...city, country: sys.country } : city
          );
        }
      });
      return updatedList;
    });
  };

  const handleClickRemove = (cityName) => {
    setCitiesList(prevCityList => {
      return prevCityList.filter(city => city.name !== cityName)
    })
    handleRemoveCity(cityName)
  }

  useEffect(() => {
    addCityToList()
  }, [cities, cityWeather])

  return (
    <>
    {citiesList.map(city => (
      <CityLi key={city.name}>
        <Link  to={`/city/${city.name}`}>
          <CityLiCont>
            <CountryIconCont>
            <img
                alt={city.country}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${city.country}.svg`}
              />
            </CountryIconCont>
            {city.name}
          </CityLiCont>
        </Link>
        <div>
          <button onClick={() => handleClickRemove(city.name)}>X</button>
        </div>
      </CityLi>
  
    ))}
    </>
  )
}

export default CitiesList