import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import { CityLi, CityLiCont, CountryIconCont, EmptyDiv } from "./CitiesList.styles";

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
        <Link  
          to={`/city/${city.name}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CityLiCont>
          {city.country === '' ? <EmptyDiv></EmptyDiv> :
            <CountryIconCont>
            <img
                alt={city.country}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${city.country}.svg`}
              />
            </CountryIconCont>
          }
            {city.name}
          </CityLiCont>
          <div className="btn-cont">
            <button className="remove-btn" onClick={() => handleClickRemove(city.name)}>
              <img 
                src="https://cdn-icons-gif.flaticon.com/8121/8121324.gif" 
                alt="trash button"
              />
            </button>
          </div>
        </Link>
      </CityLi>
  
    ))}
    </>
  )
}

export default CitiesList