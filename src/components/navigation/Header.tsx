import Link from "next/link";
import { FiShare2, FiMenu, FiCpu, FiLayers, FiUser, FiActivity } from 'react-icons/fi';

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  const navItems = [
    { name: "Projets", href: "/work", icon: <FiLayers size={14} /> },
    { name: "Expertise", href: "/expertise", icon: <FiActivity size={14} /> },
    { name: "À Propos", href: "/about", icon: <FiUser size={14} /> },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 flex items-center justify-between shrink-0">
      {/* --- LOGO IDENTITY --- */}
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-purple-custom/50 group-hover:bg-purple-custom/5 transition-all duration-500">
          <span className="text-xs font-black group-hover:scale-110 transition-transform">M.</span>
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-xs font-black tracking-widest uppercase">Mounir</span>
          <span className="text-[7px] text-white/30 font-bold uppercase tracking-widest group-hover:text-purple-custom/50 transition-colors">Industry</span>
        </div>
      </Link>

      {/* --- NAVIGATION NAVIGATOR --- */}
      <div className="flex items-center gap-4 md:gap-10">
        <nav className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="group flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
            >
              <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-white/20 group-hover:text-purple-custom group-hover:border-purple-custom/30 group-hover:bg-purple-custom/5 transition-all">
                {item.icon}
              </span>
              <span className="hidden lg:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-4 border-l border-white/10 pl-4 md:pl-8">
          <button className="hidden sm:block text-white/20 hover:text-white transition-colors">
            <FiShare2 size={18} />
          </button>
          
          <button 
            onClick={onOpenMenu}
            className="p-2.5 md:hidden text-white/60 bg-white/5 rounded-xl border border-white/10 hover:border-purple-custom/50 transition-all"
            aria-label="Ouvrir le menu"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}