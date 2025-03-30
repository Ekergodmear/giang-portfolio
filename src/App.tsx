import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Jobs from './components/Jobs/Jobs';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Jobs />
        <Contact />
      </main>
    </>
  );
};

export default App;
