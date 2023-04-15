import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { Container } from '@mui/material';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Container>
        <Navigation />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default App;
