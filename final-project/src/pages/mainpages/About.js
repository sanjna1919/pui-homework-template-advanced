import React from 'react';
import {useState, useEffect, useRef} from 'react';
import useMeasure from 'react-use/lib/useMeasure';
import { animate, motion, useMotionValue } from 'framer-motion';
import '../../pages/mainpages/About.css';
import hobbyimages from '../../data/hobbyimages.json';
import noteData from '../../data/noteData.json';


const About = () => {
  
  const FAST_DURATION = 15;
  const SLOW_DURATION = 35;
  const [duration, setDuration] = useState(FAST_DURATION);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  
  const containerRef = useRef();
  const getRandomPosition = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
      const finalPosition = -width / 2 -8; 
      let controls;

      if (mustFinish){
        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
          ease: 'linear',
          duration: duration * (1 - xTranslation.get()/finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          }
        });
      }else{
        controls = animate(xTranslation, [0, finalPosition], {
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        });
      }
      return controls.stop; 
    }, [xTranslation, width, duration, rerender]);

    return (
      <div className="content">

       <motion.div className="hero">
        {/* Header Animation */}
        <div className="about-text">
          <motion.div
            className="about-header"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <span className="header2 left">Call me</span>
            <div className="about-name">
              {['"', 'sun-', 'juh-', 'nah', '"'].map((text, index) => (
                <motion.span
                  key={index}
                  className="handwriting"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Description Animation */}
          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.2 }}
          >
            <div className="body medium">
              I was born and raised in India, with exposure to a variety of cultures and problems to solve at scale.
            </div>
            <div className="body medium">
              During my undergrad in Computer Science in Vellore Institute of Technology, I discovered my love for UX and
              led Interaction Design Association, VIT, a local chapter of IxDA, and became the go-to UXer among my engineer
              classmates.
            </div>
            <div className="body medium">
              My tech background enables me to think about complex problems in an expansive, intricate, and logical way. I
              take a methodical approach to creativity and train it like a muscle every day!
            </div>
          </motion.div>
        </div>

        {/* Image Animation */}
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.2 }}
        >
          <img src="/images/sanjna.png" alt="Image of Sanjna against a green background" />
          <img src="/images/flower-stroke.svg" className="icon icon-1" />
          <img src="/images/scribble-stroke.svg" className="icon icon-2" />
          <img src="/images/star-stroke.svg" className="icon icon-3" />
          <img src="/images/arrow-stroke.svg" className="icon icon-4" />
        </motion.div>

      </motion.div>
      
        {/* hobbies */}
        <div className='hobbies'>
          <div className='hobbies-text'>
            <div className='header2'>Why love one thing when you can love the entire world?</div>
            <div className='body medium centered'>From an early age, I have filled my time with creative hobbies that bring me joy and peace.
            </div>
          </div>
          <motion.div className='hobbies-carousel'>
          <motion.div className="image-carousel" 
            ref={ref} 
            style={{x: xTranslation}} 
            onHoverStart={() => {
              setDuration(SLOW_DURATION)
              setMustFinish(true)}}
            onHoverEnd={() => {
              setDuration(FAST_DURATION)
              setMustFinish(true)}}>

              {[...hobbyimages, ...hobbyimages].map((item, index) => (
                <img key={index} src={item.image} alt={item.alt} />
              ))}
        
          </motion.div>
          </motion.div>
        </div>


        <div className='artwall' ref={containerRef}>
        
          <div className='header2 withmargin centered white'>I’ve got a wall full of art and a head full of ideas.</div>
          <div className="scattered-notes">
             {noteData.map((note, index) => (
                <motion.div key={index} className="note body" 
                drag 
                dragConstraints={containerRef}
                dragElastic={0.1}
                dragMomentum={true}
                style={{
                  position: 'absolute',
                  top: `calc(${note.top} + ${containerRef.current?.offsetTop}px)`,
                  left: `calc(${note.left} + ${containerRef.current?.offsetLeft}px)`
                }}>
                  {note.note}
                </motion.div>
             ))} 
          </div>
        </div>

      </div>
    );
};

export default About;