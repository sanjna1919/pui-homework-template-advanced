import React from 'react';
import './ProjectPage.css'; 
import Summary from '../../components/Summary.js'; 
import Quote from '../../components/Quote.js'; 
import ProgressBar from '../../components/ProgressBar.js'; 
import Learnings from '../../components/Learnings.js';
import TitleBanner from '../../components/TitleBanner.js';

// upstox cart
const Project1 = () => {
    return (
        <div className="container">
            
            <ProgressBar
            color = "--p1-dark" />

            <TitleBanner 
            logo="images/upstoxtransparent.svg" 
            header = "Reimagining the Indian investor experience with cart for stocks and mutual funds" 
            description = "I introduced e-commerce patterns into fintech by building a cart feature to allow users to seamlessly make multiple financial transactions."
            logoName = "Upstox logo"
            left = "/images/p1-left.svg"
            right = "/images/p1-right.svg"/>
            

            <Summary 
            role = "UX Designer" 
            team = "2 PMs, 1 UI designer, 4 engineers, 1 design manager (mentor)" 
            duration = "4 months" 
            outcome = "Achieved 10% increase in XYZ over 1 month"/>
            
            {/* problem */}
            <div className="content-block">
                <div className = "header3 with-padding">Problem</div>
                <div className="body medium">In the current feature set, users who are interested in acquiring multiple financial assets or products face a cumbersome and time-consuming process. Each purchase requires a separate transaction, leading to multiple payment steps. This not only increases the time and effort required from the user but also adds complexity to the transaction process.</div>
            </div>
            
            
            <Quote 
            content = "How might we allow Upstox users to invest in multiple financial assets in a quick and efficient way?"/>
            
            {/* solution */}
            <div className="content-block">
                <div className = "header3 with-padding">Solution</div>
                <div className="body medium">Introduce an "Add to Cart" functionality within the Upstox app, allowing users to browse and add multiple financial assets or products to a cart, adjust quantities and review the entire cart and make a single payment for the entire cart.</div>
            <div className="body medium">This feature is projected to increase user engagement, attracting new customers to Upstox. Assuming the likelihood of drop off increases with every order placement and a user is looking to invest 3-5 different stocks in a day, cart orders might be give us a lift of 20-30% in conversion and similar impact on AUM.</div>
            </div>

            <div className = "project-image">
                <img src='/images/solution1.svg'></img>
            </div>
            
            
            <Learnings 
            l1header = "User Testing" 
            l1content = "It’s essential to be detail-oriented while testing a prototype. All variable factors need to be controlled for and I learned to draw the user’s attention exactly towards what needs to be tested." 
            l2header = "Tradeoffs" 
            l2content = "Decision paralysis is common when there are many options with minute variations, but it’s best to make the right tradeoff and go with the best option available." 
            l3header = "Thinking Big" 
            l3content = "A design decision always involves other players outside your team and will entail aligning opinions from them and also dealing with possible pushback. Be persuasive and make logical design decisions!"
            color = "--p1-light"/>
        </div>


    );
};


export default Project1;