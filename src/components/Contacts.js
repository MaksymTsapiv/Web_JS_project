import { useState } from "react";
import Contact from "./Contact";
import Expire from "./Expire";
import {AiOutlinePhone} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import "../styles/Contacts.css";

const Contacts = () => {
    const [pair, setPair] = useState({counter: 0, keyExpire: 0});

    const contacts = [{value: '+380000000000', id: 1, iconIn: AiFillPhone, iconOut: AiOutlinePhone},
                      {value: 'bybyom.official@gmail.com', id: 2, iconIn: AiFillMail, iconOut: AiOutlineMail}]

    const onContactClick = (text) => {
        navigator.clipboard.writeText(text);
        setPair({counter: pair.counter + 1, keyExpire: pair.keyExpire + 1});
        // setCounter((existingCounter) => existingCounter + 1);
    }

    return <div className="Contacts">
        <Expire key={pair.keyExpire} delay="700" num={pair.keyExpire}>
            <span>{'Copied to clipboard!'}</span>
        </Expire>
        {contacts.map((contact) => (
            <Contact key={contact.id} value={contact.value} IconIn={contact.iconIn} IconOut={contact.iconOut} click={()=>onContactClick(contact.value)}/>
        ))
        }
        <span>{`Number of clicks: ${pair.counter}`}</span>
    </div>
}


export default Contacts;