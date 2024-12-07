import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
  <footer class="footer">
    <div class="footer-top">
      <div class="header2 white lowopacity left">I strive to be the person people want to work with.</div>
      
      <span className='footer-line2'>
        <span class="header2 white left">Let's work together.</span>
        <img className="footer-icon" src="/images/whiteflower.svg"></img>
      </span>
    </div>

    <div class="footer-bottom">
      <hr class="footer-line" />
      <div class="left-links">
        <a href="mailto:sanjnasubramanian@gmail.com" class="footer-link">Email</a>
        <a href="https://www.linkedin.com/in/sanjnasubramanian/" class="footer-link">LinkedIn</a>
        <a href="https://medium.com/@sanjna.sub9" class="footer-link">Medium</a>
      </div>
      <div class="right-link">
        <Link to="https://drive.google.com/file/d/14DnlRmR77oqJtQPFWlfyPutwAUznscY1/view?usp=sharing" className="resume-btn">Resume</Link>
      </div>
     
    </div>
  </footer>


  );
};

export default Footer;