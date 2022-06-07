import '../styles/TimerComponent.css'


const TimerComponent = (props) => {
    const timePassed = props.timePassed;
    const dateType = props.dateType;

    return (
    <div className="circle">{timePassed} {dateType}</div>
    )
}

export default TimerComponent;