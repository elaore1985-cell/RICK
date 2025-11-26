import React from 'react';
import SectionCard from './components/SectionCard';
import HistorianChat from './components/HistorianChat';
import { NAZCA_SECTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-stone-800 pb-20">
      {/* Header / Banner Hero */}
      <header className="relative w-full h-[400px] bg-nazca-dark overflow-hidden flex items-center justify-center border-b-8 border-nazca-gold">
        <div className="absolute inset-0 opacity-40">
           {/* Abstract overlay simulating desert lines */}
           <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#A0522D_20px,#A0522D_22px)]"></div>
        </div>
        <img 
            src="https://substackcdn.com/image/fetch/$s_!cCE3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff547382b-8b3f-4e0b-ac31-1e9ab4f4a352_1920x1080.jpeg" alt="Desierto Nazca" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        
        <div className="relative z-10 text-center px-4 animate-fade-in-down">
          <h1 className="font-serif text-5xl md:text-7xl text-nazca-sand font-bold tracking-widest drop-shadow-lg mb-4 border-b-2 border-nazca-terracotta inline-block pb-2">
            LA MISTERIOSA CULTURA NAZCA
          </h1>
          <p className="font-sans text-nazca-sand/90 text-xl tracking-widest uppercase mt-2">
            (200 a.C. — 600 d.C.)
          </p>
          <div className="mt-6 flex justify-center gap-4">
             <span className="w-3 h-3 bg-nazca-terracotta rounded-full"></span>
             <span className="w-3 h-3 bg-nazca-gold rounded-full"></span>
             <span className="w-3 h-3 bg-nazca-terracotta rounded-full"></span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl font-serif text-nazca-dark italic leading-relaxed">
            "Una civilización que desafió al desierto más árido del mundo, trazando líneas para los dioses y creando cerámica que capturaba los colores de la vida."
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {NAZCA_SECTIONS.map((section) => (
            <SectionCard key={section.id} data={section} />
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="my-16 flex items-center justify-center opacity-50">
          <div className="h-px bg-nazca-clay w-1/3"></div>
          <span className="mx-4 text-3xl text-nazca-clay">☀️</span>
          <div className="h-px bg-nazca-clay w-1/3"></div>
        </div>

        {/* Call to Action Area - Educational purpose */}
        <div className="bg-nazca-dark text-nazca-sand rounded-xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold mb-4 text-nazca-gold">¿Quieres saber más?</h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    La historia de Nazca está llena de misterios aún no resueltos. Las Líneas de Nazca son enormes dibujos hechos en el desierto.
Solo se pueden ver completamente desde lo alto (aviones, drones
o miradores elevados). No se sabe con total certeza, pero las investigaciones más
aceptadas dicen que eran caminos ceremoniales o tenían relación con la religión y el agua (muy importante en
el desierto).
                </p>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 mt-12 border-t-4 border-nazca-terracotta">
        <div className="container mx-auto text-center font-sans text-sm">
          <p>© {new Date().getFullYear()} Proyecto Educativo Nazca.</p>
          <p className="mt-2 text-stone-600">Basado en evidencias arqueológicas. Imágenes referenciales.</p>
        </div>
      </footer>

      {/* Chat Bot */}
      <HistorianChat />
    </div>
  );
};

export default App;