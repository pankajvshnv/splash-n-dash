import { motion } from 'motion/react';
import { Check, Star, Plus } from 'lucide-react';

const packages = [
  {
    id: "quick-clean",
    name: "Quick Clean",
    description: "Perfect for a fast exterior refresh.",
    popular: false,
    pricing: [
      { size: "Cars", price: "$16" },
      { size: "Small SUV", price: "$16" },
      { size: "Large", price: "$27" },
      { size: "X-Large", price: "$27" },
    ],
    features: [
      "Exterior Wash Only"
    ]
  },
  {
    id: "splash-wash",
    name: "Splash Wash",
    description: "Our signature wash with an interior refresh.",
    popular: true,
    pricing: [
      { size: "Cars", price: "$22" },
      { size: "Small SUV", price: "$22" },
      { size: "Large", price: "$32" },
      { size: "X-Large", price: "$32" },
    ],
    features: [
      "Vacuum (Floors, Seats & Doors)",
      "Clean Weather Mats (Up to 4)",
      "Clean Rims & Tire Shine",
      "Clean Door Trap",
      "Windows"
    ]
  },
  {
    id: "mini-detail",
    name: "Mini Detail",
    description: "Includes Splash Wash plus deep cleaning.",
    popular: false,
    pricing: [
      { size: "Cars", price: "$100" },
      { size: "Small SUV", price: "$110" },
      { size: "Large", price: "$120" },
      { size: "X-Large", price: "$130" },
    ],
    features: [
      "Includes Splash Wash",
      "Shampoo Seats",
      "OR Shampoo Carpets"
    ]
  },
  {
    id: "full-detail",
    name: "Full Detail",
    description: "The complete interior & exterior overhaul.",
    popular: false,
    pricing: [
      { size: "Cars", price: "$200" },
      { size: "Small SUV", price: "$210" },
      { size: "Large", price: "$220" },
      { size: "X-Large", price: "$230" },
    ],
    features: [
      "Includes Mini Detail",
      "Shampoo Trunk",
      "Shampoo Seats",
      "Shampoo Inside Roof",
      "Shampoo Carpet Floor",
      "Exterior Wash"
    ]
  }
];

const extras = [
  { name: "Spray Wax", price: "$10" },
  { name: "Engine Clean", price: "$50" },
  { name: "Hand Wash & Buff", price: "from $50" },
  { name: "Trunk Vacuum", price: "from $5" },
  { name: "Tire Shine", price: "$5" },
  { name: "Spot Cleaning - Chairs", price: "$20 / Seat" },
  { name: "Spot Cleaning - Floor Carpet", price: "$20 / Section" },
  { name: "Spot Cleaning - Roof", price: "from $25" },
];

export function Pricing() {
  return (
    <section className="py-32 bg-[#050505] text-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Transparent Rates</span>
            <div className="w-8 h-[1px] bg-brand-blue" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium mb-6 tracking-tight text-white"
          >
            Premium Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-light leading-relaxed max-w-xl mx-auto"
          >
            Choose the perfect level of care for your vehicle. Uncompromised quality at every tier.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full bg-[#0a0a0a] border ${pkg.popular ? 'border-brand-blue shadow-[0_0_40px_rgba(40,163,220,0.1)]' : 'border-white/5'} transition-colors duration-500 hover:border-white/20 group`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg shadow-brand-blue/30">
                  <Star size={12} className="fill-white" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-display font-medium text-white mb-2">{pkg.name}</h3>
                <p className="text-white/50 text-sm h-10">{pkg.description}</p>
              </div>

              {/* Pricing Breakout */}
              <div className="space-y-3 mb-8 pb-8 border-b border-white/5">
                {pkg.pricing.map((p, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-white/70">{p.size}</span>
                    <span className="font-mono font-medium text-white">{p.price}</span>
                  </div>
                ))}
              </div>

              {/* Features Wrapper - Pushes button to bottom */}
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all ${pkg.popular ? 'bg-brand-blue text-white hover:bg-brand-blue-dark' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Book {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Extra Services */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-b from-[#0a0a0a] to-transparent border border-white/5 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Plus size={20} className="text-brand-blue" />
              </div>
              <h3 className="text-2xl font-display font-medium text-white">Extra Services</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {extras.map((extra, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 md:last:border-b-0">
                  <span className="text-white/80 text-sm">{extra.name}</span>
                  <span className="font-mono text-brand-green font-medium text-sm">{extra.price}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
