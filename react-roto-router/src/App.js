// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import About from './About'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <Router>
      <nav className='header'>
        <Link className='header-link' to="/">Home
        </Link>
        <Link className='header-link' to="/about">About
        </Link>
        <Link className='header-link' to="/services">Services
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
