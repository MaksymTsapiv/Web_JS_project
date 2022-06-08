import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Timer from '../Timer';
import Poster from '../Poster'

function Home() {
  return (
    <>
      <MainSection />
      <Poster />
      <Timer />
    </>
  );
}

export default Home;
