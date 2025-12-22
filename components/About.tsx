
import React from 'react';

const About: React.FC = () => {
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
    <section id="about" className="py-32 bg-cafe-beige overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
                alt="Brewing Coffee" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cafe-brown/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cafe-green/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-12 hidden lg:block transform -translate-y-1/2">
               <div className="bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-[200px]">
                 <p className="text-cafe-brown font-serif italic text-sm">"The aroma of freshly roasted beans is the sound of the morning waking up."</p>
                 <p className="text-stone-400 text-xs mt-3 uppercase tracking-widest font-bold">— Master Barista</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-cafe-brown uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Legacy & Craft</span>
            <h2 className="text-5xl md:text-6xl font-bold text-cafe-green mb-8 leading-[1.1]">
              Crafting calm in a <span className="italic font-serif font-normal text-cafe-brown">restless</span> world.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Sample Cafe was born from a desire to redefine the urban coffee experience. We stripped away the noise to focus on what matters: the chemistry of the bean, the warmth of the space, and the connection between people.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              Every pour is a deliberate act of craft. We don't just serve coffee; we curate moments of stillness. Whether it's our signature micro-lot pour-overs or our velvety smooth oat lattes, every sip tells a story of origin and precision.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-stone-200">
              <div>
                <p className="text-4xl font-bold text-cafe-green">08</p>
                <p className="text-xs uppercase tracking-widest text-cafe-brown font-bold mt-1">Years of Craft</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cafe-green">24k</p>
                <p className="text-xs uppercase tracking-widest text-cafe-brown font-bold mt-1">Cups Brewed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-50 group">
              <div className="w-14 h-14 bg-cafe-cream rounded-2xl flex items-center justify-center text-cafe-green mb-8 group-hover:bg-cafe-green group-hover:text-white transition-colors duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-cafe-green mb-4">{value.title}</h3>
              <p className="text-stone-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* The Space CTA */}
        <div className="relative rounded-[40px] bg-cafe-green p-12 md:p-24 overflow-hidden text-center text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Focus</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our interior features natural oak, limestone accents, and ergonomic seating designed to foster both creative work and deep conversation. No loud music—just the rhythmic hiss of the espresso machine and the low hum of life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-2 border border-white/30 rounded-full text-sm font-medium">Quiet Zones</span>
              <span className="px-6 py-2 border border-white/30 rounded-full text-sm font-medium">Power at every table</span>
              <span className="px-6 py-2 border border-white/30 rounded-full text-sm font-medium">Natural Lighting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
