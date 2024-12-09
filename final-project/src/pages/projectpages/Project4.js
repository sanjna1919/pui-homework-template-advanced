import React from 'react';
import './ProjectPage.css'; 
import Summary from '../../components/Summary.js'; 
import Quote from '../../components/Quote.js'; 
import Learnings from '../../components/Learnings.js';
import ProgressBar from '../../components/ProgressBar.js'; 
import TitleBanner from '../../components/TitleBanner.js';

import p4left from '../../images/p4-left.svg';
import p4right from '../../images/p4-right.svg';
import s4 from '../../images/solution4.svg';

// tax
const Project4 = () => {
    return (
        <div className="container">
            <noscript>
                <div className="noscript-message">
                    JavaScript is required to view this page properly. Please enable JavaScript in your browser settings or use a compatible browser.
                </div>
            </noscript>
            
            <ProgressBar
            color = "--p4-dark" />

            <TitleBanner 
            logo="images/upstoxtransparent.svg" 
            header = "Teaching Indian investors about tax by designing a tax-savings investments tracker" 
            description = "Increasing awareness and making taxes less intimidating with a tax-saving investments tracker"
            logoName = "Upstox logo"
            left = {p4left}
            right = {p4right}/>
            
            <Summary 
            role = "UX Designer" 
            team = "2 PMs, 1 UI designer, 4 engineers, 1 design manager (mentor)" 
            duration = "4 months" 
            outcome = "Achieved 10% increase in XYZ over 1 month"/>
            
            {/* problem */}
            <div className="content-block">
                <div className = "header3 with-padding">Problem</div>
                <div className="body grey">Tax is an intimidating topic! A large majority of users of Upstox are unaware of different completely legal ways of saving taxes by investing smartly by using allowances like Section 80C, 80D and methods like tax loss harvesting.</div>
            </div>
            
            
            <Quote 
            content = "How might we give Upstox users a way to save on taxes by investing smartly and be informed about different tax saving schemes?"/>
            
            {/* solution */}
            <div className="content-block">
                <div className = "header3 with-padding">Solution</div>
                <div className="body grey">Introduce an "Add to Cart" functionality within the Upstox app, allowing users to browse and add multiple financial assets or products to a cart, adjust quantities and review the entire cart and make a single payment for the entire cart.</div>
            <div className="body grey">This feature is projected to increase user engagement, attracting new customers to Upstox. Assuming the likelihood of drop off increases with every order placement and a user is looking to invest 3-5 different stocks in a day, cart orders might be give us a lift of 20-30% in conversion and similar impact on AUM.</div>
            </div>

            <div className = "project-image">
                <img src={s4}></img>
            </div>
            
            <Learnings 
            l1header = "Fintech is Complex" 
            l1content = "In fintech products, it's essential that the domain complexity is never offloaded on the user. It's important to design for the target audience and explain the details of complicated finance concepts accordingly." 
            l2header = "Deprioritization" 
            l2content = "I unfortunately had my project deprioritized and shelved for a long time, then scaled down much later before being picked up by engineering. I learned that this is common in the industry as experimentation/iteration happens in design and developers have limited time." 
            color = "--p4-light"/>
        </div>
    );
};


export default Project4;