import React from 'react';
import { initialize, pageview } from 'react-ga';
import {
  formMock,
  navigationMock,
  profileMock,
  socialMock,
} from '../../tools/MockData';
import About from '../pages/about/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contact from '../pages/contact/Contact';

function App() {
  initialize('UA-170984824-1');
  pageview(window.location.pathname);

  return (
    <div className="App">
      <Header {...navigationMock} />
      <About {...profileMock} />
      <Contact {...formMock} />
      <Footer {...socialMock} />
    </div>
  );
}

export default App;
