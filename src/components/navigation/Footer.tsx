import Link from "next/link";
import Image from "next/image"; // N'oublie pas d'importer Image
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMessageCircle, FiMail } from 'react-icons/fi';
import { FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { name: "LinkedIn", href: "#", icon: <FiLinkedin size={20} /> },
    { name: "GitHub", href: "#", icon: <FiGithub size={20} /> },
    { name: "Instagram", href: "#", icon: <FiInstagram size={20} /> },
    { name: "Twitter", href: "#", icon: <FiTwitter size={20} /> },
    { name: "WhatsApp", href: "#", icon: <FiMessageCircle size={20} /> },
    { name: "Facebook", href: "#", icon: <FaFacebook size={20} /> },
    { name: "TikTok", href: "#", icon: <FaTiktok size={20} /> },
  ];

  return (
    <footer className="w-full bg-black py-20 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section "Let's Build" */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 pb-20 border-b border-[#1f1f1f] gap-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Let's <br className="hidden md:block"/>Build.
          </h2>
          <Link 
            href="mailto:mounirmohamed22@gmail.com"
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-black font-bold bg-white/80 backdrop-blur-md px-8 py-3 rounded-full hover:bg-white transition-all duration-300"
          >
            Discutons de ton projet <FiMail size={14} />
          </Link>
        </div>

        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Branding avec Image */}
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#333] grayscale hover:grayscale-0 transition-all duration-500">
              {/* Remplace "/ton-image.jpg" par le chemin réel de ton image dans le dossier public */}
              <Image 
                src="/me.jpg" 
                alt="Mounir" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-black text-lg uppercase tracking-[0.2em]">Mounir</span>
              <p className="text-[#444] text-[10px] uppercase font-bold tracking-[0.3em]">Software Engineering</p>
            </div>
          </div>

          {/* Socials Grid */}
          <div className="flex flex-wrap gap-8 md:justify-end">
            {socials.map((s) => (
              <Link 
                key={s.name} 
                href={s.href}
                className="text-[#333] hover:text-white transition-colors duration-300"
                aria-label={s.name}
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-20 pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#333] text-[10px] font-bold uppercase tracking-widest">
            © 2026 Mounir Industry. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[#333] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy</span>
            <span className="text-[#333] text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}