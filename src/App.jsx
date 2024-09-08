// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar'; // Import the Navbar component
import Contact from './Components/Body/Contact/Contact'; // Import page components
import Home from './Components/Body/Home/Home';
import Education from './Components/Body/Education/Education';
import Experience from './Components/Body/Experience/Experience';
import Projects from './Components/Body/Projects/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <div className='appMain'>
        <NavBar />
        <div className='bodyContent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;