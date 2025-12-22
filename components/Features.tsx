
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Premium Beans', desc: 'Direct trade beans from micro-lots across the globe.', icon: '☕' },
    { title: 'Cozy Ambience', desc: 'Minimalist wood interiors and warm ambient lighting.', icon: '🕯️' },
    { title: 'Gigabit WiFi', desc: 'The perfect spot for your remote work or creative flow.', icon: '📶' },
    { title: 'Expert Baristas', desc: 'Trained in precision brewing and milk chemistry.', icon: '👨‍🍳' }
  ];

  return (
    <section id="features" className="py-24 bg-cafe-green text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
