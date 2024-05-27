import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import City from './pages/City/City';

import { AppDiv } from './App.styles';

function App() {
  const [homeWeather, setHomeWeather] = useState(null)
  const [cityWeather, setCityWeather] = useState(null)

  const handleCurrentWeather = (current) => {
    setHomeWeather(current)
  }

  const handleCitytWeather = (current) => {
    setCityWeather(current)
  }

  return (
    <AppDiv>
      <Navigation homeWeather={homeWeather} cityWeather={cityWeather} />
      <Routes>
        <Route path='/' element={<Home handleCurrentWeather={handleCurrentWeather} />} />
        <Route path='/city/:cityId' element={<City handleCitytWeather={handleCitytWeather}/>}  />
      </Routes>
    </AppDiv>
  );
}

export default App;
