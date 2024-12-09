import React from 'react';
import './ProjectPage.css'; 
import Summary from '../../components/Summary.js'; 
import Quote from '../../components/Quote.js';
import ProgressBar from '../../components/ProgressBar.js';  
import Learnings from '../../components/Learnings.js';
import TitleBanner from '../../components/TitleBanner.js';

import p3left from '../../images/p3-left.svg';
import p3right from '../../images/p3-right.svg';
import s3 from '../../images/solution3.svg';

// flev
const Project3 = () => {
    return (
        <div className="container">
            <noscript>
                <div className="noscript-message">
                    JavaScript is required to view this page properly. Please enable JavaScript in your browser settings or use a compatible browser.
                </div>
            </noscript>
            
            <ProgressBar
            color = "--p3-dark" />

            <TitleBanner 
            logo="images/flevtransparent.svg" 
            header = "Designing a filmmakers’ gig-hunting space as the MVP for a startup" 
            description = "FLeverage is an online community for filmmaking enthusiasts who are just starting out, to find gigs, connect, network, and engage in healthy competition to hone their skills."
            logoName = "Fleverage logo"
            left = {p3left}
            right = {p3right}/>
            
            <Summary 
            role = "UX Designer" 
            team = "Myself and 1 engineer/founder" 
            duration = "4 months" 
            outcome = "Completed the design of MVP and handed off to engineering"/>
            
            {/* problem */}
            <div className="content-block">
                <div className = "header3 with-padding">Problem</div>
                <div className="body grey">Filmmakers often get work through informal ways, making it hard to break into the industry and get a constant stream of gigs. Budding filmmakers find it hard to get their big break for other reasons like nepotism in the industry, or the lack of an accessible network.</div>
            </div>
            
            
            <Quote 
            content = "How might we enable filmmakers standardize the process of finding gigs and help them break into the industry more easily?"/>
            
            {/* solution */}
            <div className="content-block">
                <div className = "header3 with-padding">Solution</div>
                <div className="body grey">FLeverage is an online community for filmmaking enthusiasts to find gigs, connect, network, and engage in healthy competition to hone their skills.</div>
            </div>

            <div className = "project-image">
                <img src={s3}></img>
            </div>
            
            <Learnings 
            l1header = "Design for Handoff" 
            l1content = "Designers are usually designing for others - we should be meticulous while making design systems for a product, even for a small-scale MVP. This greatly expedites the handoff process to a developer." 
            l2header = "You can't have it all" 
            l2content = "While designing purely for ourselves, we can get caught up and make fancy, feature-rich designs that are difficult to develop. Designing with constraints and resources in mind is important. For example, I wanted to implement a complex filter system for the home page, but the developer rightly said it was out of scope and would be implemented later. " 
            color = "--p3-light"/>
        </div>
    );
};


export default Project3;


