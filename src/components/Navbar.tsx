'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Youtube } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'My Story', href: '#story' },
  { name: 'Projects', href: '#projects' },
  { name: 'Videos', href: '#videos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`container mx-auto px-6 ${isScrolled ? 'max-w-5xl' : 'max-w-7xl'}`}>
        <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-black/40' : 'bg-transparent border-transparent'}`}>
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            CB<span className="text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/ChristianBarillas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.youtube.com/@christianbarillas664" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
              <Youtube size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden"
          >
            <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-200 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                 <a href="https://github.com/ChristianBarillas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.youtube.com/@christianbarillas664" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
