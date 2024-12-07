import React from 'react';
import './ProjectPage.css'; 
import ProgressBar from '../../components/ProgressBar.js'; 
import Quote from '../../components/Quote.js'; 
import Learnings from '../../components/Learnings.js';
import TitleBanner from '../../components/TitleBanner.js';

// bms
const Project2 = () => {
    return (
        <div className="container">
            <div className="container">

            <ProgressBar
            color = "--p2-dark" />
        
            <TitleBanner 
            logo="images/bmstransparent.svg" 
            header = "Designing an Apple Watch app to enhance and augment the BookMyShow experience" 
            description = "I identified the most critical features of the ticket-booking mobile app BookMyShow with about 70 million users, to design an Apple Watch app experience."
            logoName = "BookMyShow logo"
            left = "/images/p2-left.svg"
            right = "/images/p2-right.svg"/>

        
            {/* problem */}
            <div className="content-block">
                <div className = "header3 with-padding">Problem</div>
                <div className="body">In the current feature set, users who are interested in acquiring multiple financial assets or products face a cumbersome and time-consuming process. Each purchase requires a separate transaction, leading to multiple payment steps. This not only increases the time and effort required from the user but also adds complexity to the transaction process.</div>
            </div>
            
            
            <Quote 
            content = "How might we design the appropriate experience and features for an Apple Watch app for BookMyShow?"/>
            
            {/* solution */}
            <div className="content-block">
                <div className = "header3 with-padding">Solution</div>
                <div className="body">Introduce an "Add to Cart" functionality within the Upstox app, allowing users to browse and add multiple financial assets or products to a cart, adjust quantities and review the entire cart and make a single payment for the entire cart.</div>
            <div className="body">This feature is projected to increase user engagement, attracting new customers to Upstox. Assuming the likelihood of drop off increases with every order placement and a user is looking to invest 3-5 different stocks in a day, cart orders might be give us a lift of 20-30% in conversion and similar impact on AUM.</div>
            </div>
            
            {/* image */}
            <div className = "project-image">
                <img src='/images/solution2.svg'></img>
            </div>


            <Learnings 
            l1header = "A New Paradigm" 
            l1content = "Wearables are booming right now, and we cannot treat it like a website or a mobile device. A whole new paradigm of interaction was opened up to me through this project, and designing for a wearable is much different from designing for any other usual device." 
            l2header = "Getting Carried Away" 
            l2content = "I spent A LOT of time on research. Sometimes it is important to jump into designing, we learn a great deal from iterating too! A good practice is to timebox research rather than get swept away and spend too much time on it."
            color = "--p2-light"
            />
        </div>
        </div>


    );
};


export default Project2;

