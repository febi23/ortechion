import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight, Check, Apple, Smartphone, WifiOff, ScanLine, MapPin, Bell, Fingerprint,
  Quote, ChevronLeft, ChevronRight, Mail, Phone, Send, CheckCircle2,
  TrendingUp, Package, Users, Wallet, Linkedin, Twitter, Github, Instagram,
} from 'lucide-react';
import { CATEGORIES, MODULES, SERVICES, INDUSTRIES, PROCESS, TESTIMONIALS } from '../data.js';
import { SectionHeader, TiltCard, Counter, Logo, fadeUp } from './ui.jsx';

/* ---------------- Marquee ---------------- */
export function Marquee() {
  const items = MODULES.map((m) => m.name);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i}>
            <i /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Modules ---------------- */
export function Modules() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? MODULES : MODULES.filter((m) => m.cat === cat);

  return (
    <section className="section" id="modules">
      <div className="container">
        <SectionHeader
          eyebrow="Integrated business apps"
          title={<>Every department. <span className="gradient-text">One connected system.</span></>}
          sub="Pick the apps you need today and add more as you grow. Every module shares one database — so a sale updates stock, accounting and the warehouse instantly."
        />

        <div className="tabs" role="tablist">
          {CATEGORIES.map((c) => (
            <button key={c} className={`tab ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
              {cat === c && <motion.span layoutId="tab-bg" className="tab-bg" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
              <span className="tab-label">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="modules-grid">
          <AnimatePresence mode="popLayout">
            {list.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.025 } }}
                  exit={{ opacity: 0, scale: 0.85 }}
                >
                  <TiltCard className="module-card">
                    <div className="module-icon"><Icon size={22} /></div>
                    <h3>{m.name}</h3>
                    <p>{m.desc}</p>
                    <span className="module-tag">{m.cat}</span>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
export function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What we do"
          title={<>End-to-end <span className="gradient-text">ERP solutions</span>, built around you</>}
          sub="From first workshop to long-term support, one team owns your success."
        />
        <div className="services-grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i % 4}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <TiltCard className="service-card" intensity={8}>
                  <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="service-icon"><Icon size={26} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#contact" className="link-arrow">Learn more <ArrowRight size={15} /></a>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mobile Apps ---------------- */
function PhoneScreen() {
  const bars = [40, 65, 52, 80, 58, 92, 74];
  return (
    <div className="phone-screen">
      <div className="ps-status"><span>9:41</span><span className="ps-notch" /><span>5G</span></div>
      <div className="ps-head">
        <div>
          <small>Good morning</small>
          <strong>Dashboard</strong>
        </div>
        <span className="ps-avatar">OR</span>
      </div>
      <div className="ps-kpis">
        <div className="ps-kpi k1"><TrendingUp size={14} /><small>Sales</small><strong>$48.2k</strong></div>
        <div className="ps-kpi k2"><Package size={14} /><small>Orders</small><strong>1,284</strong></div>
      </div>
      <div className="ps-chart">
        <small>Weekly revenue</small>
        <div className="ps-bars">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
            />
          ))}
        </div>
      </div>
      <div className="ps-list">
        {[
          { icon: Users, t: 'Leave approved', s: 'HR · 2m ago' },
          { icon: Package, t: 'Stock received', s: 'Inventory · 10m ago' },
          { icon: Wallet, t: 'Invoice paid', s: 'Accounting · 1h ago' },
        ].map((r, i) => (
          <div className="ps-row" key={i}>
            <span className="ps-row-icon"><r.icon size={13} /></span>
            <div><strong>{r.t}</strong><small>{r.s}</small></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileApps() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotY = useSpring(useTransform(scrollYProgress, [0, 1], [-35, 25]), { stiffness: 80, damping: 20 });
  const rotX = useSpring(useTransform(scrollYProgress, [0, 1], [18, -8]), { stiffness: 80, damping: 20 });
  const backY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const features = [
    { icon: Apple, t: 'Native iOS & Android', d: 'Swift, Kotlin, Flutter or React Native — the right stack for your users.' },
    { icon: WifiOff, t: 'Offline-first sync', d: 'Work in warehouses or on the road; data syncs the moment you are back online.' },
    { icon: ScanLine, t: 'Barcode & QR scanning', d: 'Turn any phone into a scanner for picking, receiving and stock counts.' },
    { icon: MapPin, t: 'GPS & field tracking', d: 'Geo-tagged check-ins, route optimization and live technician tracking.' },
    { icon: Bell, t: 'Push notifications', d: 'Instant alerts for approvals, low stock, new leads and payments.' },
    { icon: Fingerprint, t: 'Secure by design', d: 'Biometric login, encryption and role-based access synced with your ERP.' },
  ];

  return (
    <section className="section mobile" id="mobile" ref={ref}>
      <div className="container mobile-inner">
        <div className="mobile-visual">
          <motion.div className="phone phone-back" style={{ rotateY: rotY, rotateX: rotX, y: backY }}>
            <div className="phone-screen alt">
              <div className="ps-status"><span>9:41</span><span className="ps-notch" /><span>5G</span></div>
              <div className="ps-scan">
                <ScanLine size={42} />
                <span className="scan-line" />
              </div>
              <strong className="ps-scan-title">Scan to pick</strong>
              <small className="ps-scan-sub">Order #SO-20481 · 6 items</small>
            </div>
          </motion.div>
          <motion.div className="phone phone-front" style={{ rotateY: rotY, rotateX: rotX }}>
            <PhoneScreen />
          </motion.div>
          <div className="phone-glow" />
        </div>

        <div className="mobile-copy">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Smartphone size={14} /> Mobile app development
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
            Your ERP, <span className="gradient-text">in every pocket.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}>
            We build beautiful, high-performance mobile apps that connect directly to your business system —
            for sales reps, warehouse staff, technicians, managers and your customers.
          </motion.p>
          <div className="feature-list">
            {features.map((f, i) => (
              <motion.div
                className="feature"
                key={f.t}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="feature-icon"><f.icon size={18} /></span>
                <div>
                  <strong>{f.t}</strong>
                  <p>{f.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */
export function Industries() {
  return (
    <section className="section section-alt" id="industries">
      <div className="container">
        <SectionHeader
          eyebrow="Industries"
          title={<>Pre-configured for <span className="gradient-text">your industry</span></>}
          sub="Proven templates and best practices that get you live faster."
        />
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="industry"
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <span className="industry-icon"><ind.icon size={26} /></span>
              <span>{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section className="section" id="process" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="How we work"
          title={<>From idea to go-live in <span className="gradient-text">weeks, not years</span></>}
        />
        <div className="process">
          <div className="process-line"><motion.span style={{ scaleX: scale }} /></div>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              className="process-step"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="process-dot">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
export function Stats() {
  const stats = [
    { n: 250, s: '+', l: 'Businesses empowered' },
    { n: 30, s: '+', l: 'Integrated modules' },
    { n: 120, s: '+', l: 'Mobile apps shipped' },
    { n: 98, s: '%', l: 'Client retention' },
  ];
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.l}>
            <strong className="gradient-text"><Counter to={s.n} suffix={s.s} /></strong>
            <span>{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const go = (d) => {
    setDir(d);
    setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [idx]);

  const t = TESTIMONIALS[idx];
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <SectionHeader eyebrow="Client stories" title={<>Loved by <span className="gradient-text">growing teams</span></>} />
        <div className="testimonial-wrap">
          <Quote className="quote-mark" size={64} />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className="testimonial"
              custom={dir}
              initial={{ opacity: 0, x: dir * 80, rotateY: dir * 25 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -dir * 80, rotateY: -dir * 25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>“{t.quote}”</p>
              <div className="t-author">
                <span className="t-avatar">{t.name.split(' ').map((w) => w[0]).join('')}</span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="t-controls">
            <button onClick={() => go(-1)} aria-label="Previous"><ChevronLeft /></button>
            <div className="t-dots">
              {TESTIMONIALS.map((_, i) => (
                <span key={i} className={i === idx ? 'active' : ''} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact / CTA ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  const interests = ['ERP Implementation', 'Custom Modules', 'Mobile App', 'Integrations', 'Migration', 'Support'];
  const [picked, setPicked] = useState(['ERP Implementation']);
  const toggle = (x) => setPicked((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));

  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <motion.div
          className="contact-copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="eyebrow" variants={fadeUp}>Let’s build together</motion.span>
          <motion.h2 variants={fadeUp} custom={1}>
            Ready to <span className="gradient-text">transform</span> how your business runs?
          </motion.h2>
          <motion.p variants={fadeUp} custom={2}>
            Book a free 30-minute consultation. We’ll map your processes and show you a live demo tailored to your business.
          </motion.p>
          <motion.ul className="checks" variants={fadeUp} custom={3}>
            {['Free process assessment', 'Fixed-price proposals', 'Go-live in as little as 4 weeks', 'Dedicated project manager'].map((c) => (
              <li key={c}><Check size={16} /> {c}</li>
            ))}
          </motion.ul>
          <motion.div className="contact-lines" variants={fadeUp} custom={4}>
            <a href="mailto:hello@ortechion.com"><Mail size={18} /> hello@ortechion.com</a>
            <a href="tel:+10000000000"><Phone size={18} /> +1 (000) 000-0000</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" className="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 size={56} />
                <h3>Thank you!</h3>
                <p>Our team will get back to you within one business day.</p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>Send another</button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <h3>Request a free demo</h3>
                <div className="field-row">
                  <label className="field"><span>Full name</span><input required placeholder="Jane Cooper" /></label>
                  <label className="field"><span>Company</span><input placeholder="Acme Inc." /></label>
                </div>
                <div className="field-row">
                  <label className="field"><span>Work email</span><input required type="email" placeholder="jane@acme.com" /></label>
                  <label className="field"><span>Phone</span><input type="tel" placeholder="+1 555 000 0000" /></label>
                </div>
                <div className="field">
                  <span>I’m interested in</span>
                  <div className="chips">
                    {interests.map((x) => (
                      <button type="button" key={x} className={`chip ${picked.includes(x) ? 'on' : ''}`} onClick={() => toggle(x)}>
                        {x}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="field"><span>Tell us about your project</span><textarea rows={3} placeholder="Number of users, current software, goals…" /></label>
                <button className="btn btn-primary btn-lg btn-block" type="submit">
                  Book my consultation <Send size={17} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const cols = [
    { h: 'Modules', l: ['Accounting', 'Inventory', 'Sales & CRM', 'HR & Payroll', 'Manufacturing'] },
    { h: 'Services', l: ['Implementation', 'Custom Development', 'Mobile Apps', 'Integrations', 'Support'] },
    { h: 'Company', l: ['About us', 'Careers', 'Case studies', 'Blog', 'Contact'] },
  ];
  const LOGIN_URL = 'https://ortechion.odoo.com/web/login';
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Complete ERP software and mobile app development for ambitious businesses worldwide.</p>
          <div className="socials">
            {[Linkedin, Twitter, Github, Instagram].map((I, i) => (
              <a key={i} href="#top" aria-label="social link"><I size={18} /></a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h} className="footer-col">
            <h4>{c.h}</h4>
            {c.l.map((x) => <a key={x} href="#top">{x}</a>)}
            {c.h === 'Company' && <a href={LOGIN_URL}>Team Login</a>}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ORTECHION. All rights reserved.</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}
