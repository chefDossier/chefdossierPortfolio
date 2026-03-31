import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiX } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay : Floute l'arrière-plan sur mobile quand la sidebar est ouverte */}
      {isOpen && (
        <div 
          onClick={onClose} 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] md:hidden"
        />
      )}

      <aside className={`
        fixed right-0 top-0 h-full z-50 
        flex flex-col items-center justify-between py-12 px-6 glass-panel w-[80px] border-y-0 border-r-0
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
      `}>
        
        {/* Bouton de fermeture (X) visible uniquement sur mobile */}
        <button 
          onClick={onClose}
          className="md:hidden p-2 text-white/40 hover:text-white transition-colors mb-4"
        >
          <FiX size={20} />
        </button>

        <div className="flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <span className="vertical-text text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
            Mounir System
          </span>
        </div>

        <nav className="flex flex-col gap-8 items-center text-white/30">
          <Link href="https://github.com" className="icon-industry hover:text-white transition-all">
            <FiGithub size={18} />
          </Link>
          <Link href="https://linkedin.com" className="icon-industry hover:text-white transition-all">
            <FiLinkedin size={18} />
          </Link>
          <Link href="https://instagram.com" className="icon-industry hover:text-white transition-all">
            <FiInstagram size={18} />
          </Link>
          
          <div className="w-6 h-[1px] bg-white/10"></div>
          
          <Link href="mailto:contact@mounir.com" className="icon-industry hover:text-indigo-custom transition-all">
            <FiMail size={18} />
          </Link>
        </nav>

        <div className="flex flex-col items-center gap-4">
          <p className="vertical-text text-white/10 text-[9px] font-black uppercase tracking-[0.4em]">v2.6</p>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-custom shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse"></div>
        </div>
      </aside>
    </>
  );
}