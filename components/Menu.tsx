
import React from 'react';

const Menu: React.FC = () => {
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
    <section id="menu" className="py-24 bg-cafe-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cafe-brown uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Selection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-green">Curated Menu</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-cafe-brown mb-8 border-b border-cafe-cream pb-4">{cat.title}</h3>
              <ul className="space-y-6">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-stone-800 font-medium">{item}</span>
                    <span className="text-stone-400 text-sm mt-1">Available Daily</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-stone-500 italic">Seasonal rotations updated weekly. Ask our barista about today's roast.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
