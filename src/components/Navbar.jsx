import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, LogIn } from 'lucide-react';
import { Logo } from './ui.jsx';

export const LOGIN_URL = 'https://ortechion.odoo.com/web/login';

const LINKS = [
  { href: '#modules', label: 'Modules' },
  { href: '#services', label: 'Services' },
  { href: '#mobile', label: 'Mobile Apps' },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'Process' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <a href="#top" aria-label="ORTECHION home"><Logo /></a>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href={LOGIN_URL} className="btn btn-ghost nav-login" title="Team login">
          <LogIn size={16} /> Login
        </a>
        <a href="#contact" className="btn btn-primary nav-cta">
          Get a Demo <ArrowRight size={16} />
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
            <a href={LOGIN_URL} className="btn btn-ghost"><LogIn size={16} /> Team Login</a>
            <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Get a Demo</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
