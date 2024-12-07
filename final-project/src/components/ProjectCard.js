import React from 'react';
import './ProjectCard.css'; 
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ color, image, header, tags, description, link, textcolor, alt }) => {
  

  return (
    <Link to={link} className="project-card">
      <motion.div className="card" style={{ backgroundColor: color}} whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.01)", 
        transition: { duration: 0.3, ease: "easeInOut" }
      }}>
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="card-content">
        <h3 className="header3" style={{ color: textcolor}}>{header}</h3>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag-label body-caps">
              {tag}
            </span>
          ))}
        </div>
        <p className="body">{description}</p>
      </div>
    </motion.div>
    </Link>
    
  );
};
export default ProjectCard;


