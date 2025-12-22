
import React from 'react';

const Timings: React.FC = () => {
  const schedule = [
    { days: 'Monday — Friday', hours: '07:00 — 19:00', note: 'Morning Rush & Creative Flow' },
    { days: 'Saturday', hours: '08:00 — 21:00', note: 'Weekend Brunch & Vinyl Sets' },
    { days: 'Sunday', hours: '09:00 — 18:00', note: 'Slow Sips & Sunday Reads' }
  ];

  return (
    <section id="timings" className="py-32 bg-cafe-beige border-y border-stone-100 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 reveal-on-scroll">
            <span className="text-cafe-brown uppercase tracking-[0.4em] text-xs font-bold mb-6 block">The Schedule</span>
            <h2 className="text-5xl md:text-7xl font-bold text-cafe-green mb-8 leading-tight">
              Rituals <br />
              <span className="italic font-serif font-normal text-cafe-brown">of Time.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-md">
              Whether you're seeking a focused morning start or a slow afternoon unwind, our doors are open to hold space for your moments.
            </p>
            
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white inline-block">
              <h4 className="text-cafe-green font-bold text-sm uppercase tracking-widest mb-2">Barista's Note</h4>
              <p className="text-stone-500 italic font-serif">"The quietest hours for deep work are usually between 14:00 and 16:00 on weekdays."</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full reveal-on-scroll">
            <div className="space-y-12">
              {schedule.map((item, idx) => (
                <div key={idx} className="group border-b border-stone-200 pb-8 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif text-cafe-green group-hover:text-cafe-brown transition-colors duration-500">
                        {item.days}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-2 font-bold group-hover:text-cafe-green transition-colors">
                        {item.note}
                      </p>
                    </div>
                    <div className="text-3xl md:text-4xl font-light text-cafe-green tracking-tighter">
                      {item.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex items-center gap-4 text-stone-400">
              <div className="w-12 h-[1px] bg-stone-200"></div>
              <p className="text-xs uppercase tracking-widest">Public holidays may vary</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timings;
