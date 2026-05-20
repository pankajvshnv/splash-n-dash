import { motion } from 'motion/react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Shield, Droplets, Sparkles, Star } from 'lucide-react';



export function BeforeAfter() {
  return (
    <section className="py-32 bg-[#050505] text-white relative flex flex-col overflow-hidden">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Before. After. <span className="text-brand-blue text-glow">Perfection.</span>
            </h2>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-white/60 text-lg md:text-xl font-light"
          >
            Every vehicle receives precision detailing, paint restoration, and premium protection designed to bring back a showroom-level finish.
          </motion.p>
        </div>
      </div>

      {/* Main Fullwidth Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full relative group shadow-[0_0_100px_rgba(14,165,233,0.1)] z-20"
      >
        <div className="w-full max-w-[1920px] mx-auto relative h-[60vh] md:h-[80vh]">
          <ReactCompareSlider
            handle={
              <div className="flex h-full w-1 items-center justify-center bg-white/20 relative shadow-[0_0_20px_rgba(14,165,233,0.6)] backdrop-blur-sm">
                <div className="absolute w-14 h-14 bg-black/80 backdrop-blur-xl border border-brand-blue/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.8)] z-20 group-hover:scale-110 transition-transform">
                  <div className="w-1 h-6 bg-white/80 rounded-full mx-0.5" />
                  <div className="w-1 h-6 bg-white/80 rounded-full mx-0.5" />
                </div>
              </div>
            }
            itemOne={
              <div className="w-full h-full relative">
                <ReactCompareSliderImage 
                  src="https://i.postimg.cc/mkMqHNvD/is-htis-imaghe-0n-car-202605201056.jpg" 
                  alt="Before Detailing" 
                  className="w-full h-full object-cover"
                />
                
              </div>
            }
            itemTwo={
              <ReactCompareSliderImage 
                src="https://i.postimg.cc/jjbjwZB3/is-htis-imaghe-0n-car-202605201056.png" 
                alt="After Detailing" 
                className="w-full h-full object-cover"
              />
            }
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 px-6 py-2 bg-black/60 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-[0.2em] rounded-full pointer-events-none border border-white/10">
            Before
          </div>
          <div className="absolute top-8 right-8 px-6 py-2 bg-brand-blue/20 backdrop-blur-md text-brand-blue text-xs font-bold uppercase tracking-[0.2em] rounded-full pointer-events-none border border-brand-blue/30 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
            After
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 mt-24">
        {/* Trust Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24 border-y border-white/10 py-10 bg-white/5 backdrop-blur-sm rounded-2xl">
          {[
            { icon: Star, text: "500+ Cars Restored" },
            { icon: Shield, text: "Premium Ceramic Protection" },
            { icon: Droplets, text: "100% Hand Detailed" },
            { icon: Sparkles, text: "Luxury Finish Guaranteed" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Icon size={18} />
                </div>
                <span className="text-white/80 font-medium tracking-wide text-sm md:text-base">{stat.text}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
