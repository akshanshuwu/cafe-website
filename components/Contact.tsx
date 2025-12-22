
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [mapActive, setMapActive] = useState(false);

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
            className="lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group reveal-on-scroll"
            onClick={() => setMapActive(true)}
            onMouseLeave={() => setMapActive(false)}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, pointerEvents: mapActive ? 'auto' : 'none' }} 
              allowFullScreen 
              loading="lazy"
              title="Cafe Location Map"
            ></iframe>
            {!mapActive && (
              <div className="absolute inset-0 bg-cafe-green/5 backdrop-blur-[2px] flex items-center justify-center cursor-pointer md:hidden">
                <div className="bg-white/90 px-6 py-3 rounded-full text-cafe-green text-sm font-bold uppercase tracking-widest shadow-xl">
                  Tap to interact with map
                </div>
              </div>
            )}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
