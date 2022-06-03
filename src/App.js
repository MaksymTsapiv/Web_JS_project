import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Gallery';
import Donate from './components/pages/Donate';
import About from './components/pages/About';
import MainSection from './components/MainSection';
import Map from './components/Map';
import Contacts from './components/Contacts';
import "./styles/MapAndContacts.css"
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={Products} />
          <Route path='/donate' component={Donate} />
        </Routes>
        <MainSection />
        <div className='MapAndContacts'>
                <Contacts />
                <Map />
            </div>
        <Footer />
      </Router>

    </>

  );
}

export default App;
