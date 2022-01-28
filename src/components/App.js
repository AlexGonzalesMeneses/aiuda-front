import React from 'react';
import About from '../pages/about/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contact from '../pages/contact/Contact';
import Skill from '../pages/skill/Skill';
import Portafolio from '../pages/portafolio/Portafolio';
import WorkExperience from '../pages/workExperience/WorkExperience';
import useInformation from '../context/useInformation';
import AppContext from '../context/AppContext';
import LoginModal from './modals/login/LoginModal';

function App() {
  const value = useInformation();
  return (
    <>
      <AppContext.Provider value={value}>
        <Header />
        <About />
        <Skill />
        <WorkExperience />
        <Portafolio />
        <Contact />
        <Footer />
        <LoginModal />
      </AppContext.Provider>
    </>
  );
}

export default App;
