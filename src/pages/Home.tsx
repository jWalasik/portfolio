import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;
