import React from 'react';
import './TitleBanner.css';

const TitleBanner = ({logo, header, description}) => {
  return (
    <div className="title-banner">
      {/* Left Side Placeholder Image */}
      <img
        src="/images/placeholder-left.svg"
        alt="Placeholder Left"
        className="title-image title-image-left"
      />

      {/* Main Content */}
      <div className="title-content">
        <img
          src={logo}
          alt="Client Logo"
          className="client-logo"
        />
        <h1 className="header0">{header}</h1>
        <p className="body-big">{description}</p>
      </div>

      {/* Right Side Placeholder Image */}
      <img
        src="/images/placeholder-right.svg"
        alt="Placeholder Right"
        className="title-image title-image-right"
      />
    </div>
  );
};

export default TitleBanner;
