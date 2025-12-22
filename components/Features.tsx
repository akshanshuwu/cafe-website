
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { 
      title: 'Premium Beans', 
      desc: 'Direct trade beans from micro-lots across the globe.', 
      img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=300&h=300' 
    },
    { 
      title: 'Cozy Ambience', 
      desc: 'Minimalist wood interiors and warm ambient lighting.', 
      img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=300&h=300' 
    },
    { 
      title: 'Gigabit WiFi', 
      desc: 'The perfect spot for your remote work or creative flow.', 
      img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=300&h=300' 
    },
    { 
      title: 'Expert Baristas', 
      desc: 'Trained in precision brewing and milk chemistry.', 
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=300&h=300' 
    }
  ];

  return (
    <section id="features" className="py-32 bg-cafe-green text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {features.map((f, i) => (
            <div key={i} className="group reveal-on-scroll">
              <div className="relative w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white transition-all duration-500">
                <img 
                  src={f.img} 
                  alt={f.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide">{f.title}</h3>
              <p className="text-white/70 font-light leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
