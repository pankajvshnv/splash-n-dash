import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Gallery } from './components/sections/Gallery';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';

export default function App() {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BeforeAfter />
        <Services />
        <About />
        <Gallery />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
