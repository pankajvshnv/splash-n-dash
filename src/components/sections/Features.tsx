import { motion } from 'motion/react';
import { Droplets, Shield, Sparkles, Clock } from 'lucide-react';

const features = [
  { icon: Droplets, title: "100% Hand Wash", desc: "Scratch-free, meticulous cleaning.", img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop" },
  { icon: Shield, title: "Ceramic Protection", desc: "Long-lasting hydrophobic shield.", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop" },
  { icon: Sparkles, title: "Interior Deep Clean", desc: "Restore your cabin to factory fresh.", img: "https://images.unsplash.com/photo-1580274455069-b5443273e3ae?q=80&w=800&auto=format&fit=crop" },
  { icon: Clock, title: "Reliable Service", desc: "Punctual, professional, and perfect.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
];

export function Features() {
  return (
    <section className="py-20 bg-brand-light relative z-30">
      <div className="container mx-auto px-6 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass h-64 flex items-end p-6 border-white/60"
              >
                <img 
                  src={feature.img} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10 transition-opacity group-hover:opacity-90" />
                
                <div className="relative z-20 w-full">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30 text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-1 text-white">{feature.title}</h3>
                  <p className="text-white/80 text-sm max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent opacity-10" 
              style={{ WebkitTextStroke: '2px #0f172a' }}>
            100% HAND WASH
          </h2>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
