import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Menu from './components/Menu.tsx';
import Gallery from './components/Gallery.tsx';
import Features from './components/Features.tsx';
import Timings from './components/Timings.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Hide the loader immediately when the main component mounts
    const shell = document.getElementById('loading-shell');
    if (shell) {
      shell.classList.add('hidden');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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