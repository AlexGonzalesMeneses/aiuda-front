import React from 'react';
import { initialize, pageview } from 'react-ga';
import {
  navigationMock,
  profileMock,
  socialMock,
  skillMock,
  portafolioMock,
} from '../../tools/MockData';
import About from '../pages/about/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Skill from '../pages/skill/Skill';
import Portafolio from '../pages/portafolio/Portafolio';

function App() {
  initialize('UA-170984824-1');
  pageview(window.location.pathname);

  return (
    <div className="App">
      <Header {...navigationMock} />
      <About {...profileMock} />
      <Skill {...skillMock} />
      <Portafolio {...portafolioMock} />
      <Footer {...socialMock} />
    </div>
  );
}

export default App;
