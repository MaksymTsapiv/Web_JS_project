import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const navigate = useNavigate();
  const toAbout = () => navigate('/about');

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BYBYOM
            <i class="fa-solid fa-bomb"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={() => toAbout()}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/map'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Map
              </Link>
            </li>

            <li>
              <Link
                to='/donate'
                className='nav-links-mobile'
                onClick = {closeMobileMenu}
              >
                DONATE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://u24.gov.ua/';
      }}>DONATE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
