"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShare2, FiMenu, FiLayers, FiUser, FiActivity, FiHome } from 'react-icons/fi';

interface HeaderProps {
  onOpenMenu: () => void;
}

export default function Header({ onOpenMenu }: HeaderProps) {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Projets", href: "/projects", icon: <FiLayers size={16} /> },
    { name: "Expertise", href: "/expertise", icon: <FiActivity size={16} /> },
    { name: "À Propos", href: "/about", icon: <FiUser size={16} /> },
  ];

  return (
    <>
      {/* HEADER : Fond blanc solide, positionné dans le flux, padding équilibré */}
      <header className="sticky top-0 w-full bg-white z-[100] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO - Ajusté pour contraster sur fond blanc */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white transition-all duration-500">
              <span className="text-xs font-black">M.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest uppercase text-black">Mounir</span>
              <span className="text-[7px] text-gray-400 font-bold uppercase tracking-widest">Industrie</span>
            </div>
          </Link>

          {/* NAVIGATION - Espacement uniformisé */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 mr-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                    pathname === item.href ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  <span className={`p-2 rounded-lg transition-all ${
                    pathname === item.href ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="hidden lg:block">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* BOUTONS D'ACTION */}
            <button className="text-gray-400 hover:text-black transition-colors">
              <FiShare2 size={18} />
            </button>
            
            <button 
              onClick={onOpenMenu}
              className="p-2 md:hidden text-black bg-gray-100 rounded-xl active:scale-95 transition-transform"
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* NAVIGATION MOBILE LATÉRALE (Gardée identique pour cohérence) */}
      <nav className="md:hidden fixed left-0 top-1/2 -translate-y-1/2 w-14 py-8 flex flex-col items-center gap-6 bg-black/60 backdrop-blur-3xl border-y border-r border-white/10 rounded-r-2xl z-[9999] shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
        {/* ... (ton code existant pour la nav mobile reste inchangé) ... */}
      </nav>
    </>
  );
}