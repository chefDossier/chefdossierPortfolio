// src/app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      {/* On utilise les classes Tailwind définies dans ton @theme */}
      <body className="h-full bg-red-500 overflow-hidden bg-background text-foreground">
        <div className="relative h-[100dvh] w-full flex flex-col overflow-hidden">
          <Navigation />
          <main className="flex-1 w-full overflow-y-auto custom-scroll flex flex-col">
            <div className="flex-1">{children}</div>
            
            {/* Pied de page */}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}