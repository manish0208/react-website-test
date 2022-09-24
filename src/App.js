// branch -> react-website-test

import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Testimonial from './Components/Testimonial';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
           <Route path="/" element={
              <Home 
                intro="Introduction" 
                name="Manish Veerani"
                course="Electronics and Telecommunication Engineering" 
              />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="/testimonial" element={<Testimonial />} />
           <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
