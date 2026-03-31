import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Assure-toi d'avoir créé ce fichier

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mounir | Software Engineer & Data Scientist",
  description: "Portfolio de Mounir, Ingénieur Logiciel et Master en IA",
};

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
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        
        {/* Le 'main' prend le reste de la place */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Tu pourras ajouter un Footer ici plus tard */}
      </body>
    </html>
  );
}