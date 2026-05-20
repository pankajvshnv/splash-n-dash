import { motion } from 'motion/react';
import { Shield, Droplets, Sparkles, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const percent = Math.max(0, Math.min(100, (x / width) * 100));
    setPosition(percent);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };
  
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handlePointerUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointermove', handlePointerMove as any);
    }
    
    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove as any);
    };
  }, [isDragging]);

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
        <div 
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onTouchMove={handleTouchMove}
          className="w-full max-w-[1920px] mx-auto relative h-[45vh] sm:h-[60vh] md:h-[80vh] touch-none select-none cursor-ew-resize overflow-hidden md:rounded-3xl"
        >
          {/* After Image (Background) */}
          <img 
            src="https://i.postimg.cc/jjbjwZB3/is-htis-imaghe-0n-car-202605201056.png" 
            alt="After Detailing" 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 select-none pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img 
              src="https://i.postimg.cc/mkMqHNvD/is-htis-imaghe-0n-car-202605201056.jpg" 
              alt="Before Detailing" 
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 flex items-center justify-center -ml-px w-0.5 bg-white/50 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="absolute w-12 h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/80 shadow-lg top-1/2 -translate-y-1/2">
              <div className="w-1 h-4 bg-white rounded-full mx-0.5" />
              <div className="w-1 h-4 bg-white rounded-full mx-0.5" />
            </div>
          </div>

          <div className="absolute top-4 left-4 md:top-8 md:left-8 px-4 py-1.5 md:px-6 md:py-2 bg-black/60 backdrop-blur-md text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full pointer-events-none border border-white/10 z-20">
            Before
          </div>
          <div className="absolute top-4 right-4 md:top-8 md:right-8 px-4 py-1.5 md:px-6 md:py-2 bg-brand-blue/20 backdrop-blur-md text-brand-blue text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full pointer-events-none border border-brand-blue/30 shadow-[0_0_20px_rgba(14,165,233,0.2)] z-20">
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
