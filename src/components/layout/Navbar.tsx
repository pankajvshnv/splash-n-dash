import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Services', 'About', 'Gallery', 'Testimonials'];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className={`text-2xl font-display font-bold tracking-tighter flex items-center gap-3 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
            <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-md border-2 border-brand-green/20 overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NXFeK9tjT5x-42nB1rQMxTAxwrG61st-Cw&s" alt="Splash N Dash Logo" className="w-full h-full object-contain" />
            </div>
            <span className="hidden sm:inline">SPLASH <span className="text-brand-blue">N</span> DASH</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className={`text-sm font-medium ${scrolled ? 'text-gray-600 hover:text-brand-blue' : 'text-white/90 hover:text-white'} transition-colors`}>
                {link}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <button className={`${scrolled ? 'bg-brand-blue text-white' : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-brand-dark'} px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.2)]`}>
              Book Appointment
            </button>
          </div>

          <button className={`md:hidden ${scrolled ? 'text-brand-dark' : 'text-white'}`} onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button className="absolute top-6 right-6 text-brand-dark" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-medium text-brand-dark hover:text-brand-blue transition-colors"
                >
                  {link}
                </a>
              ))}
              <button className="mt-8 bg-brand-blue text-white px-8 py-3 rounded-full text-lg font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                Book Appointment
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
