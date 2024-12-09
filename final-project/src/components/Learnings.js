import React from 'react';
import './Learnings.css'; 

const Learnings = ({ l1header, l1content, l2header, l2content, l3header, l3content, color}) => {
  return (
    
    <div className="learning">
      <div className="header3 with-padding">Learnings</div>
      <div className="learning-content">
        <div className="learning-card" style={{ backgroundColor: `var(${color})` }}>
          <div className="header4">{l1header}</div>
          <div className="body grey">{l1content}</div>
        </div>
        <div className="learning-card" style={{ backgroundColor: `var(${color})` }}>
          <div className="header4">{l2header}</div>
          <div className="body grey">{l2content}</div>
        </div>
        {/* Conditionally render the last card */}
        {l3header && l3content && (
          <div className="learning-card" style={{ backgroundColor: `var(${color})` }}>
            <div className="header4">{l3header}</div>
            <div className="body grey">{l3content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learnings;