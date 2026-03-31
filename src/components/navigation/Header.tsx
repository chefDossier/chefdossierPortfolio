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
    { name: "Projets", href: "/projects", icon: <FiLayers size={18} /> },
    { name: "Expertise", href: "/expertise", icon: <FiActivity size={18} /> },
    { name: "À Propos", href: "/about", icon: <FiUser size={18} /> },
  ];

  return (
    <>
      {/* --- HEADER DESKTOP & TOP BAR MOBILE --- */}
      <header className="w-full max-w-7xl mx-auto py-4 md:pt-12 flex items-center justify-between shrink-0 relative z-[70]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-purple-custom/50 transition-all duration-500 text-white">
            <span className="text-xs font-black">M.</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-widest uppercase text-white">Mounir</span>
            <span className="text-[7px] text-white/30 font-bold uppercase tracking-widest group-hover:text-purple-custom transition-colors">Industrie</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 mr-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`group flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${pathname === item.href ? 'text-white' : 'text-white/40'}`}
              >
                <span className={`p-2 rounded-lg border transition-all ${pathname === item.href ? 'border-purple-custom/50 bg-purple-custom/10 text-purple-custom' : 'border-white/5 bg-white/[0.02] text-white/20 group-hover:text-white'}`}>
                  {item.icon}
                </span>
                <span className="hidden lg:block">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <button className="text-white/20 hover:text-white transition-colors">
            <FiShare2 size={18} />
          </button>
          
          <button 
            onClick={onOpenMenu}
            className="p-2 md:hidden text-purple-custom bg-purple-custom/10 rounded-xl border border-purple-custom/20 active:scale-95 transition-transform"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR COLLÉE GAUCHE --- */}
      <nav className="md:hidden fixed left-0 top-1/2 -translate-y-1/2 w-14 py-8 flex flex-col items-center gap-6 bg-black/60 backdrop-blur-3xl border-y border-r border-white/10 rounded-r-2xl z-[9999] shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
        <Link 
          href="/" 
          className={`p-3 transition-all duration-300 ${pathname === '/' ? 'text-purple-custom scale-110' : 'text-white/20'}`}
        >
          <FiHome size={20} />
          {pathname === '/' && (
            <div className="absolute left-0 w-1 h-6 bg-purple-custom rounded-r-full shadow-[0_0_10px_#a855f7]" />
          )}
        </Link>

        <div className="w-6 h-[1px] bg-white/5" />

        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`relative p-3 transition-all duration-300 ${pathname === item.href ? 'text-purple-custom scale-110' : 'text-white/20 hover:text-white'}`}
          >
            {item.icon}
            {pathname === item.href && (
              <div className="absolute left-0 w-1 h-6 bg-purple-custom rounded-r-full shadow-[0_0_10px_#a855f7]" />
            )}
          </Link>
        ))}
      </nav>
    </>
  );
}