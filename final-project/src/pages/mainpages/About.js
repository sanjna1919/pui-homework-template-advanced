import React from 'react';
import '../../pages/mainpages/About.css';

const About = () => {
    return (
      <div className="content">

        <div className="hero">
          <div className='about-description'>
            <div className='about-header1'>Call me sun-juh-nah</div>
            <div className='about-text'>
              I was born and raised in India, with exposure to a variety of cultures and problems to solve at scale.
            </div>
            <div className='about-text'>
              During my undergrad in Computer Science, I discovered a love for UX and led Interaction Design Association, VIT, a local chapter of IxDA, and became the go-to UXer among my engineer classmates.
            </div>
            <div className='about-text'>
              My tech background enables me to think about complex problems in an expansive, intricate, and logical way. I take a methodical approach to creativity and train it like a muscle every day!
            </div>
          </div>
          <div className='about-image'>
              <img src='/images/sanjna.svg' alt="Sanjna Illustration"></img>
          </div>
        </div>
      
        {/* hobbies */}
        <div className='hobbies'>
          <div className='hobbies-text'>
            <div className='about-header2'>Why love one thing when you can love the entire world?</div>
            <div className='about-text'>
              I was born and raised in India, with exposure to a variety of cultures and problems to solve at scale.
            </div>
          </div>
          <div className='hobbies-carousel'>
          <div className="image-carousel">
            <img src="/images/image 1.svg" alt="Image 1" />
            <img src="/images/image 2.svg" alt="Image 2" />
            <img src="/images/image 3.svg" alt="Image 3" />
            <img src="/images/image 4.svg" alt="Image 4" />
            <img src="/images/image 5.svg" alt="Image 5" />
            <img src="/images/image 6.svg" alt="Image 6" />
            <img src="/images/image 7.svg" alt="Image 7" />
            <img src="/images/image 8.svg" alt="Image 8" />
            <img src="/images/image 9.svg" alt="Image 9" />
            <img src="/images/image 10.svg" alt="Image 10" />
            <img src="/images/image 11.svg" alt="Image 11" />
          </div>
          </div>
        </div>


        <div className='artwall'>
          <div className="about-header2">I’ve got a wall full of art and a head full of ideas.</div>
          <div className="scattered-notes">
            <div className="note">Design is about improving networks and systems</div>
            <div className="note">Even deciding the problem that must be solved comes with assumptions</div>
            <div className="note">When you are confused about where to go next - do a brain dump.</div>
            <div className="note">Be comfortable with getting the answers you did not want</div>
            <div className="note">Ask the right questions and the answers reveal themselves</div>
            <div className="note">As designers, our business is people</div>
          </div>
          

        </div>

      </div>
    );
};

export default About;
