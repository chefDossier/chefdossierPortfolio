import Link from "next/link";
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  const cards = [
    {
      id: "01",
      title: "À propos",
      desc: "Ingénieur logiciel passionné par l'IA et le Green IT.",
      href: "/about",
      gradient: "from-purple-custom/20 to-transparent",
      border: "border-purple-custom/30",
      accent: "text-purple-custom"
    },
    {
      id: "02",
      title: "Projets",
      desc: "De la prédiction cardiaque au monitoring énergétique.",
      href: "/projects",
      gradient: "from-indigo-custom/20 to-transparent",
      border: "border-indigo-custom/30",
      accent: "text-indigo-custom"
    },
    {
      id: "03",
      title: "Expertise",
      desc: "Data Science, Full-stack et optimisation de performances.",
      href: "/expertise",
      gradient: "from-emerald-custom/20 to-transparent",
      border: "border-emerald-custom/30",
      accent: "text-emerald-custom"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12 px-6 md:px-20 py-10">
      {cards.map((card) => (
        <article 
          key={card.id}
          className={`relative overflow-hidden glass-panel ${card.border} w-[85vw] sm:w-[350px] md:w-[420px] shrink-0 p-8 md:p-14 rounded-[3rem] md:rounded-[4rem] group flex flex-col justify-between h-[450px] md:h-[550px] hover:-translate-y-3 shadow-2xl shadow-black/50 transition-all duration-500`}
        >
          {/* Ligne d'accentuation haute */}
          <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${card.gradient} opacity-30 group-hover:opacity-100 transition-opacity rounded-t-[3rem] md:rounded-t-[4rem]`}></div>

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-10 md:mb-16">
              <span className={`text-[10px] font-black uppercase tracking-[0.6em] ${card.accent}`}>
                N° {card.id}
              </span>
              <div className={`w-2 h-2 rounded-full ${card.accent.replace('text', 'bg')} shadow-[0_0_15px_currentColor] animate-pulse`}></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-[0.85]">
                {card.title}<span className={card.accent}>.</span>
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-white/40 font-medium max-w-[260px]">
                {card.desc}
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-8">
            <Link 
              href={card.href}
              className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] py-4 px-10 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group/btn"
            >
              Explorer <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform text-indigo-custom" />
            </Link>
          </div>
        </article>
      ))}

      {/* Carte Contact rapide */}
      <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] w-[75vw] sm:w-[300px] shrink-0 p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] flex flex-col justify-center items-center text-center gap-10 h-[450px] md:h-[550px]">
        <div className="space-y-4">
          <p className="text-indigo-custom text-[10px] uppercase font-black tracking-[0.5em]">Status: Open</p>
          <h3 className="text-white text-4xl font-black tracking-tighter uppercase leading-none">Let's<br/>Talk</h3>
        </div>
        <Link 
          href="mailto:mounirmohamed22@gmail.com"
          className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-custom hover:text-white transition-all shadow-xl shadow-black/40"
        >
          Message
        </Link>
      </div>
    </div>
  );
}