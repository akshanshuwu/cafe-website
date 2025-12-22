
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cafe-beige/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-cafe-green' : 'text-white'}`}>
          sample cafe
        </a>
        
        <div className="hidden md:flex space-x-10 items-center">
          {['About', 'Menu', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-cafe-green' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2 border rounded-full text-sm font-medium transition-all duration-300 ${
              isScrolled 
                ? 'border-cafe-green text-cafe-green hover:bg-cafe-green hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-cafe-green'
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
