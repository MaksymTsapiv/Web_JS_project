import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Glory to Ukraine!</h1>
      <p>Glory to the heroes!</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://u24.gov.ua/';
            }}
        >
          HELP UKRAINE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {e.preventDefault(); window.location.href='https://www.youtube.com/';}}
        >
          WATCH VIDOE <i className='far play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
