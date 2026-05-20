import { motion } from 'motion/react';
import { Sparkles, Shield, Car, Droplet, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Premium Hand Wash",
    desc: "Meticulous foam wash, scratch-free drying, and wheel cleaning for a flawless daily finish.",
    icon: Droplet,
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Ceramic Coating",
    desc: "Ultimate hydrophobic protection that lasts for years, adding insane gloss and scratch resistance.",
    icon: Shield,
    featured: true,
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Interior Detailing",
    desc: "Deep steam cleaning, leather conditioning, and odor removal to restore the new-car feeling.",
    icon: Car,
    img: "https://splashcarcare.in/wp-content/uploads/2025/11/Car-Interior-Cleaning-in-hyderabad-splash-car-care.webp"
  },
  {
    title: "Paint Correction",
    desc: "Multi-stage machine polishing to permanently remove swirl marks, scratches, and oxidation.",
    icon: Sparkles,
    img: "https://ceramicpro.com/wp-content/uploads/2020/09/Using-An-Orbital-Polisher.jpeg"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-brand-light relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-dark"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-medium text-lg max-w-2xl mx-auto"
          >
            Choose from our range of high-end detailing packages tailored to restore and protect your vehicle's value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group flex flex-col rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border ${service.featured ? 'border-brand-blue/30' : 'border-gray-100'}`}
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black bg-brand-blue rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                </div>
                
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-blue/10 text-brand-blue mb-6 border border-brand-blue/20">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-1">{service.desc}</p>
                  
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-blue transition-colors">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
