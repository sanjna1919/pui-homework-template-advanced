import React from 'react';
import './Quote.css'; 

const Quote = ({ content }) => {
  return (
    <div className="quote">
        <div className="quote-body">{content}</div>
    </div>
  );
};

export default Quote;
