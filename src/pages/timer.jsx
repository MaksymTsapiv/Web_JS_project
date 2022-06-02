import React, { useEffect, useState } from "react";
import './timerComponent'
import TimerComponent from "./timerComponent";
import '../styles/Timer.css'

const Timer = () => {
    const calculatetimePassed = () => {
        const difference = +new Date() - Date.parse("Feb 24 2022 GMT-0200");
        let timePassed = {};
    
        if (difference > 0) {
          timePassed = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timePassed;
      };

    const [timePassed, settimePassed] = useState(calculatetimePassed());


    useEffect(() => {
        setTimeout(() => {
          settimePassed(calculatetimePassed());
        }, 1000);
    });
    
    const timerComponents = [];
    
    Object.keys(timePassed).forEach((interval) => {
    
        timerComponents.push([timePassed[interval], interval, new Date().getTime() + Math.random() -  Math.random()]);
        console.log(...timerComponents);
    });

    return (
        <div>
            <div>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>

        </div>
        <div className="img-css">
          <h1 className="war-text">Russian - Ukrainian war time</h1>
          <div className="align-divs">
            {timerComponents.map((component, idx) => (<TimerComponent key={component[2]} timePassed={component[0]} dateType={component[1]} />)  ) }
          </div>
          <h1 className="war-text">Passed since civilians and kids are being killed and raped</h1>
        </div>
        <div>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>

        </div>
        </div>
    

      );

}

export default Timer;