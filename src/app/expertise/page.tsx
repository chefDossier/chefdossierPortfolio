import Link from "next/link";
import { 
  FiCpu, FiCode, FiZap, FiBarChart2, FiArrowRight 
} from 'react-icons/fi';

export default function ExpertisePage() {
  const expertises = [
    {
      id: "01",
      title: "Software Engineering",
      description: "Architecture de systèmes robustes et scalables. Focus sur la performance, la maintenabilité et l'expérience utilisateur fluide.",
      tags: ["Next.js", "Django", "PostgreSQL", "API REST"],
    },
    {
      id: "02",
      title: "Data Science & IA",
      description: "Transformation de données complexes en insights actionnables. Création de modèles prédictifs haute précision.",
      tags: ["TensorFlow", "Scikit-learn", "Pandas", "NLP"],
    },
    {
      id: "03",
      title: "Green Software",
      description: "Optimisation de l'empreinte carbone de vos solutions numériques via l'audit de code et les pratiques GreenOps.",
      tags: ["Energy Efficiency", "Code Audit", "Sustainable Tech"],
    }
  ];

  return (
    <div className="relative bg-[#000000] text-white min-h-screen font-sans selection:bg-[#FF0033]/20">
      
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#FF0033] flex items-center justify-center rotate-45">
              <div className="w-8 h-8 border-t-2 border-l-2 border-black rotate-[-45deg]"></div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight">Expertise</h1>
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tighter text-white/90">
            Ingénierie <span className="text-[#FF0033]">sans compromis.</span>
          </h2>
        </div>
        <p className="text-white/40 text-sm font-light tracking-[0.2em] uppercase mt-12">
          Concevoir des solutions qui redéfinissent les standards
        </p>
      </header>

      {/* GRILLE D'EXPERTISE */}
      {expertises.map((item, index) => (
        <section key={item.id} className={`py-24 border-t border-[#FF0033]/10 ${index % 2 !== 0 ? 'bg-[#FF0033]/[0.02]' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className={`lg:col-span-7 space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <span className="text-[#FF0033] font-bold uppercase tracking-[0.3em] text-[10px]">{item.id}. {item.title}</span>
              <h2 className="text-5xl font-bold tracking-tighter">{item.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#FF0033] pl-6 font-light max-w-lg">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-3 pl-6">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-[#FF0033]/20 text-[#FF0033]/60 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={`lg:col-span-5 aspect-square border border-[#FF0033]/20 flex items-center justify-center bg-[#FF0033]/5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
               {item.id === "01" && <FiCode size={80} className="text-[#FF0033]" />}
               {item.id === "02" && <FiBarChart2 size={80} className="text-[#FF0033]" />}
               {item.id === "03" && <FiZap size={80} className="text-[#FF0033]" />}
            </div>
          </div>
        </section>
      ))}

      {/* PROCESSUS */}
      <section className="py-24 border-t border-[#FF0033]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-16">Mon Processus</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Analyse Métier", "Conception Agile", "Qualité & Sécurité"].map((step, i) => (
                    <div key={i} className="border border-[#FF0033]/10 p-8 hover:border-[#FF0033]/50 transition-colors">
                        <div className="text-[#FF0033] mb-4 font-bold text-xl">0{i+1}</div>
                        <h4 className="font-bold uppercase tracking-widest text-sm">{step}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="py-40 text-center border-t border-[#FF0033]/10">
         <div className="max-w-2xl mx-auto px-6">
            <p className="mb-12 text-lg text-white/60 leading-relaxed">
              Prêt à transformer vos défis technologiques en solutions impactantes ?
            </p>
            <Link href="mailto:mounirmohamed22@gmail.com" 
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] py-6 px-12 border border-[#FF0033] text-[#FF0033] hover:bg-[#FF0033] hover:text-black transition-all duration-300">
              Démarrer une collaboration <FiArrowRight size={16} />
            </Link>
         </div>
      </div>
    </div>
  );
}