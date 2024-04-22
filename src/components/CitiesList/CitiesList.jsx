import { Link } from "react-router-dom";



const CitiesList = ({cities}) => {
  return (
    <>
    {cities.map(city => (
      <li key={city}>
        <Link key={city} to={`/city/${city}`}>{city}</Link>
      </li>
    ))}
    </>
  )
}

export default CitiesList