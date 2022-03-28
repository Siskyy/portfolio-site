import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
