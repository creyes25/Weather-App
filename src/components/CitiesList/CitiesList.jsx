import { Link } from "react-router-dom";

// styles
import {
  CityLi,
  CityLiCont,
  CountryIconCont,
} from "./CitiesList.styles";

const CitiesList = ({ cities, handleRemoveCity, handleBurgerClick }) => {
  const handleClickRemove = (cityName) => {
    handleRemoveCity(cityName);
  };

  return (
    <>
      {cities.map((city) => (
        <CityLi key={city.name}>
          <Link
            to={`/city/${city.name}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CityLiCont onClick={handleBurgerClick}>
                <CountryIconCont>
                  <img
                    alt={city.country}
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${city.country}.svg`}
                  />
                </CountryIconCont>
              {city.name}
            </CityLiCont>
            <div className="btn-cont">
              <button
                className="remove-btn"
                onClick={() => handleClickRemove(city.name)}
              >
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
  );
};

export default CitiesList;
