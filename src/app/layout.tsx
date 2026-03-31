"use client";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden bg-background text-foreground">
        {/* HERO BACKGROUND : On le passe en fixed pour qu'il soit totalement indépendant du flux */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <HeroBackground />
        </div>

        <div className="relative h-screen w-full flex flex-col overflow-hidden">
          
          {/* SIDEBAR (Socials) */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />

          {/* LAYOUT PRINCIPAL */}
          {/* On retire md:pr-[80px] d'ici si ta sidebar est en fixed. 
              On s'assure que ce conteneur est une colonne Flex qui occupe 100% de la hauteur.
          */}
          <div className="relative z-10 flex flex-col h-full w-full md:pr-[80px]">
            
            {/* HEADER : On ajoute 'shrink-0' pour GARANTIR qu'il ne se fera jamais écraser ou pousser */}
            <Header onOpenMenu={() => setIsSidebarOpen(true)} />
            
            {/* MAIN : C'est ici que le scroll doit vivre exclusivement */}
            <main className="flex-1 w-full overflow-y-auto custom-scroll no-scrollbar flex flex-col">
              
              {/* Le contenu de la page */}
              <div className="flex-1">
                {children}
              </div>

              {/* FOOTER : On le déplace à l'INTÉRIEUR du main. 
                  S'il est à l'extérieur, il pousse le header vers le haut sur les petits écrans. 
                  À l'intérieur, il suit simplement le contenu. */}
              <footer className="w-full py-6 md:py-10 px-8 md:px-16 flex justify-between items-center shrink-0 border-t border-white/[0.03] backdrop-blur-sm mt-auto">
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

            </main>
          </div>
        </div>
      </body>
    </html>
  );
}