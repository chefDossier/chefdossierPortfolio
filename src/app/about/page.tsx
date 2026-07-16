import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCpu, FiCode, FiZap, FiDownload } from 'react-icons/fi';

export default function AboutPage() {
  const skills = [
    { 
      id: "01",
      category: "Architecte Software", 
      items: ["Next.js & React", "Django Ecosystem", "API Design", "PostgreSQL"], 
      icon: <FiCode size={80} />,
    },
    { 
      id: "02",
      category: "IA & Intelligence", 
      items: ["Deep Learning Models", "Predictive Analytics", "Fraud Detection", "Computer Vision"], 
      icon: <FiCpu size={80} />,
    },
    { 
      id: "03",
      category: "Green Engineering", 
      items: ["Optimisation Code-Level", "GreenOps Auditing", "Sustainability Metrics", "Low-Carbon Arch"], 
      icon: <FiZap size={80} />,
    },
  ];

  return (
    <div className="relative bg-[#000000] text-white min-h-screen font-sans selection:bg-[#FFD700]/20">
      
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#FFD700] flex items-center justify-center rotate-45">
              <div className="w-8 h-8 border-t-2 border-l-2 border-black rotate-[-45deg]"></div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight">À Propos</h1>
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tighter text-white/90">
            L'Équilibre <span className="text-[#FFD700] italic font-serif">Technique.</span>
          </h2>
        </div>
        <p className="text-white/40 text-sm font-light tracking-[0.2em] uppercase mt-12">
          Engineering the future
        </p>
      </header>

      {/* HERO SECTION */}
      <section className="py-24 border-t border-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-5xl font-bold tracking-tighter">Mission.</h2>
            <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#FFD700] pl-6 font-light max-w-lg italic">
              "Ma mission est de prouver que l'intelligence artificielle la plus puissante peut aussi être la plus sobre."
            </p>
            <button className="flex items-center gap-3 bg-[#FFD700] text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all">
              <FiDownload size={14} /> Télécharger CV
            </button>
          </div>
          <div className="lg:col-span-5 aspect-square border border-[#FFD700]/20 flex items-center justify-center bg-[#FFD700]/5 rotate-3">
             <div className="relative w-full h-full p-4">
                <Image src="/me.jpeg" alt="Mounir" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
          </div>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="py-24 border-t border-[#FFD700]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="p-10 border border-[#FFD700]/10 hover:border-[#FFD700]/50 transition-colors space-y-8">
              <div className="text-[#FFD700]/80">{skill.icon}</div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD700]">{skill.id}. {skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-white/50">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 border-t border-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {[
            { year: "2026 — PRÉSENT", title: "Mankis LLC & Master IA", desc: "Software Engineer Intern. Focalisé sur la détection de fraudes et l'audit GreenOps." },
            { year: "2024 — 2025", title: "Estuaire Emploi", desc: "Développement de solutions full-stack et optimisation de processus de données." },
            { year: "2022 — 2024", title: "BTS & Licence Pro", desc: "Spécialisation en Génie Logiciel (ISG & JFN). Architecture distribuée." }
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#FFD700]/10 pt-12">
              <div className="md:col-span-3 text-[10px] font-bold text-[#FFD700] tracking-[0.2em] uppercase">{item.year}</div>
              <div className="md:col-span-9 space-y-2">
                <h4 className="text-2xl font-light text-white">{item.title}</h4>
                <p className="text-white/50 text-sm font-light max-w-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="py-40 text-center border-t border-[#FFD700]/10">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white mb-12">
              Construisons ensemble une<br/>
              <span className="italic text-[#FFD700] font-serif">ingénierie responsable.</span>
            </h2>
            <Link href="mailto:mounirmohamed22@gmail.com" 
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] py-6 px-12 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300">
              Démarrer un projet <FiArrowRight size={16} />
            </Link>
         </div>
      </div>
    </div>
  );
}