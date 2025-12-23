import React from 'react';

const Hero: React.FC = () => {
  const scrollIntoView = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-cafe-brown">
      {/* Background with zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop")',
          animation: 'zoom 30s infinite alternate linear'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl animate-[fadeIn_0.8s_ease-out]">
          sample cafe
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light italic mb-10 font-serif tracking-wide drop-shadow-lg animate-[fadeIn_0.8s_ease-out_0.2s_both]">
          crafted coffee. calm moments.
        </p>
        <div className="animate-[fadeIn_0.8s_ease-out_0.4s_both]">
          <button 
            onClick={() => scrollIntoView('contact')}
            className="group relative inline-block px-10 py-4 bg-white text-cafe-green rounded-full text-lg font-medium transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10">Visit Us</span>
            <div className="absolute inset-0 bg-cafe-cream rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-0"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;