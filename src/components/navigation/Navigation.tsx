"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Projets", href: "/projects" },
    { name: "Expertise", href: "/expertise" },
    { name: "À Propos", href: "/about" },
  ];

  return (
    <>
      {/* HEADER SLIM & NON-INTRUSIF */}
      <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-[60] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-black text-[10px]">M.</div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-black tracking-widest">Mounir</span>
            </div>
          </Link>

          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </header>

      {/* SIDEBAR PLEIN ÉCRAN */}
      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="h-full max-w-7xl mx-auto flex flex-col p-6 md:p-12">
          <div className="flex justify-between items-center w-full mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Menu</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiX size={24} className="text-black" />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsSidebarOpen(false)} 
                className="text-4xl md:text-6xl font-black text-black hover:text-gray-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex gap-6 text-black">
            <Link href="https://github.com"><FiGithub size={20} /></Link>
            <Link href="https://linkedin.com"><FiLinkedin size={20} /></Link>
            <Link href="mailto:mounirmohamed22@gmail.com"><FiMail size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
}