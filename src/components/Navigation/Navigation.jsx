import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import getWeather from "../../utils/getWeather";

import {
  BurgerIcon,
  NavigationCont,
  UnorderedList,
  HomeLinkCont,
  HomeWrapper,
  CurrentLocationWrapper,
  CurrentCountryIcon
} from "./Navigation.styles";

import SearchInput from "../SearchInput/SearchInput";
import CitiesList from "../CitiesList/CitiesList";

const Navigation = ({ homeWeather }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [citiesList, setCitiesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityInfo, setCityInfo] = useState(null);
  const { sys, name } = homeWeather || {};

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCityInfo = (city) => {
    getWeather(city, setIsLoading, setError, setCityInfo);
  };

  const handleInputSubmision = (city) => {
    const cityExists = citiesList.some((cityItem) => cityItem.name === city);
    if (!cityExists) handleCityInfo(city);
  };

  const addCityToList = () => {
    // checks if there was no error in api call and if city info is not undefined
    if (cityInfo && !error) {
      setCitiesList((prevCityList) => {
        const cityExists = prevCityList.some(
          (cityItem) => cityItem.name === cityInfo.name
        );
        if (!cityExists)
          return [
            ...prevCityList,
            { name: cityInfo.name, country: cityInfo.sys.country }
          ];
        return prevCityList;
      });
    }
  };

  useEffect(() => {
    addCityToList();
  }, [cityInfo, error]);

  const handleRemoveCity = (cityName) => {
    setCitiesList((prevCityList) =>
      prevCityList.filter((city) => city.name !== cityName)
    );
  };

  return (
    <>
      <NavigationCont isOpen={menuOpen}>
        <HomeLinkCont>
          <Link to="/">
            <HomeWrapper>
              <CurrentCountryIcon>
                <img
                  alt={sys ? sys.country : ""}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${
                    sys ? sys.country : ""
                  }.svg`}
                />
              </CurrentCountryIcon>
              <CurrentLocationWrapper>
                <h4>Current Location:</h4>
                <h5>
                  <span>{sys ? `${sys.country} - ` : "Home"}</span>
                  <span>{name ? name : ""}</span>
                </h5>
              </CurrentLocationWrapper>
            </HomeWrapper>
          </Link>
        </HomeLinkCont>
        <SearchInput handleInputSubmision={handleInputSubmision} />
        <UnorderedList>
          <CitiesList
            cities={citiesList}
            handleRemoveCity={handleRemoveCity}
            handleBurgerClick={handleBurgerClick}
          />
        </UnorderedList>
      </NavigationCont>
      <BurgerIcon onClick={handleBurgerClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
          alt=""
        />
      </BurgerIcon>
    </>
  );
};

export default Navigation;
