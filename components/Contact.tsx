
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cafe-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-cafe-green mb-8">Visit Us</h2>
            <div className="space-y-10">
              <div>
                <h4 className="text-cafe-brown font-bold uppercase text-xs tracking-widest mb-3">Address</h4>
                <p className="text-stone-700 text-lg">123 Espresso Lane<br />Creative District, City 90210</p>
              </div>
              <div>
                <h4 className="text-cafe-brown font-bold uppercase text-xs tracking-widest mb-3">Hours</h4>
                <ul className="text-stone-700 space-y-2">
                  <li className="flex justify-between"><span>Mon - Fri</span> <span>07:00 — 19:00</span></li>
                  <li className="flex justify-between"><span>Sat - Sun</span> <span>09:00 — 21:00</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-cafe-brown font-bold uppercase text-xs tracking-widest mb-3">Contact</h4>
                <p className="text-stone-700 text-lg">+1 (555) 012-3456</p>
                <p className="text-stone-500">hello@samplecafe.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 h-[500px] rounded-2xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Cafe Location Map"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
