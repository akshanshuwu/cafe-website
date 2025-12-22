import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cafe-beige border-t border-stone-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tight text-cafe-green">
            sample cafe
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-stone-400 hover:text-cafe-brown transition-colors">Instagram</a>
            <a href="#contact" className="text-stone-400 hover:text-cafe-brown transition-colors">Our Location</a>
            <a href="#" className="text-stone-400 hover:text-cafe-brown transition-colors">Pinterest</a>
          </div>
          
          <div className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Sample Cafe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;