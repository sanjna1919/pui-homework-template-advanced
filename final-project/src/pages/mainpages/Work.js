import React from 'react';
import {motion} from 'framer-motion';
import '../../pages/mainpages/Work.css';
import Quote from '../../components/Quote.js';
import ProjectCard from '../../components/ProjectCard.js';
import projectData from '../../data/projectData.json';

import p1 from '../../images/p1.svg';
import p2 from '../../images/p2.svg';
import p3 from '../../images/p3.svg';
import p4 from '../../images/p4.svg';

const pImageList = [p1, p2, p3, p4];


// Animation Variant for main container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.3, // Stagger appearance of child elements
    },
  },
};

// Animation Variant for parent container
const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, 
    },
  },
}

// Animation Variant for item within parent container
const itemVariants = {
  hidden: { opacity: 0 }, 
  visible: { opacity: 1 },
};

// Animation Variant for item within parent container, but a different style
const itemVariantsMovement = {
    hidden: { opacity: 0, y:20 }, 
    visible: { opacity: 1, y:0 },
  };

// Variant for animating flower svg
const svgFlowerIcon = {
  hidden: {
    opacity:0,
    pathLength: 0,
    fill:"rgba(248, 118, 118, 0)",
    stroke: "rgb(248, 118, 118)",
    strokeWidth: 2,
  },
  visible: {
    opacity:1,
    pathLength: 1,
    fill:"rgba(248, 118, 118, 1)",
    stroke: "rgb(248, 118, 118)",
    strokeWidth: 2,
  }
}

// Variant for animating arrow svg
const svgArrowIcon = {
  hidden: {
    opacity:0,
    pathLength: 0,
    fill:"rgba(77, 176, 92, 0)",
    stroke: "rgba(77, 176, 92, 0)",
    strokeWidth: 2,
  },
  visible: {
    opacity:1,
    pathLength: 1,
    fill:"rgba(77, 176, 92, 1)",
    stroke: "rgba(77, 176, 92, 1)",
    strokeWidth: 2,
  }
}

// Variant for animating star and scribble svgs, same style
const svgIcon = {
  hidden: {
    opacity:0,
    pathLength: 0,
    strokeWidth: 6,
  },
  visible: {
    opacity:1,
    pathLength: 1,
    strokeWidth: 6,
  }
}




