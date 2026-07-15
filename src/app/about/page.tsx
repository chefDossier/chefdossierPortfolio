import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCpu, FiCode, FiZap, FiDownload } from 'react-icons/fi';

export default function AboutPage() {
  const skills = [
    { 
      category: "Architecte Software", 
      items: ["Next.js & React", "Django Ecosystem", "API Design", "PostgreSQL"], 
      icon: <FiCode />,
      color: "group-hover:text-white"
    },
    { 
      category: "IA & Intelligence", 
      items: ["Deep Learning Models", "Predictive Analytics", "Fraud Detection", "Computer Vision"], 
      icon: <FiCpu />,
      color: "group-hover:text-white"
    },
    { 
      category: "Green Engineering", 
      items: ["Optimisation Code-Level", "GreenOps Auditing", "Sustainability Metrics", "Low-Carbon Arch"], 
      icon: <FiZap />,
      color: "group-hover:text-white"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 space-y-48">
      
      {/* HERO SECTION - Rééquilibrée */}
      <section className="grid lg:grid-cols-[1.5fr,1fr] gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold border border-white/10 px-4 py-1.5 rounded-full">
              Engineering the future
            </span>
            <h1 className="text-[clamp(3rem,5vw,5rem)] font-light leading-[0.9] tracking-tighter text-white">
              L'Équilibre <br/> 
              <span className="italic text-white/40 font-serif font-light">Technique.</span>
            </h1>
          </div>
          
          <p className="text-white/50 max-w-lg leading-relaxed font-light text-lg">
            "Ma mission est de prouver que l'intelligence artificielle la plus puissante peut aussi être la plus sobre."
          </p>

          <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/90 transition-all">
            <FiDownload size={14} /> Télécharger CV
          </button>
        </div>

        {/* Espace Photo réduit et stylisé */}
        <div className="hidden lg:block lg:justify-self-end">
          <div className="relative w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="/me.jpeg" 
              alt="Mounir"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="group p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-[2rem] flex flex-col justify-between min-h-[350px]">
            <div className={`text-2xl text-white/20 transition-colors duration-500 ${skill.color}`}>
              {skill.icon}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-[11px] text-white/40 font-medium">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* TIMELINE */}
      <section className="space-y-20">
        {[
          { year: "2026 — PRÉSENT", title: "Mankis LLC & Master IA", desc: "Software Engineer Intern. Focalisé sur la détection de fraudes et l'audit GreenOps." },
          { year: "2024 — 2025", title: "Estuaire Emploi", desc: "Développement de solutions full-stack et optimisation de processus de données." },
          { year: "2022 — 2024", title: "BTS & Licence Pro", desc: "Spécialisation en Génie Logiciel (ISG & JFN). Architecture distribuée." }
        ].map((item, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-12">
            <div className="md:col-span-3 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">{item.year}</div>
            <div className="md:col-span-9 space-y-2">
              <h4 className="text-2xl font-light text-white">{item.title}</h4>
              <p className="text-white/40 text-sm font-light max-w-xl">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CALL TO ACTION */}
      <section className="relative p-12 md:p-24 rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white">Construisons ensemble une<br/>
              <span className="italic text-white/40 font-serif">ingénierie responsable.</span>
            </h2>
          </div>
          <Link 
            href="mailto:mounirmohamed22@gmail.com" 
            className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] py-5 px-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Démarrer un projet <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}