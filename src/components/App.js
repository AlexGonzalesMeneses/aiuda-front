import React from 'react';
import About from '../pages/about/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contact from '../pages/contact/Contact';
import Skill from '../pages/skill/Skill';
import Portafolio from '../pages/portafolio/Portafolio';
import WorkExperience from '../pages/workExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skill />
      <WorkExperience />
      <Portafolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
