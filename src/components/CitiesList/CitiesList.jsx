import { Link } from "react-router-dom";



const CitiesList = ({cities}) => {
  console.log(cities)
  return (
    <>
    {cities.map(city => (
      <li>
        <Link to={`/city/${city}`}>{city}</Link>
      </li>
     ))}
    </>
  )
}

export default CitiesList