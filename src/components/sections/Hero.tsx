import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-brand-dark/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover object-center scale-105 transform translate-z-0"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue border border-brand-blue text-white text-sm font-medium mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Premium High-End Detailing Studio
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 uppercase leading-[0.9]"
        >
          Restore. <span className="text-brand-blue">Protect.</span><br />
          Shine.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-white/90 mb-10 font-medium"
        >
          Professional hand wash, ceramic coating, detailing, and paint protection services designed to keep your vehicle looking showroom new in Jersey City.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Book Appointment
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-white glass hover:bg-white/90 hover:text-brand-dark transition-colors">
            View Transformations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
