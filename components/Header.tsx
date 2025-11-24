import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f111a]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-yellow-400 px-3 py-1 -rotate-2">
            <span className="text-slate-950 font-black text-xl tracking-tighter uppercase">AI Designer</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-slate-300 hover:text-yellow-400 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button onClick={() => window.location.href='#contact'}>Hire Me</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-100 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f111a] border-t border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
           {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-slate-300 text-lg hover:text-yellow-400 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full" onClick={() => {
            window.location.href='#contact';
            setIsMobileMenuOpen(false);
          }}>
            Hire Me
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;