import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Project from './components/Main/Project/Project';
import Resource from './components/Main/Resource';

import Home from './components/Home';
import Team from './components/Main/Team/Team';
import Footer from './components/Footer.js/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
