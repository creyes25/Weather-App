import { Link } from "react-router-dom";
import { useState } from "react";
// import Home from "../../pages/Home/Home";

import SearchInput from "../SearchInput/SearchInput";
import CitiesList from "../CitiesList/CitiesList";


const Navigation = () => {
  const [cities, setCities] = useState([])

  const handleInputSubmision = (value) => {
    if(cities.includes(value)) return
    setCities([...cities, value])
  }
  return (
    <nav>
      <SearchInput handleInputSubmision={handleInputSubmision} />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <CitiesList cities={cities} />
      </ul>
    </nav>
  )
}

export default Navigation