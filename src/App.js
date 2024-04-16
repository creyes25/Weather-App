import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import City from './pages/City/City';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:cityId' element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
