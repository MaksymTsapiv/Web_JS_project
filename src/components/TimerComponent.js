import '../styles/TimerComponent.css'


const TimerComponent = (props) => {
    const timePassed = props.timePassed;
    const dateType = props.dateType;

    return (
    <div className="wrapper">
        <div className="text">
            <p>{timePassed} {dateType}</p>
        </div>
    </div>
    )
}

export default TimerComponent;