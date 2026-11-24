import { lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles, BarChart3, Package, Users } from 'lucide-react';

const HeroScene = lazy(() => import('./HeroScene.jsx'));

const WORDS = ['Accounting', 'Inventory', 'HR & Payroll', 'Sales & CRM', 'Manufacturing', 'Mobile Apps'];

export default function Hero() {
  const { scrollY } = useScroll();
  const sceneY = useTransform(scrollY, [0, 700], [0, 180]);
  const sceneOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const textY = useTransform(scrollY, [0, 700], [0, -80]);

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-floor" />
      </div>

      <div className="container hero-inner">
        <motion.div className="hero-copy" style={{ y: textY }}>
          <motion.span
            className="pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles size={14} /> All-in-one ERP · Built for growth
          </motion.span>

          <h1>
            {['One', 'platform', 'to', 'run'].map((w, i) => (
              <motion.span
                key={w}
                className="word"
                initial={{ opacity: 0, y: 60, rotateX: -80 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}&nbsp;
              </motion.span>
            ))}
            <br />
            <motion.span
              className="gradient-text word"
              initial={{ opacity: 0, y: 60, rotateX: -80 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              your entire business.
            </motion.span>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            ORTECHION designs, builds and deploys complete ERP solutions — Accounting, HR, Sales,
            Purchase, Inventory, Manufacturing and 30+ integrated apps — plus custom mobile apps that put
            your business in your pocket.
          </motion.p>

          <motion.div
            className="rotator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span>Streamline</span>
            <div className="rotator-window">
              <div className="rotator-track">
                {[...WORDS, WORDS[0]].map((w, i) => (
                  <span key={i}>{w}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              Start your project <ArrowRight size={18} />
            </a>
            <a href="#modules" className="btn btn-ghost btn-lg">
              <PlayCircle size={18} /> Explore modules
            </a>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="avatars">
              {['#8b5cf6', '#22d3ee', '#f472b6', '#34d399'].map((c, i) => (
                <span key={i} style={{ background: c }}>{['PR', 'DO', 'EM', 'AM'][i]}</span>
              ))}
            </div>
            <p><strong>250+ businesses</strong> run on ORTECHION solutions</p>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" style={{ y: sceneY, opacity: sceneOpacity }}>
          <motion.div
            className="scene-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<div className="scene-fallback" />}>
              <HeroScene />
            </Suspense>
          </motion.div>

          <motion.div
            className="float-card fc-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <BarChart3 size={18} />
            <div>
              <small>Revenue this month</small>
              <strong>$1.28M <em>+24%</em></strong>
            </div>
          </motion.div>
          <motion.div
            className="float-card fc-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            <Package size={18} />
            <div>
              <small>Stock auto-replenished</small>
              <strong>342 SKUs</strong>
            </div>
          </motion.div>
          <motion.div
            className="float-card fc-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <Users size={18} />
            <div>
              <small>Payroll processed</small>
              <strong>1,204 employees</strong>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        <span />
      </div>
    </section>
  );
}
