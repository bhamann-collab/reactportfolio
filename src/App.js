import React from 'react';
import './css/style.scss';
import TitlePage from './components/titlePage/TitlePage'
import AboutMe from './components/aboutMe/AboutMe' 
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/skills/Skills'
import ContactMe from './components/contactMe/ContactMe'

function App() {
  return (
    <div className="App">
      <TitlePage />
      <AboutMe />
      <Portfolio />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
