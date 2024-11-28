import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="home-link">
          <img src="images/flower.svg" alt="Home" className="home-icon"/>
        </Link>
      </div>
      
      <div className="navbar-center">
        <Link to="/" className="nav-link">work</Link>
        <Link to="/about" className="nav-link">about</Link>
      </div>
      
      <div className="navbar-right">
        <Link to="https://drive.google.com/file/d/14DnlRmR77oqJtQPFWlfyPutwAUznscY1/view?usp=sharing" className="resume-btn">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
