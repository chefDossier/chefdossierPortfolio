import Link from "next/link";
import { FiShare2, FiMenu } from 'react-icons/fi';

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-purple-custom/50 transition-all">
          <span className="text-xs font-black">M.</span>
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-xs font-black tracking-widest uppercase">Mounir</span>
          <span className="text-[7px] text-white/30 font-bold uppercase tracking-widest">Industry</span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <nav className="hidden sm:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
          <Link href="/" className="hover:text-white transition-colors">Index</Link>
          <Link href="/work" className="hover:text-white transition-colors">Projets</Link>
        </nav>

        {/* ACTION : On appelle onOpenMenu au clic sur le bouton burger */}
        <button 
          onClick={onOpenMenu}
          className="p-2 md:hidden text-white/60 hover:text-white transition-colors"
          aria-label="Ouvrir le menu"
        >
          <FiMenu size={22} />
        </button>

        <button className="hidden sm:block text-white/40 hover:text-white transition-colors">
          <FiShare2 size={18} />
        </button>
      </div>
    </header>
  );
}