import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Projects />
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
