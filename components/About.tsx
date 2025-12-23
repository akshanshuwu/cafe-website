import React, { useState, useEffect, useCallback, useRef } from 'react';

const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const prevSrc = useRef(src);

  // Reset loaded state when src changes (critical for carousels)
  useEffect(() => {
    if (prevSrc.current !== src) {
      setIsLoaded(false);
      prevSrc.current = src;
    }
  }, [src]);

  const placeholderSrc = src.includes('?') ? `${src}&w=50&blur=10` : `${src}?w=50&blur=10`;

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${className}`}>
      <img
        src={placeholderSrc}
        alt={alt}
        className="w-full h-full object-cover blur-lg scale-110"
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};

const About: React.FC = () => {
  const [activeBestSeller, setActiveBestSeller] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const values = [
    {
      title: 'Ethical Sourcing',
      desc: 'We partner directly with farmers from Ethiopia to Colombia, ensuring fair wages and sustainable practices.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Artisanal Roasting',
      desc: 'Our beans are roasted in small batches daily to unlock precise flavor profiles—from floral notes to rich cocoa.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Community First',
      desc: 'Sample Cafe is more than a shop; it’s a hub for creatives, neighbors, and coffee enthusiasts alike.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const bestSellers = [
    {
      name: 'CAPPUCCINO',
      desc: 'A masterpiece of balance: our signature rich espresso topped with perfectly aerated, silky micro-foam.',
      img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1200'
    },
    {
      name: 'ICED OAT LATTE',
      desc: 'Smooth, cold-extracted espresso paired with creamy oat milk over artisanal ice spheres.',
      img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      name: 'MATCHA LATTE',
      desc: 'Ceremony-grade matcha from Uji, Japan, whisked traditionally for a vibrant, earthy sweetness.',
      img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=1200'
    },
    {
      name: 'POUR OVER',
      desc: 'Slow-brewed precision using rotating single-origin beans to reveal delicate floral and citrus notes.',
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200'
    },
    {
      name: 'ESPRESSO TONIC',
      desc: 'A sophisticated combination of bright espresso and crisp tonic water, garnished with fresh rosemary.',
      img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const triggerTransition = useCallback((nextIdx: number) => {
    if (isAnimating || nextIdx === displayIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setDisplayIndex(nextIdx);
      setActiveBestSeller(nextIdx);
      setIsAnimating(false);
    }, 400); 
  }, [isAnimating, displayIndex]);

  const handleNext = useCallback(() => {
    const nextIdx = (activeBestSeller + 1) % bestSellers.length;
    triggerTransition(nextIdx);
  }, [activeBestSeller, bestSellers.length, triggerTransition]);

  const handlePrev = useCallback(() => {
    const nextIdx = (activeBestSeller - 1 + bestSellers.length) % bestSellers.length;
    triggerTransition(nextIdx);
  }, [activeBestSeller, bestSellers.length, triggerTransition]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="about" className="pt-32 pb-16 bg-cafe-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="lg:w-1/2 relative">
            <div className="reveal-on-scroll">
              <div className="relative z-0 overflow-hidden rounded-2xl group shadow-2xl">
                <LazyImage 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
                  alt="Brewing Coffee" 
                  className="w-full h-[600px] transition-transform duration-[2s] group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 lg:-right-12 z-20 hidden lg:block transform -translate-y-1/2 reveal-on-scroll">
               <div className="bg-white p-8 rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] border border-stone-100 max-w-[240px] hover:-translate-y-2 transition-transform duration-500">
                 <p className="text-cafe-brown font-serif italic text-base leading-relaxed">"The aroma of freshly roasted beans is the sound of the morning waking up."</p>
                 <div className="w-8 h-[1px] bg-cafe-brown/20 my-4"></div>
                 <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">— Master Barista</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 reveal-on-scroll">
            <span className="text-cafe-brown uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Legacy & Craft</span>
            <h2 className="text-5xl md:text-6xl font-bold text-cafe-green mb-8 leading-[1.1]">
              Crafting calm in a <span className="italic font-serif font-normal text-cafe-brown">restless</span> world.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Sample Cafe was born from a desire to redefine the urban coffee experience. We stripped away the noise to focus on what matters: the chemistry of the bean, the warmth of the space, and the connection between people.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              Every pour is a deliberate act of craft. We don't just serve coffee; we curate moments of stillness.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-stone-200">
              <div className="group cursor-default">
                <p className="text-4xl font-bold text-cafe-green transition-colors group-hover:text-cafe-brown">08</p>
                <p className="text-xs uppercase tracking-widest text-cafe-brown font-bold mt-1">Years of Craft</p>
              </div>
              <div className="group cursor-default">
                <p className="text-4xl font-bold text-cafe-green transition-colors group-hover:text-cafe-brown">24k</p>
                <p className="text-xs uppercase tracking-widest text-cafe-brown font-bold mt-1">Cups Brewed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32 reveal-on-scroll bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-20 relative shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white overflow-hidden min-h-[600px] flex items-center">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cafe-brown/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto relative z-10 w-full">
            <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
              <div className={`md:w-1/2 space-y-8 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
                <div className="inline-flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-cafe-brown"></div>
                  <span className="text-cafe-brown font-bold uppercase text-xs tracking-[0.5em]">Curated Favourites</span>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-bold text-cafe-green uppercase tracking-tight leading-none">
                  {bestSellers[displayIndex].name}
                </h3>
                
                <p className="text-stone-600 text-xl leading-relaxed max-w-md font-serif italic">
                  "{bestSellers[displayIndex].desc}"
                </p>
                
                <div className="flex gap-6 pt-4">
                  <button 
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-cafe-green hover:text-white hover:border-cafe-green transition-all duration-300 active:scale-90 disabled:opacity-30 group"
                  >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-cafe-green hover:text-white hover:border-cafe-green transition-all duration-300 active:scale-90 disabled:opacity-30 group"
                  >
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-3 mt-12">
                  {bestSellers.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => triggerTransition(i)}
                      className={`h-1.5 transition-all duration-700 rounded-full ${i === activeBestSeller ? 'w-16 bg-cafe-green' : 'w-4 bg-stone-200 hover:bg-stone-300'}`}
                      aria-label={`Go to item ${i + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center relative w-full group">
                <div className="relative w-full max-w-[420px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-stone-50">
                  <LazyImage 
                    src={bestSellers[displayIndex].img} 
                    alt={bestSellers[displayIndex].name}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cafe-green/40 via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 md:-right-8 bg-white px-8 py-6 rounded-2xl shadow-2xl border border-stone-50 z-20 hidden sm:block animate-bounce-slow">
                   <p className="text-cafe-green font-bold text-xs uppercase tracking-[0.2em] mb-1">House Pick</p>
                   <p className="text-cafe-brown font-serif italic">Fresh Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="reveal-on-scroll bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700 border border-stone-50 group">
              <div className="w-14 h-14 bg-cafe-cream rounded-2xl flex items-center justify-center text-cafe-green mb-8 group-hover:bg-cafe-green group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-cafe-green mb-4 group-hover:translate-x-1 transition-transform">{value.title}</h3>
              <p className="text-stone-500 leading-relaxed group-hover:text-stone-700 transition-colors">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;