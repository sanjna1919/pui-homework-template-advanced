import React from 'react';
import '../../pages/mainpages/Work.css';
import Quote from '../../components/Quote.js'; 
import ProjectCard from '../../components/ProjectCard.js'; 
import projectData from '../../data/projectData.json';

const Work = () => {
    return (
        // HERO BANNER
        <div className="hero-banner">
        {/* hero 1 - main message */}
        <div className="hero-banner1">
          {/* Line 1 */}
          <div className="intro-line">
            {/* Flex items inside each line */}
            <span className="intro-text">I'm Sanjna</span>
            <span className="icon-container"><img src="/images/flower.svg" alt="Flower Icon" className="icon" /></span>
            <span className="intro-text">a product designer</span>
            <span className="icon-container"><img src="/images/scribble.svg" alt="Scribble Icon" className="icon" /></span>
          </div>

          {/* line 2 */}
          <div className="intro-line">
            {/* Flex items inside each line */}
            <span className="intro-text">with experience in</span>
            <span className="icon-container"><img src="/images/star.svg" alt="Flower Icon" className="icon" /></span>
            <span className="intro-text">consumer FinTech</span>
          </div>

          {/* Line 3 */}
          <div className="intro-line">
            {/* Flex items inside each line */}
            <span className="intro-text">and a</span>
            <span className="icon-container"><img src="/images/arrow.svg" alt="Flower Icon" className="icon" /></span>
            <span className="intro-text">strategic mindset</span>
          </div>


          {/* hero banner 2 - currently and previously */}
          <div className="hero-banner2">
            {/* cmu */}
            <div className="experience">
                <div className="left">
                    <img src="/images/cmu.svg" alt="CMU logo"/>
                </div>
                <div className="right">
                    <div className="body">currently</div>
                    <div className="header2">MHCI @ Carnegie Mellon</div>
                </div>
            </div>
            {/* upstox */}
            
            <div className="experience">
                <div className="left">
                    <img src="/images/upstox.svg" alt="Upstox logo"/>
                </div>
                <div className="right">
                    <div className="body">previously</div>
                    <div className="header2">UX Design @ Upstox India</div>
                </div>
            </div>
          </div>
        </div>

        
        <Quote
        content = "I take a methodical approach to creativity and train it like a muscle every day."
        />

        
        <div className="project-section">
        <div className="header0">Selected Projects</div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            color={project.color}
            image={project.image}
            header={project.header}
            tags={project.tags}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>


    );
};


export default Work;