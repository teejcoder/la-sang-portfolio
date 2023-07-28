import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import Home from './pages/Home';
import Hallie from './pages/Hallie'
import ShagRock from './pages/ShagRock';
import LimeCordial from './pages/LimeCordial';
import ConfidenceMan from './pages/ConfidenceMan';


library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/hallie" element={<Hallie/>}/>
        <Route path="/shag-rock" element={<ShagRock/>}/>
        <Route path="/lime-cordial" element={<LimeCordial/>}/>
        <Route path="/confidence-man" element={<ConfidenceMan/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
