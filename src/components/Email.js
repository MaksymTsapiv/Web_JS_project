import { useState } from "react"; 
import { Button } from "./Button";

const Email = () => {
    const [valid, setValid] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const checkValid = (val) => {
        setInputValue(val);
        if (val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setValid(true);
        } else if (valid) {
            setValid(false);
        }
        console.log(valid);
        console.log(val);
    }

    const onJoin = () => {
        console.log(valid);
        setValid(false);
        setInputValue('');
    }

    return <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
      Join the community of Ukraine supporters right now!
    </p>
    <p className='footer-subscription-text'>
      We will make sure not to spam You with letters.
    </p>
    <div className='input-areas'>
      <form>
        <input
          className='footer-input'
          name='email'
          type='email'
          value={inputValue}
          placeholder={valid ? 'Your Email' : 'Invalid Email'}
          style={{ borderColor: valid ? '#fff' : '#ff0000' }}
          onChange={(e) => checkValid(e.target.value)}
        />
        <Button buttonStyle='btn--outline' onClick={onJoin} disable={!valid}>Join</Button>
      </form>
    </div>
  </section>
}

export default Email;