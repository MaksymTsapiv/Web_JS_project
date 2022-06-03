import { useState } from 'react';
import "../styles/Contacts.css"

const Contact = ({value, IconIn, IconOut, click}) => {
    const [icon, setIcon] = useState(false);

    if (icon) {
        return <span className='contact-span' onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)} onClick={() => click(value)}><IconIn className="icon"/> {value}</span>
    }
    else {
        return <span className='contact-span' onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)} onClick={() => click(value)}><IconOut className="icon"/> {value}</span>
    }
}


export default Contact;