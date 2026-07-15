import Link from "next/link";
import { 
  FiLayers, FiActivity, FiArrowRight, 
  FiStar, FiZap, FiGlobe 
} from 'react-icons/fi';

export default function PortfolioShowcase() {
  return (
    <div className="relative bg-[#000000] text-white min-h-screen font-sans selection:bg-[#00FF66]/20">
      
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#00FF66] flex items-center justify-center rotate-45">
              <div className="w-8 h-8 border-t-2 border-l-2 border-black rotate-[-45deg]"></div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight">Lifedesign</h1>
          </div>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tighter text-white/90">
            Projets <span className="text-[#00FF66]">Sélectionnés.</span>
          </h2>
        </div>
        
        <p className="text-white/40 text-sm font-light tracking-[0.2em] uppercase mt-12">
          Ingénierie logicielle & Architecture de données
        </p>
      </header>

      {/* --- PROJET 1: ADS AURA --- */}
      <section className="py-24 border-t border-[#00FF66]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[#00FF66] font-bold uppercase tracking-[0.3em] text-[10px]">01. Promotion & Marketing</span>
            <h2 className="text-5xl font-bold tracking-tighter">Ads Aura.</h2>
            <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#00FF66] pl-6 font-light max-w-lg">
              Ads Aura est un projet innovant dédié à la promotion de biens et services. Il repose sur un mécanisme de diffusion unique, développé avec une architecture robuste utilisant JavaScript et Python.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-square border border-[#00FF66]/20 flex items-center justify-center bg-[#00FF66]/5">
             <FiLayers size={80} className="text-[#00FF66]" />
          </div>
        </div>
      </section>

      {/* --- PROJET 2: FIEST --- */}
      <section className="py-24 border-t border-[#00FF66]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 aspect-square border border-[#00FF66]/20 flex items-center justify-center bg-[#00FF66]/5">
             <FiStar size={80} className="text-[#00FF66]" />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <span className="text-[#00FF66] font-bold uppercase tracking-[0.3em] text-[10px]">02. Réseautage & Détente</span>
            <h2 className="text-5xl font-bold tracking-tighter">Fiest.</h2>
            <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#00FF66] pl-6 font-light max-w-lg">
              Fiest est une plateforme de réseautage dédiée aux espaces de détente, aux services de prêt-à-emporter et à divers produits de loisirs. Une solution technologique complète propulsée par JavaScript et Python.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROJET 3: TRAVEL BOOKING --- */}
      <section className="py-24 border-t border-[#00FF66]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[#00FF66] font-bold uppercase tracking-[0.3em] text-[10px]">03. Logistique Voyage</span>
            <h2 className="text-5xl font-bold tracking-tighter">Travel Booking.</h2>
            <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#00FF66] pl-6 font-light max-w-lg">
              Une application de réservation de tickets de voyage destinée au grand public. Développée avec Flutter, il s'agit d'un projet ambitieux pensé pour s'inscrire dans le temps et évoluer avec les besoins des usagers.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-square border border-[#00FF66]/20 flex items-center justify-center bg-[#00FF66]/5">
             <FiGlobe size={80} className="text-[#00FF66]" />
          </div>
        </div>
      </section>

      {/* --- SECTION PROJETS FUTURS --- */}
      <section className="py-24 border-t border-[#00FF66]/10 text-center">
        <h3 className="text-2xl font-light text-white/50">L'aventure continue...</h3>
        <p className="mt-6 text-white/30 max-w-2xl mx-auto">
          Ces réalisations ne sont qu'une étape. Je travaille actuellement sur de nombreux autres projets futurs qui repoussent les limites de mes compétences techniques pour répondre à des défis technologiques toujours plus complexes.
        </p>
      </section>

      {/* --- FINAL CTA --- */}
      <footer className="py-40 text-center border-t border-[#00FF66]/10">
         <div className="max-w-2xl mx-auto px-6">
            <p className="mb-12 text-lg text-white/60 leading-relaxed">
              Mon approche est guidée par l'innovation constante et l'excellence technique. Que ce soit à travers l'optimisation des flux de données ou le développement d'interfaces fluides, je transforme des concepts complexes en solutions digitales impactantes. Prêt à bâtir l'avenir ?
            </p>
            <Link href="mailto:mounirmohamed22@gmail.com" 
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] py-6 px-12 border border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66] hover:text-black transition-all duration-300">
              Démarrer une collaboration <FiArrowRight size={16} />
            </Link>
         </div>
      </footer>
    </div>
  );
}