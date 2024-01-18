import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './views/home/Home'
import Login from './views/login/Login';
import About from './views/about/About';
import Navbar from './components/navbar/Navbar';
import Favorites from './views/favorites/Favorites';
import Footer from './components/footer/Footer';

function App() {
  const linkedIn = 'https://www.linkedin.com/in/fedecodelab/';
  const github = 'https://github.com/FedeCodeLab';
  const PORFOLIO = 'https://fedecodelab.tech/';
  const { pathname } = useLocation();
  
  return (
    <div className='App'>
      {pathname !== '/' && <Navbar github={github} linkedIn={linkedIn} porfolio={PORFOLIO} />}
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About github={github} linkedIn={linkedIn} porfolio={PORFOLIO} />} />
        </Routes>
      </main>
      {pathname !== '/' && <Footer github={github} linkedIn={linkedIn} porfolio={PORFOLIO} />}
    </div>
  )
}

export default App
