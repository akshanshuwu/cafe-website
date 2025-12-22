
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cafe-cream relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 reveal-on-scroll">
            <h2 className="text-4xl font-bold text-cafe-green mb-8">Reach Out</h2>
            <div className="space-y-10">
              <div>
                <h4 className="text-cafe-brown font-bold uppercase text-xs tracking-widest mb-3">Address</h4>
                <p className="text-stone-700 text-lg">123 Espresso Lane<br />Creative District, City 90210</p>
              </div>
              <div>
                <h4 className="text-cafe-brown font-bold uppercase text-xs tracking-widest mb-3">Get in Touch</h4>
                <div className="space-y-3">
                  <p className="text-stone-700 text-lg">+1 (555) 012-3456</p>
                  
                  <a 
                    href="https://wa.me/15550123456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-all font-medium group"
                  >
                    <div className="bg-emerald-100 p-2 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <span className="text-lg">Chat on WhatsApp</span>
                  </a>

                  <p className="text-stone-500 hover:text-cafe-brown transition-colors cursor-pointer pt-2">hello@samplecafe.com</p>
                </div>
              </div>
              <div className="pt-4">
                <button className="px-8 py-3 bg-cafe-green text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
          <div 
            className="lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group reveal-on-scroll bg-stone-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
              alt="Map Location Placeholder" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-green/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-serif italic mb-2">Visit our Sanctuary</h3>
              <p className="text-sm uppercase tracking-widest opacity-80">123 Espresso Lane, City 90210</p>
            </div>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
