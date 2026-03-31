import Image from "next/image";
import Link from "next/link";
import { FiShare2, FiArrowRight, FiGithub, FiLinkedin, FiInstagram, FiMail, FiMenu } from 'react-icons/fi';

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
    <div className="relative h-screen w-full flex flex-col overflow-hidden bg-background text-foreground">
      
      {/* Background Section - Rendu net ici */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/clock.jpg" 
          alt="Background"
          fill
          className="object-cover" // Remplacement de bg-immersive pour garantir la netteté
          priority
          quality={100} // Force la qualité maximale
        />
        {/* Overlay sombre uniquement, sans flou */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* SIDEBAR */}
      <aside className="fixed right-0 top-0 h-full z-50 hidden md:flex flex-col items-center justify-between py-12 px-6 glass-panel w-[80px] border-y-0 border-r-0">
        <div className="flex flex-col items-center gap-6">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <span className="vertical-text text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
              Mounir System
            </span>
        </div>

        <nav className="flex flex-col gap-8 items-center text-white/30">
          <Link href="#" className="icon-industry hover:text-white"><FiGithub size={18} /></Link>
          <Link href="#" className="icon-industry hover:text-white"><FiLinkedin size={18} /></Link>
          <Link href="#" className="icon-industry hover:text-white"><FiInstagram size={18} /></Link>
          <div className="w-6 h-[1px] bg-white/10"></div>
          <Link href="mailto:contact@mounir.com" className="icon-industry hover:text-indigo-custom"><FiMail size={18} /></Link>
        </nav>

        <div className="flex flex-col items-center gap-4">
          <p className="vertical-text text-white/10 text-[9px] font-black uppercase tracking-[0.4em]">v2.6</p>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-custom shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse"></div>
        </div>
      </aside>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex flex-col h-full w-full md:pr-[80px]">
        
        <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-brand/50 transition-all">
              <span className="text-xs font-black">M.</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-black tracking-widest uppercase">Mounir</span>
              <span className="text-[7px] text-white/30 font-bold uppercase tracking-widest">Industry</span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden sm:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
              <Link href="/" className="text-white border-b border-white/20 pb-1">Index</Link>
              <Link href="/work" className="hover:text-white transition-colors">Projets</Link>
            </nav>
            <button className="p-2 md:hidden text-white/60"><FiMenu size={22} /></button>
            <button className="hidden sm:block text-white/40 hover:text-white transition-colors"><FiShare2 size={18} /></button>
          </div>
        </header>

        <main className="flex-1 w-full overflow-y-auto custom-scroll no-scrollbar">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12 px-6 md:px-20 py-10">
            {cards.map((card) => (
              <article 
                key={card.id}
                className={`relative overflow-hidden glass-panel ${card.border} w-[85vw] sm:w-[350px] md:w-[420px] shrink-0 p-8 md:p-14 rounded-[3rem] md:rounded-[4rem] group flex flex-col justify-between h-[450px] md:h-[550px] hover:-translate-y-3 shadow-2xl shadow-black/50 transition-all duration-500`}
              >
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

            <div className="relative overflow-hidden border border-white/10 bg-white/[0.03] w-[75vw] sm:w-[300px] shrink-0 p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] flex flex-col justify-center items-center text-center gap-10 h-[450px] md:h-[550px]">
              <div className="space-y-4">
                <p className="text-brand text-[10px] uppercase font-black tracking-[0.5em]">Status: Open</p>
                <h3 className="text-white text-4xl font-black tracking-tighter uppercase leading-none">Let's<br/>Talk</h3>
              </div>
              <Link 
                href="mailto:contact@mounir.com"
                className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-brand hover:text-white transition-all shadow-xl shadow-black/40"
              >
                Message
              </Link>
            </div>
          </div>
        </main>

        <footer className="w-full py-6 md:py-10 px-8 md:px-16 flex justify-between items-center shrink-0 border-t border-white/[0.03]">
          <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.6em]">
            © 2026 Mounir Industry
          </p>
          <div className="flex items-center gap-3">
             <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">System Online</span>
             <div className="w-2 h-2 rounded-full bg-emerald-custom shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}