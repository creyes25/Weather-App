import { Link } from "react-router-dom";
import { useState } from "react";
// import Home from "../../pages/Home/Home";

import {NavigationCont, UnorderedList, HomeLinkCont, HomeWrapper, CurrentLocationWrapper, CurrentCountryIcon} from './Navigation.styles'


import SearchInput from "../SearchInput/SearchInput";
import CitiesList from "../CitiesList/CitiesList";


const Navigation = () => {
  const [cities, setCities] = useState([])

  const handleInputSubmision = (city) => {
    if(cities.includes(city)) return
    setCities([...cities, city])
  }


  return (
    <NavigationCont>
      <HomeLinkCont>
        <Link to='/'>
          <HomeWrapper>
            <CurrentCountryIcon></CurrentCountryIcon>
            <CurrentLocationWrapper>
              <h5>Current Location</h5>
              <h5>Home</h5>
            </CurrentLocationWrapper>
          </HomeWrapper>
        </Link>
      </HomeLinkCont>
      <SearchInput handleInputSubmision={handleInputSubmision} />
      <UnorderedList>
        <CitiesList cities={cities} />
      </UnorderedList>
    </NavigationCont>
  )
}

export default Navigation