// Main component rendered
const Work = () => {

  return (
    // HERO BANNER
    <motion.div
      className="hero-banner"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* noscript for accessibility */}
      <noscript>
          <div className="noscript-message">
            JavaScript is required to view this page properly. Please enable JavaScript in your browser settings or use a compatible browser.
          </div>
        </noscript>

        {/* HERO BANNER PART 1 */}
      <motion.div className="hero-banner1">
        {/* Line 1 */}
        <motion.div className="intro-line" variants={parentVariants}>
          <motion.span className="header1 with-margin centered" variants={itemVariants}>I'm Sanjna</motion.span>
          
          {/* svg flower animation */}
          <motion.span className="icon-container" variants={itemVariants}>
            <motion.svg 
            width="60"
            height="60"
            viewBox="-2 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <motion.path
              d="M17.2197 4.05084C18.7371 2.50356 20.665 1.44271 22.766 0.998889C24.867 0.555072 27.0494 0.747675 29.0444 1.55298C31.0395 2.35829 32.7601 3.74114 33.9943 5.53125C35.2286 7.32137 35.9227 9.4406 35.9911 11.628C38.7184 10.8262 41.6442 11.1343 44.1533 12.4877C46.6623 13.841 48.5591 16.134 49.4447 18.8846C50.3214 21.6265 50.1185 24.6123 48.8788 27.2044C47.6392 29.7964 45.46 31.7953 42.8018 32.7784C44.3777 35.1689 44.9783 38.0917 44.4762 40.9264C43.9741 43.7612 42.4088 46.2848 40.1126 47.9618C37.8121 49.6565 34.96 50.3821 32.1487 49.9879C29.3375 49.5938 26.7831 48.1102 25.0161 45.8453C23.9158 47.2573 22.4989 48.379 20.8848 49.1157C19.2707 49.8525 17.5067 50.1829 15.7413 50.0789C13.9759 49.975 12.2608 49.4399 10.7405 48.5187C9.2202 47.5974 7.93921 46.317 7.00542 44.7853C5.90681 42.9756 5.34275 40.8814 5.38075 38.7533C5.41875 36.6252 6.05721 34.5533 7.2197 32.7857C4.56808 31.7852 2.3994 29.776 1.16866 27.1798C-0.0620799 24.5836 -0.25922 21.6021 0.618599 18.8608C1.49642 16.1196 3.38097 13.8316 5.87687 12.477C8.37277 11.1223 11.286 10.8063 14.0054 11.5952C14.1027 8.75731 15.2514 6.06261 17.2197 4.05448V4.05084ZM32.8733 26.4471C32.8733 30.855 29.3483 34.425 24.9983 34.425C22.9175 34.4298 20.9198 33.5926 19.4435 32.097C17.9672 30.6014 17.1327 28.5695 17.1233 26.4471C17.1233 22.0393 20.6483 18.4693 24.9983 18.4693C29.3483 18.4693 32.8733 22.0393 32.8733 26.4471Z"
              variants={svgFlowerIcon}
              initial = "hidden"
              animate = "visible"
              transition = {{
                default: {duration:2, ease: "easeInOut"},
                fill: {duration: 2, ease: "easeIn"}
              }}
              fill-rule="evenodd"
            />
            </motion.svg>
          </motion.span>
          
          
          <motion.span className="header1 with-margin centered" variants={itemVariants}>a product designer</motion.span>
          
            {/* svg scribble animation */}
            <motion.span className="icon-container" variants={itemVariants}>
              <motion.svg 
              width="60"
              height="60"
              viewBox="-2 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              
            <motion.path
              d="M6.89844 21.8333C13.2984 9.03328 31.6451 2.63328 28.2318 11.1666C23.9651 21.8333 -1.6349 41.0333 13.2984 47.4333C19.0286 49.8909 26.3331 49.3533 33.1555 47.2199M33.1555 47.2199C44.1123 43.7853 53.8318 36.2418 53.8318 30.3666C53.8318 19.6999 38.8984 23.9666 34.6318 38.8999C33.7528 41.9805 33.2323 44.7922 33.1555 47.2199ZM33.1555 47.2199C32.8568 56.5341 39.035 60.1608 55.9651 51.6999" stroke="#6F64FF" stroke-width="5" stroke-linecap="round" fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="100 100"
              strokeDashoffset="100"
              variants={svgIcon}
              transition = {{
                duration: 1,
                ease: "easeInOut",
                pathLength: { duration: 1, ease: "easeInOut", strokeDasharray: "0 1", strokeDashoffset: 0 }
              }}
            />
            </motion.svg>
          </motion.span>
        </motion.div>


        {/* Line 2 */}
        <motion.div className="intro-line" variants={parentVariants}>
          <motion.span className="header1 with-margin centered" variants={itemVariants}>with experience in</motion.span>
          
          {/* svg star animation */}
          <motion.span className="icon-container" variants={itemVariants}>
            <motion.svg
              width="60"
              height="60"
              viewBox="-2 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <motion.path
                d="M29 3V53"
                stroke="#DFB553"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                transition = {{
                  duration: 1,
                  ease: "easeInOut",
                  pathLength: { duration: 1, ease: "easeInOut", strokeDasharray: "0 1", strokeDashoffset: 0 }
                }}
              />
              <motion.path
                d="M54 28L4 28"
                stroke="#DFB553"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                transition = {{
                  duration: 1,
                  ease: "easeInOut",
                  pathLength: { duration: 1, ease: "easeInOut", strokeDasharray: "0 1", strokeDashoffset: 0 }
                }}
              />
              <motion.path
                d="M46 11L10.6447 46.3553"
                stroke="#DFB553"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                transition = {{
                  duration: 1,
                  ease: "easeInOut",
                  pathLength: { duration: 1, ease: "easeInOut", strokeDasharray: "0 1", strokeDashoffset: 0 }
                }}
              />
              <motion.path
                d="M46 46L10.6447 10.6447"
                stroke="#DFB553"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                transition = {{
                  duration: 1,
                  ease: "easeInOut",
                  pathLength: { duration: 1, ease: "easeInOut", strokeDasharray: "0 1", strokeDashoffset: 0 }
                }}
              />
          </motion.svg>
        </motion.span>
          <motion.span className="header1 with-margin centered" variants={itemVariants}>consumer FinTech</motion.span>
        </motion.div>

        {/* Line 3 */}
        <motion.div className="intro-line" variants={parentVariants}>
          <motion.span className="header1 with-margin centered" variants={itemVariants}>and a</motion.span>
    
           {/* svg arrow animation */}
          <motion.span className="icon-container" variants={itemVariants}>
            <motion.svg 
              width="60"
              height="60"
              viewBox="-2 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              
              <motion.path
                d="M15.914 52.3385C15.4394 52.813 14.7907 53.0746 14.1104 53.0655C13.4302 53.0564 12.7742 52.7775 12.2868 52.2901C11.7994 51.8027 11.5205 51.1467 11.5114 50.4665C11.5023 49.7862 11.7639 49.1375 12.2384 48.6629L34.308 26.5933L21.4435 13.7288C21.0806 13.3653 20.8307 12.9051 20.7254 12.4066C20.6201 11.908 20.6642 11.3933 20.852 10.9276C21.0398 10.4618 21.363 10.0659 21.7806 9.78977C22.1983 9.51364 22.6918 9.36971 23.1988 9.37615L52.2164 9.76306C52.8961 9.77254 53.5515 10.0514 54.0385 10.5384C54.5255 11.0255 54.8044 11.6808 54.8138 12.3605L55.2008 41.3782C55.2072 41.8851 55.0633 42.3786 54.7871 42.7963C54.511 43.2139 54.1151 43.5371 53.6493 43.7249C53.1836 43.9127 52.6689 43.9568 52.1703 43.8515C51.6718 43.7462 51.2117 43.4963 50.8481 43.1334L37.9836 30.2689L15.914 52.3385Z"
                fill="#4DB05C"
                variants={svgArrowIcon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeIn" },
                  fill: { duration: 2, ease: "easeIn" },
                  strokeDasharray: { duration: 2, ease: "easeInOut", value: "500" },
                  strokeDashoffset: { duration: 2, ease: "easeInOut", value: "0" }
                }}
              />
            </motion.svg>
          </motion.span>

          <motion.span className="header1 with-margin centered" variants={itemVariants}>strategic mindset</motion.span>
        </motion.div>
      </motion.div>




      {/* HERO BANNER PART 2 */}
      <motion.div className="hero-banner2" variants={parentVariants}>

        {/* cmu section */}
        <motion.div className="experience" variants={itemVariantsMovement}>
          <div className="left">
            <img src={`${process.env.PUBLIC_URL}/images/cmu.svg`} alt="CMU logo" />
          </div>
          <div className="right">
            <div className="body">currently</div>
            <a className="header4" href="https://hcii.cmu.edu">MHCI @ Carnegie Mellon</a>
          </div>
        </motion.div>

        {/* upstox section */}
        <motion.div className="experience" variants={itemVariantsMovement}>
          <div className="left">
            <img src={`${process.env.PUBLIC_URL}/images/upstox.svg`} alt="Upstox logo" />
          </div>
          <div className="right">
            <div className="body">previously</div>
            <a className="header4" href="https://upstox.com">UX Design @ Upstox India</a>
          </div>
          </motion.div>
      </motion.div>

      <Quote content="I take a methodical approach to creativity and train it like a muscle every day." />


      {/* Project Cards */}
      <motion.div className="project-section" id='#project-section'>
        <div className="header2 centered">Selected Projects</div>
        <div className="project-cards">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id} 
            color={project.color}
            textcolor={project.textcolor}
            image={pImageList[index]}
            header={project.header}
            tags={project.tags}
            description={project.description}
            link={project.link}
            index={index} 
            alt={project.alt}
          />
        ))}

        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default Work;


