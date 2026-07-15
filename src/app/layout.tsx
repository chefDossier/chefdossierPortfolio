"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation/Navigation"; // Ton nouveau composant fusionné

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
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full overflow-hidden bg-background text-foreground">
        
        {/* Le conteneur principal gère désormais tout le flux */}
        <div className="relative h-[100dvh] w-full flex flex-col overflow-hidden">
          
          <Navigation />

          <div className="relative z-10 flex flex-col h-full w-full">
            
            {/* Le main prend toute la hauteur disponible */}
            <main className="flex-1 w-full overflow-y-auto custom-scroll no-scrollbar flex flex-col">
              
              <div className="flex-1">
                {children}
              </div>

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