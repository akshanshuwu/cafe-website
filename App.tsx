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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Global Scroll Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, stop observing to save resources
          revealObserver.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.05, // Trigger as soon as 5% of the element is visible
      rootMargin: '0px 0px -20px 0px' 
    });

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        // If element is already in viewport on mount, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('visible');
        } else {
          revealObserver.observe(el);
        }
      });
    };

    // Run initial observation
    observeElements();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Safety: In case of dynamic content or hydration delays
    const timer = setTimeout(observeElements, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      clearTimeout(timer);
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