import React from 'react';
import './ProjectCard.css'; 
import { Link } from 'react-router-dom';

const ProjectCard = ({ color, image, header, tags, description, link }) => {
  return (
    <Link to={link} className="project-card">
      <div className="card" style={{ backgroundColor: color }}>
      <div className="card-image">
        <img src={image} alt={header} />
      </div>
      <div className="card-content">
        <h3 className="card-header">{header}</h3>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag-label">
              {tag}
            </span>
          ))}
        </div>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </Link>
    
  );
};
export default ProjectCard;