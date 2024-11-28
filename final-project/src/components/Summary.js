import React from 'react';
import './Summary.css'; 


const Summary = ({ role, team, duration, outcome }) => {
  return (
    <div className="summary">
        <div className="element">
            <div className="header2">Role</div>
            <div className="body">{role}</div>
        </div>
        <div className="element">
            <div className="header2">Team</div>
            <div className="body">{team}</div>
        </div>
        <div className="element">
            <div className="header2">Duration</div>
            <div className="body">{duration}</div>
        </div>
        <div className="element">
            <div className="header2">Outcome</div>
            <div className="body">{outcome}</div>
        </div>
    </div>
  );
};
export default Summary;