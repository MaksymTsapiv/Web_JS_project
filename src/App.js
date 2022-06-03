import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={Gallery} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
