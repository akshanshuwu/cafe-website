
import React from 'react';

const Hero: React.FC = () => {
  const scrollIntoView = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    scrollIntoView('contact');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] scale-100 animate-[zoom_20s_infinite_alternate]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop")' }}
      >
        {/* Main darkened overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Header-specific gradient to ensure navbar legibility */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 tracking-tight overflow-hidden drop-shadow-2xl">
          <span className="block animate-[slideUp_1.2s_cubic-bezier(0.2,1,0.3,1)_forwards]">
            sample cafe
          </span>
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-light italic mb-10 font-serif tracking-wide opacity-0 animate-[fadeIn_1.2s_ease-out_0.4s_forwards] drop-shadow-lg">
          crafted coffee. calm moments.
        </p>
        <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_0.8s_forwards]">
          <a 
            href="javascript:void(0)" 
            onClick={handleCtaClick}
            className="group relative inline-block px-10 py-4 bg-white text-cafe-green rounded-full text-lg font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10">Visit Us</span>
            <div className="absolute inset-0 bg-cafe-cream rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-0"></div>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
