import {useEffect, useState} from "react";
import Contact from "./Contact";
import Expire from "./Expire";
import {AiOutlinePhone} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import "../styles/Contacts.css";

const Contacts = () => {
    const [pair, setPair] = useState({counter: "", keyExpire: ""});

    useEffect(() => {
        fetch("NumberOfClicks").then(response => response.json()).then(number => {
            setPair({counter: number.clicks, keyExpire: pair.keyExpire});
        })
    }, [])

    const contacts = [{value: '+380000000000', id: 1, iconIn: AiFillPhone, iconOut: AiOutlinePhone},
                      {value: 'bybyom.official@gmail.com', id: 2, iconIn: AiFillMail, iconOut: AiOutlineMail}]

    const onContactClick = (text) => {
        navigator.clipboard.writeText(text);
        fetch("NumberOfClicks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({clicks: pair.counter+1}),
        })
        setPair({counter: pair.counter + 1, keyExpire: pair.keyExpire + 1});
    }

    return <div className="Contacts">
        <Expire key={pair.keyExpire} delay="700" num={pair.keyExpire}>
            <span>{'Copied to clipboard!'}</span>
        </Expire>
        {contacts.map((contact) => (
            <Contact key={contact.id} value={contact.value} IconIn={contact.iconIn} IconOut={contact.iconOut}
                     click={()=>onContactClick(contact.value)}/>
        ))
        }
        <span>{`Number of copies: ${pair.counter}`}</span>
    </div>
}


export default Contacts;