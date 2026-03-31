"use client"; // Obligatoire car on utilise du State
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/navigation/Sidebar";
import Header from "@/components/navigation/Header";
import HeroBackground from "@/components/ui/HeroBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 1. Création de l'état pour la navigation mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden bg-background text-foreground">
        <div className="relative h-screen w-full flex flex-col">
          
          {/* Couche de fond */}
          <HeroBackground />

          {/* 2. On passe l'état et la fonction de fermeture à la Sidebar */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />

          {/* Layout Principal */}
          <div className="relative z-10 flex flex-col h-full w-full md:pr-[80px]">
            
            {/* 3. On passe la fonction d'ouverture au Header */}
            <Header onOpenMenu={() => setIsSidebarOpen(true)} />
            
            <main className="flex-1 w-full overflow-y-auto custom-scroll no-scrollbar">
              {children}
            </main>

            {/* Footer Global */}
            <footer className="w-full py-6 md:py-10 px-8 md:px-16 flex justify-between items-center shrink-0 border-t border-white/[0.03] backdrop-blur-sm">
              <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.6em]">
                © 2026 Mounir Industry
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">
                  System Online
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-custom shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}