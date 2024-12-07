import React from 'react';
import './Quote.css'; 

const Quote = ({ content }) => {
  return (
    <div className="quote">
        <div className="handwriting white">"{content}"</div>
    </div>
  );
};

export default Quote;