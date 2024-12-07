import React from 'react';
import './ProgressBar.css'; 
import { motion, useScroll, useSpring } from 'framer-motion';

// const ProgressBar = ({color}) => {
//     const { scrollYProgress } = useScroll();
//     const scaleX = useSpring(scrollYProgress, {
//       stiffness: 200,
//       damping: 30,
//     });
  
//     return <motion.div className="progress-bar" style={{ scaleX, backgroundColor: `var(${color})`}} />;
//   };
  
//   export default ProgressBar;

  const ProgressBar = ({ color }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
    });
  
    // Adjusting for fixed navbar height (e.g., 60px)
    const adjustedScaleX = useSpring(
      scrollYProgress, 
      { stiffness: 200, damping: 30 }
    );
  
    return <motion.div 
             className="progress-bar" 
             style={{
               scaleX: adjustedScaleX,
               backgroundColor: `var(${color})`
             }} 
          />;
  };
  
  export default ProgressBar;