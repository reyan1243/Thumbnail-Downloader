import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import { Footer } from './components/Footer';
import NavBar from './components/NavBar';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import DCMA from './pages/DCMA';
import { Home } from './pages/Home';

function App() {
  const [isScrolled, SetIsScrolled] = useState(false)
  window.onscroll = () => {
    SetIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div> 
      <Router>
      <NavBar isScrolled={isScrolled} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/dcma' element={<DCMA/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
