import React from 'react';
import './css/style.scss';
import TitlePage from './components/titlePage/TitlePage'
import AboutMe from './components/aboutMe/AboutMe' 

function App() {
  return (
    <div className="App">
      <TitlePage />
      <AboutMe />
    </div>
  );
}

export default App;
