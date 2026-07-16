"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiGithub, FiLinkedin, FiInstagram, FiX, FiMessageCircle, FiMail } from 'react-icons/fi';
import { FaTiktok, FaFacebook } from "react-icons/fa6";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: "Projets", href: "/projects", color: "text-[#00FF66]" },
    { name: "Expertise", href: "/expertise", color: "text-[#FF0033]" },
    { name: "À Propos", href: "/about", color: "text-[#FFD700]" },
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

      {/* SIDEBAR NOIRE */}
      <div className={`fixed inset-0 z-[100] bg-black transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="h-full max-w-7xl mx-auto flex flex-col p-6 md:p-12">
          <div className="flex justify-between items-center w-full mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Menu</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <FiX size={24} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsSidebarOpen(false)} 
                className={`text-4xl md:text-6xl font-black transition-colors ${item.color} hover:opacity-70`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Socials en blanc/gris pour contraste sur fond noir */}
          <div className="mt-auto flex flex-wrap gap-6 text-white/60">
            <Link href="https://github.com" className="hover:text-white transition-colors"><FiGithub size={20} /></Link>
            <Link href="https://linkedin.com" className="hover:text-white transition-colors"><FiLinkedin size={20} /></Link>
            <Link href="mailto:mounirmohamed22@gmail.com" className="hover:text-white transition-colors"><FiMail size={20} /></Link>
            <Link href="https://www.instagram.com/momounirchefdoss?igsh=YWJldjkyajBzOXFy" className="hover:text-white transition-colors"><FiInstagram size={20} /></Link>
            <Link href="https://x.com/MounirKx" className="hover:text-white transition-colors"><FiX size={20} /></Link>
            <Link href="https://wa.me/237657890993" className="hover:text-white transition-colors"><FiMessageCircle size={20} /></Link>
            <Link href="https://www.facebook.com/mounir.chefdossier?mibextid=ZbWKwL" className="hover:text-white transition-colors"><FaFacebook size={20} /></Link>
            <Link href="https://www.tiktok.com/@lifedesigne?_r=1&_t=ZS-9850e8cKBk0" className="hover:text-white transition-colors"><FaTiktok size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
}