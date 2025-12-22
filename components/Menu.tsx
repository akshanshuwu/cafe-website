
import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      title: 'Specialty Coffee',
      items: ['Pour Over (Rotating Origin)', 'Nitro Cold Brew', 'Macchiato', 'Oat Milk Latte', 'Espresso Tonic']
    },
    {
      title: 'Signature Beverages',
      items: ['Matcha Ceremony Latte', 'Hojicha Roast', 'Dirty Chai', 'Artisanal Tea Selection', 'Fresh Pressed Greens']
    },
    {
      title: 'Bakery & Sweets',
      items: ['Almond Croissant', 'Vegan Fudge Brownie', 'Daily Scone', 'Avocado Toast', 'Berries & Cream Parfait']
    }
  ];

  return (
    <section id="menu" className="py-32 bg-cafe-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 reveal-on-scroll">
          <span className="text-cafe-brown uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Selection</span>
          <h2 className="text-5xl md:text-6xl font-bold text-cafe-green">Curated Menu</h2>
          <div className="w-16 h-1 bg-cafe-brown/20 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`bg-white p-12 rounded-3xl shadow-sm transition-all duration-700 reveal-on-scroll ${
                hoveredCategory !== null && hoveredCategory !== idx ? 'opacity-40 scale-[0.98] grayscale-[0.5]' : 'opacity-100 scale-100'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-cafe-brown mb-10 border-b border-cafe-cream pb-6 flex justify-between items-center group">
                {cat.title}
                <span className="text-xs font-light opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 italic">Fresh</span>
              </h3>
              <ul className="space-y-8">
                {cat.items.map((item, i) => (
                  <li key={i} className="group cursor-default flex flex-col relative overflow-hidden">
                    <span className="text-stone-800 font-medium group-hover:text-cafe-green transition-colors duration-300 translate-x-0 group-hover:translate-x-2">{item}</span>
                    <span className="text-stone-400 text-xs mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-2">Premium Blend</span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-cafe-green transition-all duration-300 group-hover:h-3/4"></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center reveal-on-scroll">
          <p className="text-stone-400 italic text-lg font-serif">Seasonal rotations updated weekly. Ask our barista about today's roast.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
