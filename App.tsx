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
    // 1. Mark JS as ready for CSS transitions
    document.documentElement.classList.add('js-ready');

    // 2. Hide loading shell if it's still there
    const shell = document.getElementById('loading-shell');
    if (shell) shell.classList.add('hidden');

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // 3. Setup Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px' 
    });

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If already in view, show immediately
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('visible');
        } else {
          revealObserver.observe(el);
        }
      });
    };

    observeElements();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 4. Fail-safe: Force reveal all after 1.5 seconds in case observer fails
    const forceRevealTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('visible');
      });
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      clearTimeout(forceRevealTimer);
    };
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
        <Timings />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;