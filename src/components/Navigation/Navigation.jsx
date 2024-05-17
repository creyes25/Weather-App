import { Link } from "react-router-dom";
import { useState } from "react";
// import Home from "../../pages/Home/Home";

import {NavigationCont, UnorderedList, HomeLinkCont, HomeWrapper, CurrentLocationWrapper, CurrentCountryIcon} from './Navigation.styles'


import SearchInput from "../SearchInput/SearchInput";
import CitiesList from "../CitiesList/CitiesList";


const Navigation = ({homeWeather}) => {
  const [citiesList, setCitiesList] = useState([])
  const {sys, name} = homeWeather || {}

  const handleInputSubmision = (city) => {
    if(citiesList.includes(city)) return
    setCitiesList([...citiesList, city])
  }


  return (
    <NavigationCont>
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
        <CitiesList cities={citiesList} />
      </UnorderedList>
    </NavigationCont>
  )
}

export default Navigation