import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function SectionHeader({ eyebrow, title, sub }) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.span className="eyebrow" variants={fadeUp}>{eyebrow}</motion.span>
      <motion.h2 variants={fadeUp} custom={1}>{title}</motion.h2>
      {sub && <motion.p variants={fadeUp} custom={2}>{sub}</motion.p>}
    </motion.div>
  );
}

/* Card that tilts in 3D toward the cursor and shows a moving spotlight */
export function TiltCard({ children, className = '', intensity = 12, ...rest }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), { stiffness: 200, damping: 18 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x);
    my.set(y);
    ref.current.style.setProperty('--mx', `${x * 100}%`);
    ref.current.style.setProperty('--my', `${y * 100}%`);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Logo({ size = 34 }) {
  return (
    <span className="logo">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <circle cx="32" cy="32" r="17" fill="none" stroke="url(#lg)" strokeWidth="7" />
        <circle cx="32" cy="32" r="5" fill="#22d3ee" />
        <circle cx="49" cy="15" r="4" fill="#f472b6" />
      </svg>
      <span className="logo-text">ORTECHION</span>
    </span>
  );
}
