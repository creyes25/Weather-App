import { Link } from "react-router-dom";
import { useState } from "react";

import {BurgerIcon, NavigationCont, UnorderedList, HomeLinkCont, HomeWrapper, CurrentLocationWrapper, CurrentCountryIcon} from './Navigation.styles'


import SearchInput from "../SearchInput/SearchInput";
import CitiesList from "../CitiesList/CitiesList";


const Navigation = ({homeWeather, cityWeather}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [citiesList, setCitiesList] = useState([])
  const {sys, name} = homeWeather || {}

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleInputSubmision = (city) => {
    const cityWordsArray = city.split(' ')
    const formatedCity = cityWordsArray.map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })

    const cityName = formatedCity.join(' ')

    if(citiesList.includes(cityName)) return
    setCitiesList([...citiesList, cityName])
  }

  const handleRemoveCity = (cityName) => {
    setCitiesList(prevCityList => {
      return prevCityList.filter(city => city !== cityName)
    })
  }

  return (
    <>
      <NavigationCont isOpen={menuOpen}>
        <HomeLinkCont>
          <Link to='/'>
            <HomeWrapper>
              <CurrentCountryIcon>
                <img
                  alt={sys ? sys.country : ''}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${sys ? sys.country : ''}.svg`}
                />
              </CurrentCountryIcon>
              <CurrentLocationWrapper>
                <h4>Current Location:</h4>
                <h5>
                  <span>{sys ? `${sys.country} - ` : 'Home' }</span>
                  <span>
                    {name ? name : '' }
                  </span>
                </h5>
              </CurrentLocationWrapper>
            </HomeWrapper>
          </Link>
        </HomeLinkCont>
        <SearchInput handleInputSubmision={handleInputSubmision} />
        <UnorderedList>
          <CitiesList cities={citiesList} handleRemoveCity={handleRemoveCity} cityWeather={cityWeather} />
        </UnorderedList>
      </NavigationCont>
      <BurgerIcon onClick={handleBurgerClick} >
        <img src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png" alt="" />
      </BurgerIcon>
    </>
  )
}

export default Navigation