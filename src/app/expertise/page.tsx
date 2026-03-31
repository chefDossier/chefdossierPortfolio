import { 
  FiCpu, FiCode, FiZap, FiBarChart2, FiShield, FiGlobe, 
  FiArrowRight, FiCheckCircle 
} from 'react-icons/fi';

export default function ExpertisePage() {
  const expertises = [
    {
      id: "01",
      title: "Software Engineering",
      description: "Architecture de systèmes robustes et scalables. Focus sur la performance, la maintenabilité et l'expérience utilisateur fluide.",
      tags: ["Next.js", "Django", "PostgreSQL", "API REST"],
      color: "from-purple-custom",
      icon: <FiCode size={32} />
    },
    {
      id: "02",
      title: "Data Science & IA",
      description: "Transformation de données complexes en insights actionnables. Création de modèles prédictifs haute précision.",
      tags: ["TensorFlow", "Scikit-learn", "Pandas", "NLP"],
      color: "from-indigo-custom",
      icon: <FiBarChart2 size={32} />
    },
    {
      id: "03",
      title: "Green Software",
      description: "Optimisation de l'empreinte carbone de vos solutions numériques via l'audit de code et les pratiques GreenOps.",
      tags: ["Energy Efficiency", "Code Audit", "Sustainable Tech"],
      color: "from-emerald-400",
      icon: <FiZap size={32} />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
      
      {/* --- SECTION HERO --- */}
      <section className="space-y-6 max-w-3xl">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-purple-custom">
          Services & Savoir-faire
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-none">
          L'Ingénierie <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-custom via-indigo-custom to-emerald-400 font-italic">
            sans compromis.
          </span>
        </h1>
        <p className="text-white/40 text-lg md:text-xl italic border-l border-white/10 pl-6">
          "Concevoir des solutions qui ne se contentent pas de fonctionner, mais qui redéfinissent les standards de performance et de durabilité."
        </p>
      </section>

      {/* --- GRILLE D'EXPERTISE --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertises.map((item) => (
          <div key={item.id} className="group relative p-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] hover:border-white/10 transition-all duration-500 overflow-hidden">
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity`}></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-start">
                <div className={`p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500`}>
                  {item.icon}
                </div>
                <span className="text-xs font-black text-white/10">{item.id}</span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- WORKFLOW / MÉTHODOLOGIE --- */}
      <section className="p-12 md:p-20 bg-black/40 backdrop-blur-xl border border-white/5 rounded-[4rem] relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-black tracking-tighter">Mon Processus.</h2>
            <div className="space-y-6">
              {[
                { t: "Analyse Métier", d: "Immersion dans vos problématiques pour définir la solution optimale." },
                { t: "Conception Agile", d: "Architecture modulaire et prototypage rapide pour valider les concepts." },
                { t: "Qualité & Sécurité", d: "Code propre, tests automatisés et optimisation des ressources." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-purple-custom/50 flex items-center justify-center text-[10px] font-bold text-purple-custom">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-1">{step.t}</h4>
                    <p className="text-xs text-white/40">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-custom/10 to-transparent flex items-center justify-center">
             <FiCpu size={80} className="text-white/5 animate-pulse" />
             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="text-center py-20">
        <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-purple-custom via-indigo-custom to-emerald-400">
          <div className="bg-[#0a0a0a] px-12 py-10 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Prêt à passer à l'étape supérieure ?</h3>
            <button className="flex items-center gap-4 mx-auto text-[10px] font-black uppercase tracking-[0.4em] bg-white text-black px-8 py-4 rounded-xl hover:bg-purple-custom hover:text-white transition-all">
              Démarrer un projet <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}