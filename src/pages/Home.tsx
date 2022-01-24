import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Atoms/Footer';
import About from '../components/Organisms/About';
import Contact from '../components/Organisms/Contact';
import Header from '../components/Organisms/Header';
import Hero from '../components/Organisms/Hero';
import Projects from '../components/Organisms/Projects';

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.main`  
`

export default Home;
