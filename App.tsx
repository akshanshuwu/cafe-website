
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoffeeAIAssistant from './components/CoffeeAIAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cafe-brown selection:text-white">
      <Navbar isScrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <CoffeeAIAssistant />
    </div>
  );
};

export default App;
