
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Define which sections should trigger a "Dark" theme (White text, Green background)
  const darkSections = ['home', 'features'];
  const isDarkTheme = darkSections.includes(activeSection);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust trigger point
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Track nav items + the home and features sections for theme switching
    const sectionsToObserve = [...navItems.map(i => i.id), 'home', 'features'];
    
    sectionsToObserve.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine navbar background based on scroll and theme
  const getNavBackground = () => {
    if (!isScrolled) return 'bg-transparent py-6';
    return isDarkTheme 
      ? 'bg-cafe-green/95 backdrop-blur-md py-4 shadow-lg' 
      : 'bg-cafe-beige/95 backdrop-blur-md py-4 shadow-sm';
  };

  // Determine text color
  const getTextColor = () => {
    if (!isScrolled) return 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]';
    return isDarkTheme ? 'text-white' : 'text-cafe-green';
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${getNavBackground()}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="javascript:void(0)" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={`text-2xl font-bold tracking-tighter transition-all duration-500 hover:tracking-normal ${getTextColor()}`}
        >
          sample cafe
        </a>
        
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="javascript:void(0)"
              onClick={(e) => handleNavClick(e, item.id)}
              className={`group relative text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 ${getTextColor()} ${
                activeSection === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-100 hover:tracking-[0.4em]'
              }`}
            >
              {item.name}
              {/* Active Underline Indicator */}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-500 ease-out ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-1/2'
              }`}></span>
            </a>
          ))}
          <a
            href="javascript:void(0)"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`px-8 py-2.5 border rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105 active:scale-95 ${
              isScrolled 
                ? (isDarkTheme 
                    ? 'border-white text-white hover:bg-white hover:text-cafe-green' 
                    : 'border-cafe-green text-cafe-green hover:bg-cafe-green hover:text-white')
                : 'border-white text-white bg-black/10 backdrop-blur-sm hover:bg-white hover:text-cafe-green shadow-xl'
            }`}
          >
            Visit Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
