import Link from "next/link";
import { FiArrowRight, FiCode, FiActivity, FiZap, FiMessageCircle } from 'react-icons/fi';

export default function Home() {
  const cards = [
    { 
      id: "01", 
      title: "À propos", 
      desc: "Ingénieur logiciel spécialisé en IA et systèmes durables (Green IT).", 
      href: "/about", 
      icon: <FiCode size={40} />,
      tags: ["SOFTWARE", "ENGINEERING"] 
    },
    { 
      id: "02", 
      title: "Projets", 
      desc: "Architecture de solutions, de la prédiction médicale au monitoring énergétique.", 
      href: "/projects", 
      icon: <FiActivity size={40} />,
      tags: ["DATA SCIENCE", "IA"] 
    },
    { 
      id: "03", 
      title: "Expertise", 
      desc: "Full-stack Engineering et modèles prédictifs haute performance.", 
      href: "/expertise", 
      icon: <FiZap size={40} />,
      tags: ["FULL-STACK", "PERFORMANCE"] 
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      
      {/* HEADER STRUCTURÉ */}
      {/* Ajout de classes responsives pour gérer l'ordre : md:flex-row conserve l'ordre original sur grand écran */}
      <header className="py-12 text-center flex flex-col-reverse md:flex-row md:items-center md:justify-center md:gap-6">
        
        {/* Conteneur du texte (Titre + Paragraphe) */}
        {/* Ajustement des marges pour mobile */}
        <div className="flex flex-col items-center justify-center gap-6 mt-10 md:mt-0">
          <div className="flex items-center gap-4">
            <h1 className="text-6xl font-black tracking-tight text-white">Bienvenue.</h1>
          </div>
          <p className="text-[#888] text-lg md:text-xl font-light">
            Découvrez mes projets en cours et mon approche de <br/> 
            <span className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tighter text-white/90">
              l'ingénierie <span className="text-[#0066FF]">logicielle</span>
            </span> 
          </p>
        </div>

        {/* Conteneur de l'icône (le losange) */}
        {/* Ajout de md:mb-8 pour retrouver l'alignement original avec le titre "Bienvenue." sur desktop */}
        <div className="flex items-center justify-center md:mb-8">
          <div className="w-16 h-16 bg-[#0066FF] flex items-center justify-center rotate-45 shrink-0">
            <div className="w-8 h-8 border-t-2 border-l-2 border-black rotate-[-45deg]"></div>
          </div>
        </div>

      </header>

      {/* GRILLE DE CARTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-[#1f1f1f]">
        {cards.map((card) => (
          <article 
            key={card.id}
            className="flex flex-col justify-between p-8 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] hover:border-[#0066FF]/50 transition-all duration-300 group hover:shadow-[0_0_30px_-10px_rgba(0,102,255,0.3)]"
          >
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <div className="text-[#0066FF]">
                  {card.icon}
                </div>
                <span className="text-[10px] font-black uppercase text-[#444] tracking-[0.2em]">0{card.id}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white tracking-tight">{card.title}</h2>
              <p className="text-sm text-[#888] leading-relaxed">{card.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[9px] font-bold text-[#666] group-hover:text-[#0066FF] group-hover:border-[#0066FF]/30 transition-colors tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#1f1f1f]">
              <Link href={card.href} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-[#0066FF] transition-colors">
                Explorer <FiArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}

        {/* CARTE CONTACT */}
        <article className="flex flex-col justify-center items-center p-8 bg-[#0066FF] rounded-[2rem] text-white text-center gap-4 hover:bg-[#0052cc] transition-colors cursor-pointer min-h-[280px]">
           <FiMessageCircle size={40} />
           <h3 className="font-bold text-2xl">Parlons projet</h3>
           <p className="text-white/70 text-sm">Disponible pour de nouvelles collaborations.</p>
        </article>
      </div>
    </div>
  );
}