import { motion } from 'motion/react';
import { ClipboardCheck, Sparkles, Shield, CheckCircle } from 'lucide-react';

const steps = [
  { 
    icon: ClipboardCheck, 
    title: "Inspection", 
    desc: "Thorough assessment of paint condition.",
    img: "https://lirp.cdn-website.com/7b51853d/dms3rep/multi/opt/Vehicle+Inspection-640w.png"
  },
  { 
    icon: Sparkles, 
    title: "Deep Cleaning", 
    desc: "Decontamination and multi-stage wash.",
    img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: Shield, 
    title: "Correction & Coating", 
    desc: "Removing defects and applying protection.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: CheckCircle, 
    title: "Luxury Finish", 
    desc: "Final inspection and delivery.",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop"
  },
];

export function Process() {
  return (
    <section className="py-32 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-dark"
          >
            The Splash N Dash <span className="text-brand-blue">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-brand-blue text-brand-dark font-display font-bold flex items-center justify-center text-lg shadow-lg">
                      0{idx + 1}
                    </div>
                  </div>
                  <div className="p-8 text-center flex-1 flex flex-col">
                    <div className="w-16 h-16 mx-auto bg-brand-light rounded-full flex items-center justify-center mb-6 text-brand-blue border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 text-brand-dark">{step.title}</h3>
                    <p className="text-gray-500 font-medium text-sm mx-auto leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
