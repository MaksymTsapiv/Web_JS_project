import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/AboutUs';
import Footer from './components/Footer';
import MapPage from "./components/pages/MapPage";
import ServiceItemList from "./components/service/ServiceItemList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<ServiceItemList />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
