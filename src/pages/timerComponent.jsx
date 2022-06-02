import '../styles/TimerComponent.css'


const TimerComponent = (props) => {
    const timePassed = props.timePassed;
    const dateType = props.dateType;

    return (
    // ( 
    // <div className='resultContainer'>
    //     <div className='wrapper'>
    //         <span className='text_timer'>
    //             <span >{timePassed}</span>
    //             <p >{dateType}</p>
    //         </span>
    //     </div>
    // </div>)

    // (
    <div className="wrapper">
        <div className="text">
            <p>{timePassed} {dateType}</p>
        </div>
    </div>
    )
}

export default TimerComponent;