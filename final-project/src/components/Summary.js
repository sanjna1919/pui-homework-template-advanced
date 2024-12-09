import React from 'react';
import './Summary.css'; 


const Summary = ({ role, team, duration, outcome }) => {
  return (
    <div className="summary-box">
        <div className="summary">
            <div className="element">
                <div className="header4">Role</div>
                <div className="body medium">{role}</div>
            </div>
            <div className="element">
                <div className="header4">Team</div>
                <div className="body medium">{team}</div>
            </div>
            <div className="element">
                <div className="header4">Duration</div>
                <div className="body medium">{duration}</div>
            </div>
            <div className="element">
                <div className="header4">Outcome</div>
                <div className="body medium">{outcome}</div>
            </div>
        </div>
        
    </div>
  );
};
export default Summary;