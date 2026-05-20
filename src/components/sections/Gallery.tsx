import { motion } from 'motion/react';

const images = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/J1aA6rKRD5BjWfxOwrO9uQ/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/9JfKmXwRcba99W2dTWuZNg/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/TrKxaJ9foSBQvgXyxOXCRg/o.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/UalIHcyotvTEzSALkmk73Q/348s.jpg",
  "https://i.postimg.cc/jjbjwZB3/is-htis-imaghe-0n-car-202605201056.png",
  "https://ceramicpro.com/wp-content/uploads/2020/09/Using-An-Orbital-Polisher.jpeg"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-brand-light relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-dark">Our <span className="text-brand-blue">Work</span></h2>
            <p className="text-gray-600 font-medium tracking-wide">Follow us on Instagram @splash_n_dash_jc</p>
          </motion.div>
          <motion.a 
            href="https://www.instagram.com/splash_n_dash_jc/?hl=en" 
            target="_blank" 
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0 px-6 py-3 border-2 border-brand-dark text-brand-dark rounded-full font-bold text-sm hover:bg-brand-dark hover:text-white transition-all shadow-sm"
          >
            View Instagram
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-shadow ${idx % 3 === 0 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-square'}`}
            >
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={src} 
                alt="Detailing Work" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
