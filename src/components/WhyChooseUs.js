import React from 'react'
import './WhyChooseUs.css'
import obama from '../assets/obama.jpeg'
const whyChooseUs = () => {
  return (
    <div className="why-choose-us">
        <div className="why-choose-us-image">
            <img className='why-choose-us-main-img' src={obama} />
        </div>
        <div className="why-choose-us-text">
            <div className='why-choose-us-red'>
                <p>Why choose us</p>
                <div className='red-line'>

                </div>
            </div>
            <div className="why-choose-us-content">
                <h2>Leadership is the trusted <br/>& powerful political team.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiushhgmose tempor incididun ut labore eth dolore magna aliqua. Ut enim ad mini ass veniam, arquis nostrud exercitation uj laboris nisi ut aliquip commodose consequat. Duis aute irure dolor in reprehenderit in volupj velit esse cillu dolore eu fugiat nulla pariatur. Excepteur</p>
                <p>Voluptatem ac doloremque laudantium, totam rem aperiam, eaque ipsae quae ab illo inventore veritatis et qu architector beatae vitae dicta suntes explicabo. Nemo enim ipsam voluptatem</p>
            </div>
            <button>Read More</button>
            </div>
    </div>
  )
}

export default whyChooseUs