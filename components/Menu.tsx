
import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

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
    <section id="menu" className="pt-20 pb-32 bg-cafe-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="text-cafe-brown uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Selection</span>
          <h2 className="text-5xl md:text-6xl font-bold text-cafe-green mb-6">Curated Menu</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              From our <span className="italic font-serif text-cafe-brown">signature</span> house roasts to our carefully whisked ceremony-grade matchas, every item on our menu is a celebration of purity. We source seasonally, brew precisely, and serve with intention.
            </p>
          </div>
          <div className="w-16 h-1 bg-cafe-brown/20 mx-auto mt-4"></div>
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
            >
              <h3 className="text-2xl font-bold text-cafe-brown mb-10 border-b border-cafe-cream pb-6 flex justify-between items-center group">
                {cat.title}
                <span className="text-xs font-light opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 italic">Fresh</span>
              </h3>
              <ul className="space-y-8">
                {cat.items.map((item, i) => (
                  <li key={i} className="group cursor-default flex flex-col relative overflow-hidden">
                    <span className="text-stone-800 font-medium group-hover:text-cafe-green transition-colors duration-300 translate-x-0 group-hover:translate-x-2">{item.name}</span>
                    <span className="text-stone-400 text-[10px] mt-1 uppercase tracking-[0.15em] opacity-80 group-hover:opacity-100 group-hover:text-cafe-brown transition-all duration-500 transform translate-x-0 group-hover:translate-x-2">{item.desc}</span>
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
