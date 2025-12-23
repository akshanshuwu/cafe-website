import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Timings from './components/Timings';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Instantly hide loading shell on mount
    const shell = document.getElementById('loading-shell');
    if (shell) {
      shell.classList.add('hidden');
      setTimeout(() => shell.remove(), 1000); // Cleanup after fade
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // 2. Setup Scroll Reveal with safer defaults
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' 
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-cafe-brown selection:text-white overflow-x-hidden">
      <Navbar isScrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Gallery />
        <Timings />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;