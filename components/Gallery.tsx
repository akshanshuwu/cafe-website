
import React, { useState } from 'react';

const LazyGalleryImage: React.FC<{ src: string; alt: string; index: number }> = ({ src, alt, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholderSrc = `${src}&w=50&blur=10`; // Low-res blurred version for placeholder

  return (
    <div className="relative overflow-hidden rounded-xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-stone-100">
      <img
        src={placeholderSrc}
        alt={alt}
        className="w-full h-auto object-cover blur-lg scale-110"
        aria-hidden="true"
      />
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-serif italic text-lg">@samplecafe</p>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-cafe-beige overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cafe-brown uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Aesthetics</span>
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-green">Captured Moments</h2>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <LazyGalleryImage key={i} src={src} alt={`Cafe Gallery ${i}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
