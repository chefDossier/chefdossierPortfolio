import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiCode, FiActivity, FiZap } from 'react-icons/fi';

export default function Home() {
  // Les données sont conservées pour maintenir les liens et le contenu original
  const cards = [
    { 
      id: "01", 
      title: "À propos", 
      desc: "Ingénieur logiciel spécialisé en IA et systèmes durables (Green IT).", 
      href: "/about", 
      icon: <FiCode size={24} />,
      tags: ["SOFTWARE", "ENGINEERING"] 
    },
    { 
      id: "02", 
      title: "Projets", 
      desc: "Architecture de solutions, de la prédiction médicale au monitoring énergétique.", 
      href: "/projects", 
      icon: <FiActivity size={24} />,
      tags: ["DATA SCIENCE", "IA"] 
    },
    { 
      id: "03", 
      title: "Expertise", 
      desc: "Full-stack Engineering et modèles prédictifs haute performance.", 
      href: "/expertise", 
      icon: <FiZap size={24} />,
      tags: ["FULL-STACK", "PERFORMANCE"] 
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter">Bienvenue.</h1>
        <p className="text-gray-500 mt-4 max-w-md">Découvrez mon approche de l'ingénierie logicielle et mes projets en cours.</p>
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <article 
            key={card.id}
            className="flex flex-col justify-between p-8 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] hover:border-[#333] transition-all duration-300 group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-[#1a1a1a] rounded-2xl border border-[#262626] text-white">
                  {card.icon}
                </div>
                <span className="text-[10px] font-black uppercase text-[#444] tracking-[0.2em]">0{card.id}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white tracking-tight">{card.title}</h2>
              <p className="text-sm text-[#888] leading-relaxed">{card.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[9px] font-bold text-[#666] tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#1f1f1f]">
              <Link href={card.href} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white hover:text-gray-400 transition-colors">
                Explorer <FiArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}

        {/* Carte Contact */}
        <div className="flex flex-col justify-center items-center p-8 bg-black border border-[#1f1f1f] rounded-[2rem] text-center">
          <h3 className="text-white text-2xl font-black uppercase mb-6">Let's Build.</h3>
          <Link 
            href="mailto:mounirmohamed22@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black text-[11px] font-bold uppercase rounded-full hover:bg-gray-200 transition-colors"
          >
            Contacter <FiExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}