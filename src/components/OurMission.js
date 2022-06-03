import React from 'react'
import './OurMission.css'
import start_line from '../assets/start_line.png'

const OurMission = () => {
  return (
    <div className='our-mission-section'>
        <div className='our-mission-title'>
            <h2>Our Mission</h2>
            <div className='two-borders'></div>
            <img src="https://html.dreamitsolution.net/leadership/assets/images/icon.png"/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
        </div>
        <div className='our-mission-cards'>

            <div className='our-mission-item'>
                <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2099&q=80"/>
                <h3 className="card-title">Our Campaign</h3> 
                <p>Lorem ipsum dolor sit amet, cata adipisicing morem ipsum dolor sit amet</p>
            </div>
            <div className='our-mission-item'>
                <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2099&q=80"/>
                <h3 className="card-title">Our Campaign</h3> 
                <p>Lorem ipsum dolor sit amet, cata adipisicing morem ipsum dolor sit amet</p>
            </div>
            <div className='our-mission-item'>
                <img src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2099&q=80"/>
                <h3 className="card-title">Our Campaign</h3> 
                <p>Lorem ipsum dolor sit amet, cata adipisicing morem ipsum dolor sit amet</p>
            </div>

        </div>
        
    </div>
  )
}

export default OurMission