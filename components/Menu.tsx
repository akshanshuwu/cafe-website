
import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
    {
      title: 'Specialty Coffee',
      items: [
        { name: 'Pour Over (Rotating Origin)', desc: 'Sourced from high-altitude micro-lots' },
        { name: 'Nitro Cold Brew', desc: 'Velvety smooth, infused with nitrogen' },
        { name: 'Macchiato', desc: 'Double espresso marked with micro-foam' },
        { name: 'Oat Milk Latte', desc: 'Creamy, balanced, and perfectly steamed' },
        { name: 'Espresso Tonic', desc: 'Refreshing tonic with a citrus twist' }
      ]
    },
    {
      title: 'Signature Beverages',
      items: [
        { name: 'Matcha Ceremony Latte', desc: 'Ceremony-grade whisked to order' },
        { name: 'Hojicha Roast', desc: 'Nutty, toasted Japanese green tea' },
        { name: 'Dirty Chai', desc: 'Spiced black tea with a double shot' },
        { name: 'Artisanal Tea Selection', desc: 'Hand-picked loose leaf treasures' },
        { name: 'Fresh Pressed Greens', desc: 'Kale, apple, ginger, and lemon' }
      ]
    },
    {
      title: 'Bakery & Sweets',
      items: [
        { name: 'Almond Croissant', desc: 'Flaky layers with sweet frangipane' },
        { name: 'Vegan Fudge Brownie', desc: 'Decadent 70% dark chocolate' },
        { name: 'Daily Scone', desc: 'Served with house-made berry jam' },
        { name: 'Avocado Toast', desc: 'Sourdough with radish and chili flakes' },
        { name: 'Berries & Cream Parfait', desc: 'Seasonal fruit and organic yogurt' }
      ]
    }
  ];

  return (
    <section id="menu" className="pt-20 pb-32 bg-cafe-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 reveal-on-scroll">
          <span className="text-cafe-brown uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Selection</span>
          <h2 className="text-4xl md:text-6xl font-bold text-cafe-green mb-6">Curated Menu</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Seasonal roasts and precisely whisked ceremony-grade matchas. Every item is a celebration of purity and intention.
            </p>
          </div>
          <div className="w-16 h-1 bg-cafe-brown/20 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
              className={`bg-white p-8 md:p-12 rounded-3xl shadow-sm transition-all duration-500 reveal-on-scroll ${
                activeCategory !== null && activeCategory !== idx ? 'md:opacity-40 md:scale-[0.98]' : 'opacity-100 scale-100'
              } ${activeCategory === idx ? 'ring-2 ring-cafe-green/5 ring-inset' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-cafe-brown mb-8 border-b border-cafe-cream pb-6 flex justify-between items-center group">
                {cat.title}
                <span className="text-[10px] font-bold uppercase tracking-widest text-cafe-green opacity-40 italic">Select</span>
              </h3>
              <ul className="space-y-6 md:space-y-8">
                {cat.items.map((item, i) => (
                  <li key={i} className="group flex flex-col relative pl-4">
                    <span className="text-stone-800 font-medium">{item.name}</span>
                    <span className="text-stone-400 text-[10px] mt-1 uppercase tracking-[0.15em]">{item.desc}</span>
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-cafe-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll">
          <p className="text-stone-400 italic text-base md:text-lg font-serif">Seasonal rotations updated weekly. Ask our barista about today's roast.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
