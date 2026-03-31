import Link from "next/link";
import { 
  FiArrowLeft, FiLayers, FiDatabase, FiActivity, FiArrowRight, 
  FiGlobe, FiCpu, FiCheckCircle, FiStar, FiMap, FiShield, FiZap 
} from 'react-icons/fi';

export default function PortfolioShowcase() {
  return (
    <div className="relative bg-[#0a0a0a]/30 backdrop-blur-3xl text-white min-h-screen font-sans selection:bg-purple-custom/30">
      <header className="max-w-7xl mx-auto px-6 pt-24 pb-32 space-y-8 text-center">
        <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter leading-none">
          Projets <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-custom via-indigo-custom to-emerald-400">Sélectionnés.</span>
        </h1>
        <p className="text-white/40 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
          "De la conception d'architectures publicitaires à la scalabilité des plateformes événementielles."
        </p>
      </header>

      {/* --- PROJET 1: ADS AURA --- */}
      <section className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-purple-custom font-black uppercase tracking-[0.4em] text-[10px]">01. Influence & Marketing</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter">Ads Aura.</h2>
              <p className="text-white/50 text-lg leading-relaxed border-l-2 border-purple-custom/30 pl-6">
                Une plateforme de mise en relation entre marques et influenceurs. L'enjeu technique résidait dans la gestion complexe des campagnes et la synchronisation des données en temps réel.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "Architecture", val: "Next.js & Django" },
                { label: "Data Logic", val: "PostgreSQL" },
                { label: "Feature", val: "Campaign Sync" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/20">{stat.label}</p>
                  <p className="text-xs font-bold text-white/80">{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                <FiCheckCircle /> UI/UX Optimisée
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                <FiCheckCircle /> API REST Flexible
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
             <div className="absolute -inset-10 bg-purple-custom/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative aspect-square glass-panel border-white/10 rounded-[3.5rem] flex items-center justify-center overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <FiLayers size={100} className="text-purple-custom/20 group-hover:text-purple-custom transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black to-transparent">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Brand Connection Platform</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- PROJET 2: FIEST --- */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
             <div className="absolute -inset-10 bg-indigo-custom/10 blur-[100px] rounded-full opacity-50"></div>
             <div className="relative aspect-square glass-panel border-white/5 rounded-[4rem] flex items-center justify-center overflow-hidden -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <FiStar size={100} className="text-indigo-custom/20 group-hover:text-indigo-custom transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black to-transparent">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Lifestyle & Events Hub</p>
                </div>
             </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <span className="text-indigo-custom font-black uppercase tracking-[0.4em] text-[10px]">02. Événementiel & Divertissement</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter">Fiest.</h2>
              <p className="text-white/50 text-lg leading-relaxed border-l-2 border-indigo-custom/30 pl-6">
                Le hub ultime pour la vie nocturne. Connecte restaurants, discothèques, snacks et DJs avec leur clientèle. Développé pour supporter une haute fréquence de requêtes et une géolocalisation précise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 glass-panel border-white/5 rounded-3xl hover:border-indigo-custom/30 transition-all">
                <FiZap className="text-indigo-custom mb-4" />
                <h4 className="text-xs font-black uppercase tracking-widest mb-2">Multi-Tenant</h4>
                <p className="text-[11px] text-white/40 leading-relaxed">Gestion isolée pour chaque établissement (admin dashboard dédié).</p>
              </div>
              <div className="p-8 glass-panel border-white/5 rounded-3xl hover:border-indigo-custom/30 transition-all">
                <FiGlobe className="text-indigo-custom mb-4" />
                <h4 className="text-xs font-black uppercase tracking-widest mb-2">Interaction</h4>
                <p className="text-[11px] text-white/40 leading-relaxed">Système de réservation et de visibilité en temps réel pour les clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJET 3: TICKET VOYAGE --- */}
      <section className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-emerald-400 font-black uppercase tracking-[0.4em] text-[10px]">03. Logistique & Transport</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter">Travel Booking.</h2>
              <p className="text-white/50 text-lg leading-relaxed border-l-2 border-emerald-400/30 pl-6">
                Système robuste de réservation de tickets de voyage. Focus sur l'intégrité des transactions, la gestion des places en temps réel et la génération de billets sécurisés.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400"><FiShield /></div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Sécurité des Paiements</h4>
                  <p className="text-xs text-white/40">Flux de transaction sécurisé avec validation immédiate.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400"><FiMap /></div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Gestion des Trajets</h4>
                  <p className="text-xs text-white/40">Algorithme d'assignation dynamique des places et horaires.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
             <div className="absolute -inset-10 bg-emerald-400/5 blur-[120px] rounded-full"></div>
             <div className="relative aspect-[3/4] glass-panel border-white/10 rounded-[4rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-1000 bg-gradient-to-br from-emerald-400/5 via-transparent to-emerald-400/5 flex items-center justify-center">
                <FiActivity size={120} className="text-emerald-400/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12">
                   <p className="text-2xl font-serif font-bold italic text-white/20 tracking-tighter">Safe & Fast</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <footer className="py-40 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-12">
           <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter">Besoin d'une expertise technique ?</h2>
             <p className="text-white/30 text-lg italic max-w-md mx-auto">"Transformons vos idées en architectures robustes et durables."</p>
           </div>
           
           <Link href="mailto:contact@mounir.com" className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] py-7 px-16 rounded-2xl bg-white text-black hover:bg-[#4a3728] hover:text-white transition-all duration-500 shadow-2xl">
             Démarrer une collaboration <FiArrowRight />
           </Link>
        </div>
      </footer>

    </div>
  );
}