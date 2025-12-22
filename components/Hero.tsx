
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up">
          sample cafe
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-light italic mb-10 font-serif tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          crafted coffee. calm moments.
        </p>
        <a 
          href="#menu" 
          className="inline-block px-10 py-4 bg-white text-cafe-green rounded-full text-lg font-medium hover:bg-cafe-cream transition-colors duration-300 shadow-xl opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]"
        >
          View Menu
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
