import React from 'react';
import Link from 'next/link';
import { FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi'; 
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6'; 

const Header: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: FiLinkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: FiInstagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: FiFacebook, url: '#', color: 'hover:text-blue-700' },
    { name: 'TikTok', icon: FaTiktok, url: '#', color: 'hover:text-black' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: '#', color: 'hover:text-green-500' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-5">
        <div className="flex items-center justify-between">
          
          {/* Logo / Nom */}
          <Link href="/" className="group flex items-center space-x-1">
            <span className="text-2xl font-serif font-semibold tracking-tight text-gray-900">
              Mounir
            </span>
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
          </Link>

          {/* Navigation - Style Épuré */}
          <div className="hidden md:flex items-center gap-10">
            {['À propos', 'Projets'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '')}`} 
                className="relative text-[15px] font-medium text-gray-600 transition-colors duration-300 hover:text-indigo-600 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Icons - Plus visibles & Colorés au survol */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Suivez-moi sur ${link.name}`}
                className={`text-gray-400 ${link.color} transition-all duration-400 ease-out transform hover:scale-125`}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;