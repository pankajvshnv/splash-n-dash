import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Michael T.",
    text: "Absolutely incredible work. My car looked better than when I bought it. The ceramic coating finish is insane.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Sarah L.",
    text: "The attention to detail is unmatched. Highly recommended to anyone looking for a reliable and meticulous detailer in JC.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "David K.",
    text: "They removed scratches I thought were permanent. The paint correction is legit magic. Great guys too.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-dark">Client <span className="text-gradient">Experiences</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">"{review.text}"</p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl group-hover:bg-brand-blue/20 transition-colors" />
              
              <div className="flex items-center gap-4 mt-8 border-t border-gray-100 pt-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div className="font-display font-bold text-brand-dark">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
