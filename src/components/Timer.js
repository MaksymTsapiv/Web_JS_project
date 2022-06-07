import React, {useEffect, useState} from "react";
import TimerComponent from "./TimerComponent";
import '../styles/Timer.css'

const Timer = () => {
    const calculatetimePassed = () => {
        const difference = +new Date() - Date.parse("Feb 24 2022 GMT-0200");
        let timePassed = {};

        if (difference > 0) {
            timePassed = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                sec: Math.floor((difference / 1000) % 60),
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

        timerComponents.push([timePassed[interval], interval]);
    });

    return (
        <div className="back-container">
            <h1>Russian - Ukrainian war time</h1>
            <div className="align-divs">
                {timerComponents.map((component, idx) => (
                    <TimerComponent key={idx} timePassed={component[0]} dateType={component[1]}/>))}
            </div>
            <p>Passed since civilians and kids are being killed</p>
        </div>
    );

}

export default Timer;