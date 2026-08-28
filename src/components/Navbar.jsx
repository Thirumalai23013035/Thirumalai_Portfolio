import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Process', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10'
          : isScrolled 
            ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight flex items-center gap-1">
            THIRUMALAI<span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden lg:flex space-x-7">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/70 hover:text-white font-semibold text-xs tracking-wider uppercase relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-[#ff2a2a] text-white font-bold text-xs uppercase tracking-wider hover:bg-red-600 shadow-[0_0_15px_rgba(255,42,42,0.4)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen py-6 opacity-100 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white font-bold text-base border-b border-white/10 pb-3 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs text-[#ff2a2a]">→</span>
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-extrabold hover:bg-red-600 transition-colors w-full text-center shadow-lg text-sm"
             >
               Get In Touch
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

