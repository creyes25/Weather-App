import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";

const cities = ['london', 'paris']

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {cities.map(city => (
          <li>
            <Link to={`/city/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation