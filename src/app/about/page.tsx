import Link from "next/link";
import { FiArrowRight, FiCpu, FiCode, FiZap, FiDownload } from 'react-icons/fi';

export default function AboutPage() {
  const skills = [
    { 
      category: "Architecte Software", 
      items: ["Next.js & React", "Django Ecosystem", "API Design", "PostgreSQL"], 
      icon: <FiCode />,
      color: "group-hover:text-purple-custom"
    },
    { 
      category: "IA & Intelligence", 
      items: ["Deep Learning Models", "Predictive Analytics", "Fraud Detection", "Computer Vision"], 
      icon: <FiCpu />,
      color: "group-hover:text-indigo-custom"
    },
    { 
      category: "Green Engineering", 
      items: ["Optimisation Code-Level", "GreenOps Auditing", "Sustainability Metrics", "Low-Carbon Arch"], 
      icon: <FiZap />,
      color: "group-hover:text-emerald-custom"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-28 space-y-40">
      
      {/* SECTION 1: HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-custom/20 bg-purple-custom/5">
              <p className="text-purple-custom font-black tracking-[0.3em] uppercase text-[9px]">
                Engineering the future
              </p>
            </div>
            <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter leading-[0.8] mb-4">
              L'Équilibre<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-custom via-indigo-custom to-emerald-custom">Technique.</span>
            </h1>
          </div>
          
          <p className="text-white/60 leading-relaxed max-w-xl text-lg font-medium italic border-l-2 border-white/10 pl-6">
            "Ma mission est de prouver que l'intelligence artificielle la plus puissante peut aussi être la plus sobre."
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <button className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-purple-custom hover:text-white transition-all duration-500 shadow-2xl shadow-purple-custom/20">
              <FiDownload size={18} className="group-hover:-translate-y-1 transition-transform" /> 
              Télécharger CV
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-10 bg-indigo-custom/20 blur-[120px] rounded-full opacity-30 animate-pulse"></div>
          <div className="relative aspect-[4/5] glass-panel border-white/10 rounded-[4rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700">
             <div className="w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 flex items-center justify-center">
                <span className="text-white/5 text-[15rem] font-serif italic select-none">M</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left">
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[10px]">Mounir</p>
                    <p className="text-white/30 uppercase tracking-[0.3em] text-[8px]">Industry Standard ©2026</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERTISE */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map((skill, i) => (
          <div key={i} className="group relative p-12 glass-panel border-white/5 rounded-[3.5rem] hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[400px]">
            <div className={`text-3xl text-white/20 ${skill.color} transition-colors duration-500`}>
              {skill.icon}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-white font-black uppercase tracking-widest text-xs">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-white/40 text-[11px] font-bold flex items-center gap-3 group-hover:text-white/70 transition-colors">
                    <span className="w-1.5 h-[1px] bg-white/20 group-hover:w-4 group-hover:bg-purple-custom transition-all"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <span className="absolute top-10 right-10 text-white/[0.02] font-black text-6xl group-hover:text-white/[0.05] transition-colors uppercase select-none">
              0{i+1}
            </span>
          </div>
        ))}
      </section>

      {/* SECTION 3: TIMELINE */}
      <section className="relative py-20">
        <div className="flex flex-col gap-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            <div className="md:col-span-3 text-purple-custom font-black tracking-widest text-xs pt-2">2026 — PRÉSENT</div>
            <div className="md:col-span-9 space-y-4">
              <h4 className="text-4xl font-serif font-black text-white group-hover:italic transition-all">Mankis LLC & Master IA</h4>
              <p className="text-white/50 text-md leading-relaxed max-w-2xl">
                Immersion technique en tant que Software Engineer Intern. Développement d'algorithmes de détection de fraudes et architecture du <span className="text-white border-b border-purple-custom/50">GreenOps Monitor</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            <div className="md:col-span-3 text-indigo-custom font-black tracking-widest text-xs pt-2">2024 — 2025</div>
            <div className="md:col-span-9 space-y-4">
              <h4 className="text-4xl font-serif font-black text-white group-hover:italic transition-all">Estuaire Emploi</h4>
              <p className="text-white/50 text-md leading-relaxed max-w-2xl">
                Stage académique et professionnel centré sur le développement de solutions full-stack et l'optimisation des processus de gestion de données.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:col-span-12 gap-8 items-start group">
            <div className="md:col-span-3 text-white/20 font-black tracking-widest text-xs pt-2">2022 — 2024</div>
            <div className="md:col-span-9 space-y-4">
              <h4 className="text-4xl font-serif font-black text-white group-hover:italic transition-all">BTS & Licence Professionnelle</h4>
              <p className="text-white/50 text-md leading-relaxed max-w-2xl">
                Spécialisation en Génie Logiciel (ISG & JFN). Acquisition des fondamentaux en structures de données et gestion de bases de données distribuées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION - New Cinematic Version */}
      <section className="pb-32 px-4">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[4rem] border border-white/10 shadow-2xl group flex flex-col md:flex-row items-center p-12 md:p-24 gap-12">
          
          {/* Background Layer with Texture & Cinematic Gradient */}
          <div className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
            <img 
              src="/clock.jpg" 
              alt="Texture Background" 
              className="w-full h-full object-cover grayscale opacity-20 transition-all group-hover:grayscale-0 group-hover:opacity-30"
            />
            {/* Cinematic Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black via-black/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex-1 space-y-8 text-left">
            <div className="space-y-4">
                <span className="text-white/20 font-black uppercase tracking-[0.5em] text-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">Ready for impact</span>
                <h2 className="text-4xl md:text-6xl font-serif font-black leading-[1.1] tracking-tighter text-white">
                  Construisons ensemble une<br />
                  <span className="text-white/30 italic group-hover:text-white transition-colors duration-700">ingénierie responsable.</span>
                </h2>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="relative z-10 shrink-0 md:-translate-x-8 group-hover:translate-x-0 transition-transform duration-700">
            <Link 
              href="mailto:mounirmohamed22@gmail.com" 
              className="relative inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] py-6 px-12 rounded-2xl bg-white text-black hover:bg-[#4a3728] hover:text-white transition-all duration-500 overflow-hidden shadow-2xl active:scale-95 group/btn"
            >
              <span className="relative z-10">Démarrer un projet</span>
              <FiArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-2 transition-transform text-[#4a3728] group-hover/btn:text-white" />
              
              {/* Subtle visual accent on button */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#4a3728]/10 blur-md rounded-full"></div>
            </Link>
          </div>

          {/* Clean Cinematic Fade-out */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]"></div>
        </div>
      </section>

    </div>
  );
}