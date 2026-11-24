import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import {
  Marquee, Modules, Services, MobileApps, Industries, Process, Stats, Testimonials, Contact, Footer,
} from './components/Sections.jsx';

function Preloader() {
  return (
    <motion.div
      className="preloader"
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-word">
        {'ORTECHION'.split('').map((c, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {c}
          </motion.span>
        ))}
      </div>
      <motion.div className="preloader-bar" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1 }} />
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Preloader key="pre" />}</AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Modules />
        <Services />
        <MobileApps />
        <Stats />
        <Industries />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
