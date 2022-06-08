import React from 'react'
import '../styles/Poster.css'
import zelenskyy from '../images/zelenskyy.jpg'
const Poster = () => {
  return (
    <div className="poster">
        <div className="poster-image">
            <div className="poster-image-wrapper">
              <img className='poster-main-img' src={zelenskyy} />
            </div>
            <div className="quote">
              <p>"I need ammunition, not a ride"</p>
            </div>
        </div>
        <div className="poster-text">
            <div className='poster-red'>
                <p>Our President</p>
                <div className='red-line'>

                </div>
            </div>
            <div className="poster-content">
                <h2>I am not a politician. I am just a simple person who has come to break down this system.</h2>
                <p>Volodymyr Oleksandrovych Zelenskyy, also transliterated as Zelensky or Zelenskiy, is a Ukrainian politician, former comedian, and actor who has served as the 6th and current president of Ukraine since 2019.</p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Volodymyr_Zelenskyy" class="poster-text-button">Read More</a>
        </div>
    </div>
  )
}

export default Poster