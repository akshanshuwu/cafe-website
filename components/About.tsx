
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const items = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

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

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-cafe-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="lg:w-1/2 relative">
            <div className="reveal-on-scroll">
              <div className="relative z-0 overflow-hidden rounded-2xl group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
                  alt="Brewing Coffee" 
                  className="rounded-2xl w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Floating Quote Card - Repositioned and z-index fixed */}
            <div className="absolute top-1/2 -right-8 lg:-right-12 z-20 hidden lg:block transform -translate-y-1/2 reveal-on-scroll delay-300">
               <div className="bg-white p-8 rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] border border-stone-100 max-w-[240px] hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_40px_70px_-12px_rgba(0,0,0,0.3)]">
                 <p className="text-cafe-brown font-serif italic text-base leading-relaxed">"The aroma of freshly roasted beans is the sound of the morning waking up."</p>
                 <div className="w-8 h-[1px] bg-cafe-brown/20 my-4"></div>
                 <p className="text-stone-400 text-xs uppercase tracking-widest font-bold">— Master Barista</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 reveal-on-scroll delay-200">
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

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((value, idx) => (
            <div key={idx} className="reveal-on-scroll bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700 border border-stone-50 group" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="w-14 h-14 bg-cafe-cream rounded-2xl flex items-center justify-center text-cafe-green mb-8 group-hover:bg-cafe-green group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-cafe-green mb-4 group-hover:translate-x-1 transition-transform">{value.title}</h3>
              <p className="text-stone-500 leading-relaxed group-hover:text-stone-700 transition-colors">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
