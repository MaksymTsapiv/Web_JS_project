import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import Email from './Email';

function Footer() {
  return (
    <div className='footer-container'>
      <Email />
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>How it works</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Testimonials</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}} >Careers</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}} >Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Contact</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Support</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Destinations</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Submit Video</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Ambassadors</Link>
            <Link to='/' onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}>Agency</Link>
            <Link to='/' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://twitter.com/BybyomOfficial';}}>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/bybyom.official/';
      }}>Instagram</Link>
            <Link to='/' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.facebook.com/profile.php?id=100082068692714';
      }}>Facebook</Link>
            <Link to='/' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.youtube.com/channel/UCs1j8Sd-aDC4as15Q7ps4cQ/featured';
      }}>Youtube</Link>
            <Link to='https://twitter.com/BybyomOfficial' target='_blank' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://twitter.com/BybyomOfficial';
      }}>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              BYBYOM
              <i className="fa-solid fa-bomb"></i>
            </Link>
          </div>
          <small className='website-rights'>BYBYOM © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.facebook.com/profile.php?id=100082068692714';}}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.instagram.com/bybyom.official/';}}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.youtube.com/channel/UCs1j8Sd-aDC4as15Q7ps4cQ/featured';}}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://twitter.com/BybyomOfficial';}}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.linkedin.com/in/bybyom-bybyom-403bb9240/';}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
