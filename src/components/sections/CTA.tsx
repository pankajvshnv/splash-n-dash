import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative bg-brand-blue overflow-hidden">
      {/* Background Image and Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop" 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply" />
      </div>
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tight"
        >
          Ready To Transform <br/>Your Vehicle?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-xl max-w-2xl mx-auto mb-12 font-medium"
        >
          Book your premium detailing session today and experience the Splash N Dash standard.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <button className="px-10 py-5 bg-white text-brand-blue hover:text-brand-blue-dark rounded-full font-bold text-lg inline-flex items-center gap-2 group transition-all hover:scale-105 shadow-2xl">
            Book Appointment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
            <Phone size={20} /> Call Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
