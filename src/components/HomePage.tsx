import React from 'react';
import Link from 'next/link';
import { FiShare2, FiMoreHorizontal, FiArrowRight, FiCode, FiUser, FiZap, FiMessageSquare } from 'react-icons/fi';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* BACKGROUND : Flou dynamique lointain */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 space-y-12">
        
        {/* HEADER MINIMALISTE */}
        <header className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black font-serif font-bold text-sm transition-transform group-hover:rotate-12">M</div>
            <span className="text-white/40 text-xs font-black uppercase tracking-[0.3em]">Portfolio v2</span>
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <FiShare2 className="hover:text-white cursor-pointer transition-colors" />
            <FiMoreHorizontal className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </header>

        {/* CARTE 1 : L'IDENTITÉ (L'Impact) */}
        <section className="group relative bg-white p-10 md:p-14 rounded-[3rem] transition-all duration-500 hover:shadow-[0_30px_100px_-20px_rgba(255,255,255,0.1)]">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 mb-6">Introduction</p>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-gray-950 leading-[0.9] tracking-tighter mb-8">
            Concevoir l'exceptionnel<span className="text-indigo-600">.</span>
          </h1>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="h-[1px] w-12 bg-gray-200" />
            <p className="text-sm font-medium italic">Mounir — Software Engineer</p>
          </div>
        </section>

        {/* CARTE 2 : LE MENU SMART (Interaction) */}
        <section className="grid grid-cols-2 gap-4">
          {[
            { name: 'Projets', icon: FiCode, color: 'hover:bg-blue-500', href: '#projets' },
            { name: 'À propos', icon: FiUser, color: 'hover:bg-orange-500', href: '#apropos' },
            { name: 'Stack', icon: FiZap, color: 'hover:bg-yellow-500', href: '#stack' },
            { name: 'Contact', icon: FiMessageSquare, color: 'hover:bg-green-500', href: '#contact' },
          ].map((item) => (
            <Link key={item.name} href={item.href} className={`group relative bg-zinc-900/50 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] transition-all duration-300 ${item.color} hover:text-white`}>
              <item.icon size={24} className="mb-4 text-white/30 group-hover:text-white transition-colors" />
              <span className="block text-xs font-black uppercase tracking-widest text-white/90">{item.name}</span>
              <FiArrowRight className="absolute bottom-8 right-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </section>

        {/* CARTE 3 : LA PREUVE (Style Image de référence) */}
        <section className="relative overflow-hidden bg-indigo-600 p-10 md:p-12 rounded-[3rem] text-white">
          <div className="relative z-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200 mb-6 underline decoration-2 underline-offset-8">Angle #1 : Expertise</h2>
            <p className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-10">
              "Transformer des algorithmes complexes en interfaces intuitives."
            </p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <p className="text-xs font-bold text-indigo-100 mb-2 italic">Exemple :</p>
              <p className="text-sm font-medium leading-relaxed text-white/90">
                Optimisation des performances sur Next.js pour diviser le temps de chargement par deux.
              </p>
            </div>
            
            <button className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl shadow-black/20">
              Voir l'étude de cas <FiArrowRight />
            </button>
          </div>
          
          {/* Décoration abstraite en fond de carte */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </section>

        {/* FOOTER */}
        <footer className="text-center py-10">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2026 Mounir Industry — All Rights Reserved
          </p>
        </footer>

      </div>
    </div>
  );
};

export default HomePage;