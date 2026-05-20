import { motion } from 'motion/react';

const stats = [
  { label: "Cars Detailed", value: "5,000+" },
  { label: "Happy Customers", value: "3,200+" },
  { label: "Ceramic Coatings", value: "850+" },
  { label: "Years Experience", value: "10+" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue text-sm font-bold uppercase tracking-widest mb-4">The Craft of Detailing</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-brand-dark">
              More than cleaning. <br/>It’s <span className="text-gradient">craftsmanship.</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
              At Splash N Dash JC, car care is our obsession. We provide premium detailing and protection services that restore shine, protect paint, and elevate your driving experience. Every vehicle is treated with meticulous precision and premium products to ensure a flawless, long-lasting finish.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl transform -rotate-12 rounded-full" />
            <div className="relative rounded-2xl overflow-hidden glass p-4 border border-gray-100 shadow-2xl">
              <img 
                src="https://ceramicpro.com/wp-content/uploads/2020/09/Using-An-Orbital-Polisher.jpeg" 
                alt="Detailing Process" 
                className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
