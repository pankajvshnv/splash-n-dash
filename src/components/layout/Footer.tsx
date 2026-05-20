import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      {/* Animated water line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-80" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-display font-bold tracking-tighter text-white mb-6">
              SPLASH <span className="text-brand-blue">N</span> DASH <span className="font-light">JC</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
              Premium hand wash, detailing, and ceramic coating studio based in Jersey City. Elevating the standard of car care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/splash_n_dash_jc/?hl=en" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-brand-blue hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'About', 'Gallery', 'Testimonials'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-brand-blue text-sm transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/5z4YECaTAnmVxKJN7" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors">
                  157 St Pauls Ave,<br/>Jersey City, NJ 07306
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <a href="tel:+15512253227" className="hover:text-brand-blue transition-colors">+1 551-225-3227</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <a href="mailto:info@splashndashjc.com" className="hover:text-brand-blue transition-colors">info@splashndashjc.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Hours</h4>
            <ul className="space-y-2 text-sm text-white/70 font-medium">
              <li className="flex justify-between text-brand-blue"><span>Monday:</span> <span>Closed</span></li>
              <li className="flex justify-between"><span>Tuesday:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Wednesday:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Thursday:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Friday:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>9:00 AM - 6:00 PM</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/50">
          <p>&copy; {new Date().getFullYear()} Splash N Dash JC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
