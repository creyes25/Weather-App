import { Link } from "react-router-dom";

const cities = ['london', 'paris']

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        {cities.map(city => (
          <li>{city}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation