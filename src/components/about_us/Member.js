import MemberShortInfo from "./MemberShortInfo";
import '../../styles/about_us_styles/Member.css'
import MemberDetails from "./MemberDetails";
import {useState} from "react";
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'

const Member = (props) => {
    const [state, setState] = useState('short')

    const toggleComponent = () => {
        if (state === 'short') {
            setState('details')
        } else {
            setState('short')
        }
    }

    return <div className='member'>
        {
            state === 'short' && (
                <div className='info-with-button'>
                    <MemberShortInfo img={props.img} name={props.name} />
                    <button className='member-button' onClick={toggleComponent}><BsToggleOff /></button>
                </div>
            )
        }
        {
            state === 'details' && (
                <div className='info-with-button'>
                    <MemberDetails {...props}/>
                    <butto className='member-button' onClick={toggleComponent}><BsToggleOn /></butto>
                </div>
            )
        }
    </div>
}

export default Member;