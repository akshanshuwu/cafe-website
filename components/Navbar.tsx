import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Home and features are dark sections
  const darkSections = ['home', 'features'];
  const isDarkTheme = darkSections.includes(activeSection);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Hours', id: 'timings' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Balanced margin to prevent flickering active states
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sectionsToObserve = [...navItems.map(i => i.id), 'home', 'features'];
    sectionsToObserve.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavBackground = () => {
    if (isMenuOpen) return 'bg-cafe-green';
    if (!isScrolled) return 'bg-transparent py-5 md:py-6';
    return isDarkTheme 
      ? 'bg-cafe-green/95 backdrop-blur-md py-4 shadow-xl' 
      : 'bg-cafe-beige/95 backdrop-blur-md py-4 shadow-md';
  };

  const getTextColor = () => {
    if (isMenuOpen) return 'text-white';
    if (isScrolled) {
      return isDarkTheme ? 'text-white' : 'text-cafe-green';
    }
    return 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]';
  };

  const getHamburgerBg = () => {
    if (isMenuOpen) return 'bg-white';
    if (!isScrolled) return 'bg-white shadow-[0_2px_4px_rgba(0,0,0,0.5)]';
    return isDarkTheme ? 'bg-white' : 'bg-cafe-green';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${getNavBackground()}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-2xl md:text-2xl font-bold tracking-tighter transition-all duration-500 hover:tracking-normal outline-none z-[110] ${getTextColor()}`}
          >
            sample cafe
          </button>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300 ${getTextColor()} ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-500 ease-out ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-8 py-2.5 border rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? (isDarkTheme 
                      ? 'border-white text-white hover:bg-white hover:text-cafe-green' 
                      : 'border-cafe-green text-cafe-green hover:bg-cafe-green hover:text-white')
                  : 'border-white text-white bg-black/10 backdrop-blur-sm hover:bg-white hover:text-cafe-green'
              }`}
            >
              Visit Us
            </button>
          </div>

          <button 
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 focus:outline-none z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-7 h-[3px] rounded-full transition-all duration-300 ${getHamburgerBg()} ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`w-5 h-[3px] rounded-full transition-all duration-300 ${getHamburgerBg()} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-7 h-[3px] rounded-full transition-all duration-300 ${getHamburgerBg()} ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-cafe-green z-[90] transition-all duration-700 cubic-bezier(0.77, 0, 0.175, 1) md:hidden flex flex-col items-center justify-center space-y-10 ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-white text-4xl font-serif italic tracking-wide transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {item.name}
          </button>
        ))}
        <button
          onClick={() => handleNavClick('contact')}
          className={`px-12 py-4 bg-white text-cafe-green rounded-full text-lg font-bold uppercase tracking-widest shadow-2xl transition-all duration-500 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
          Visit Us
        </button>
      </div>
    </>
  );
};

export default Navbar;