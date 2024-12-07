import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar.js';
import Work from './pages/mainpages/Work.js';
import About from './pages/mainpages/About.js';
import Footer from './components/Footer.js';
import Project1 from './pages/projectpages/Project1.js';
import Project2 from './pages/projectpages/Project2.js';
import Project3 from './pages/projectpages/Project3.js';
import Project4 from './pages/projectpages/Project4.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Navbar is always constant */}
        <Navbar />
        {/* This section handles the route switching */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />

            <Route path="/project1" element={<Project1 />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
            
          </Routes>
        </div>

        {/* Footer is also constant */}
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;

