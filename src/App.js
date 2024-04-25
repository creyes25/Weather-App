import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import City from './pages/City/City';

import { AppDiv } from './App.styles';

function App() {
  return (
    <AppDiv>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:cityId' element={<City />} />
      </Routes>
    </AppDiv>
  );
}

export default App;
