import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
  <footer class="footer">
    <div class="footer-top">
      <p class="footer-text1">I strive to be the person people want to work with.</p>
      <div className='footer-line2'>
        <p class="footer-text2">Let's work together.</p>
        <img className="footer-icon" src="/images/whiteflower.svg"></img>
      </div>
      
      
    </div>

    <div class="footer-bottom">
      <hr class="footer-line" />
      <div class="left-links">
        <a href="#" class="footer-link">Email</a>
        <a href="#" class="footer-link">LinkedIn</a>
        <a href="#" class="footer-link">Medium</a>
      </div>
      <div class="right-link">
        <Link to="/resume" className="resume-btn">Resume</Link>
      </div>
     
    </div>
  </footer>


  );
};

export default Footer;
