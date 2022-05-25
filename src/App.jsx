import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import ProjectsNew from './Components/Projects/ProjectsNew';

function App() {
  return (
    <>
      <Header />
      {/* <ScrollBar /> */}
      <NavBar />
      <About />
      <ProjectsNew />
      <Contact />
    </>
  );
}

export default App;
