import React from 'react';
import './TitleBanner.css';
import {motion } from 'framer-motion';

const TitleBanner = ({logo, header, description, logoName, left, right}) => {
  return (
    <div className="title-banner">
      {/* Left Side Image */}
      <motion.img
        src={left}
        alt="Project images"
        className="title-image title-image-left"
        initial={{ x:-200, opacity: 0 }}
        animate={{ x:0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 0.8 }}
      />

      {/* Main Content */}
      <div className="title-content">
        <motion.img
          src={logo}
          alt={logoName}
          className="client-logo"
          initial={{ y:20, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 2 }}
        />
        <motion.h1 className="header1 centered" 
          initial={{ y:20, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 2 }}>{header}
        </motion.h1>
        <motion.div className="body medium centered grey" 
          initial={{ y:20, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 2, delay:1}}>{description}</motion.div>
      </div>

      {/* Right Side Image */}
      <motion.img
        src={right}
        alt="Project images"
        className="title-image title-image-right"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 0.8 }}
      />
    </div>
  );
};

export default TitleBanner;