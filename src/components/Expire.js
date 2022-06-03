// Took this code from 
// https://stackoverflow.com/questions/61447326/make-a-alert-message-disappear-after-x-time-in-react-functional-component discussion
// and made small change (if (props.num === 0))


import React, { useEffect, useState } from 'react';

function Expire(props)
{

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() =>
    {
        setTimer(props.delay);
    }, []);


    const setTimer = (delay) =>
    {
        setTimeout(() => setIsVisible(false), delay);
    };

    if (props.num === 0) {
        return <span>{'Click to copy to clipboard!'}</span>;
    }

    return (
        isVisible
            ? <div>{props.children}</div>
            : <span>{'Click to copy to clipboard!'}</span>
    );
}

export default Expire;
