/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ShieldCheck,
  Cpu,
  Users,
  Zap,
  Brain,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  EyeOff
} from "lucide-react";
import { useState, useEffect } from "react";
import heroGlasses from "./assets/focentra_hero.png";
import featureGlasses from "./assets/focentra_glasses.png";
import businessGlasses from "./assets/focentra_glasses_business.png";
import privacyGlasses from "./assets/privacy_glasses.png";
import BusinessSolutions from "./BusinessSolutions";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  if (currentPage === 'business') {
    return <BusinessSolutions onBack={() => {
      setCurrentPage('home');
      window.scrollTo(0, 0);
    }} />;
  }

  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white font-headline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            FOCENTRA
          </div>

          <div className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection('product')} className="font-headline uppercase tracking-widest text-xs text-white/70 hover:text-secondary transition-colors">Product</button>
            <button onClick={() => scrollToSection('solution')} className="font-headline uppercase tracking-widest text-xs text-white/70 hover:text-secondary transition-colors">Solution</button>
            <button onClick={() => scrollToSection('business')} className="font-headline uppercase tracking-widest text-xs text-white/70 hover:text-secondary transition-colors">Business</button>
            <button onClick={() => scrollToSection('pricing')} className="font-headline uppercase tracking-widest text-xs text-white/70 hover:text-secondary transition-colors">Pricing</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-white text-black px-8 py-2 font-headline font-bold uppercase tracking-widest text-[10px] hover:bg-secondary hover:text-black transition-colors">
              Buy
            </button>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <button onClick={() => scrollToSection('product')} className="font-headline uppercase tracking-widest text-sm text-left">Product</button>
            <button onClick={() => scrollToSection('solution')} className="font-headline uppercase tracking-widest text-sm text-left">Solution</button>
            <button onClick={() => scrollToSection('business')} className="font-headline uppercase tracking-widest text-sm text-left">Business</button>
            <button onClick={() => scrollToSection('pricing')} className="font-headline uppercase tracking-widest text-sm text-left">Pricing</button>
            <button className="bg-white text-black px-8 py-3 font-headline font-bold uppercase tracking-widest text-xs">Buy Now</button>
          </motion.div>
        )}
      </nav>

      <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {/* Hero Section */}
        <section id="product" className="min-h-screen snap-start flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
          <div className="z-10 text-center max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-headline uppercase tracking-[0.4em] text-[10px] mb-6 block"
            >
              The Ultimate Anti-Distraction Glasses
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-headline text-5xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mb-12"
            >
              Ready to take <br />control of <br /><span className="text-secondary text-glow">your focus?</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-8 mt-16"
            >
              <div className="w-1 bg-secondary h-12 hidden sm:block"></div>
              <p className="text-on-surface-variant max-w-md text-left text-lg leading-relaxed">
                Precision-engineered smart glasses designed to block visual and environmental distractions. Put them on, tune out the noise, and step into the deep work state effortlessly.
              </p>
            </motion.div>
          </div>

          {/* Background Asset */}
          <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none overflow-hidden">
            <img
              className="w-full h-full object-cover object-left opacity-40 mix-blend-screen"
              src={heroGlasses}
              alt="Focentra Hardware"
              referrerPolicy="no-referrer"
              style={{ objectPosition: "20% center" }}
            />
            {/* fade left */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #000000 0%, transparent 40%)" }} />
            {/* fade top */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #000000 0%, transparent 30%)" }} />
            {/* fade bottom */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #000000 0%, transparent 30%)" }} />
          </div>
        </section>

        {/* Privacy Section */}
        <section className="min-h-screen snap-start flex items-center py-20 px-6 md:px-12 bg-surface">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-12 text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Your Vision,<br />Your Privacy.</h2>
                <p className="text-on-surface-variant text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
                  Privacy is not a feature; it is the foundation. The data from your Focentra lenses never leaves the device. No cloud sync, no video streaming, just pure, private focus.
                </p>
                <div className="inline-flex items-center gap-4 text-secondary justify-center md:justify-start">
                  <ShieldCheck size={32} />
                  <span className="font-headline uppercase tracking-widest text-sm font-bold">Encrypted Edge Computing</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden border border-white/5"
            >
              <img
                className="w-full h-full object-cover object-center"
                src={privacyGlasses}
                alt="Optical Processing Unit"
                referrerPolicy="no-referrer"
              />
              {/* edge fades */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #0e0e0e 0%, transparent 25%, transparent 75%, #0e0e0e 100%)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, #0e0e0e 0%, transparent 20%, transparent 80%, #0e0e0e 100%)" }} />
            </motion.div>
          </div>
        </section>

        {/* Distraction Solution Section (NEW) */}
        <section id="solution" className="min-h-screen snap-start flex items-center py-20 px-6 md:px-12 bg-black border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-video bg-surface-container rounded-2xl overflow-hidden group">
                  <img
                    src={featureGlasses}
                    alt="Deep Focus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-black">
                      <Brain size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold">Flow State Achieved</p>
                      <p className="text-white/50 text-xs uppercase tracking-widest">Neural Sync Active</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 space-y-8 text-center lg:text-left"
              >
                <span className="text-secondary font-headline uppercase tracking-widest text-[10px] block">The Solution</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">Engineered to Kill <br /><span className="text-glow">Distraction.</span></h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  In an era of constant bombardment, your attention is the ultimate competitive advantage. Slip on your Focentra glasses to let our active visual dampening physically blur out the noise and completely shield you from distractions.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: <EyeOff className="text-secondary" />, title: "Vision Shielding Lenses", desc: "Electrochromic lenses physically darken peripheral distractions, keeping your eyes on what matters." },
                    { icon: <Zap className="text-secondary" />, title: "Instant Flow Entry", desc: "Reduces the time to reach deep work by 70%." },
                    { icon: <CheckCircle2 className="text-secondary" />, title: "Cognitive Endurance", desc: "Extends peak mental performance periods." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="mt-1">{item.icon}</div>
                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section id="business" className="min-h-screen snap-start flex items-center py-20 px-6 md:px-12 bg-surface-container-lowest">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 text-center lg:text-left"
            >
              <span className="text-secondary font-headline uppercase tracking-widest text-[10px] block mb-4">Enterprise Solutions</span>
              <h3 className="font-headline text-4xl font-bold mb-8">Equip Your Team with Pure Clarity.</h3>
              <p className="text-on-surface-variant mb-12 max-w-lg mx-auto lg:mx-0">
                Deploy Focentra glasses across your entire organization. Boost collective throughput by shielding your workforce from the noise of the modern office.
              </p>
              <button 
                onClick={() => {
                  setCurrentPage('business');
                  window.scrollTo(0, 0);
                }}
                className="group mx-auto lg:mx-0 flex items-center gap-3 border border-white/10 hover:border-secondary text-on-surface px-10 py-4 font-headline uppercase tracking-widest text-xs transition-all duration-500"
              >
                Inquire for Business
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-surface-container overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACVERn3xMrfYONBQs9JKCQOFwv3gYmnFSpQhuYbRiC_xTYVWRhAV6gkowHklFpW0uDgb0h4uctIzy3i4VWTy0oMe2WCuOLn1jRtO4EUR8SobkyPL513B-3WJKcB43hTKi_V3AZqpTgJ6elKWF0X02qYcQgzBPfQ8JyPgx7DQ8riqOuK0HkP1cRDRkS5N_v7QVY_yxh37yDWWCzk9nCoPokRiGa_Qn9Q-M7EfPhX9J0hV8hOeNQH6q14BcB1QCSrwQMyRapoP_wBnM"
                  alt="Enterprise Office"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-surface-container overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                  src={businessGlasses}
                  alt="Focentra Business Edition"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="min-h-screen snap-start flex items-center py-20 px-6 md:px-12 bg-surface">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-32">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-4">Master Your Environment.</h2>
              <p className="text-on-surface-variant font-headline uppercase tracking-[0.2em] text-xs">Choose your frame and focus plan</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-5xl mx-auto">
              {/* Hardware Block */}
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="bg-surface-container-low p-12 md:p-16 transition-colors group cursor-default"
              >
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h4 className="font-headline text-2xl font-bold uppercase tracking-widest mb-2">Hardware</h4>
                    <p className="text-on-surface-variant text-sm font-headline">The Focentra Glasses</p>
                  </div>
                  <Cpu className="text-secondary group-hover:scale-110 transition-transform" size={40} />
                </div>
                <div className="mb-16">
                  <span className="text-5xl font-bold font-headline">12,000 TL</span>
                  <span className="text-on-surface-variant text-sm block mt-2">One-time purchase</span>
                </div>
                <ul className="space-y-6 mb-16 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary"></div> Titanium-Infused Frame</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary"></div> Electrochromic Dimming Lenses</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary"></div> 48h Battery Reserve</li>
                </ul>
                <button className="w-full bg-on-surface text-surface py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors">
                  Acquire Device
                </button>
              </motion.div>

              {/* Premium Plan Block */}
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="bg-surface-container-highest p-12 md:p-16 transition-colors group cursor-default relative"
              >
                <div className="absolute top-0 right-0 bg-secondary text-black px-4 py-1 font-headline text-[10px] font-bold uppercase tracking-widest">Recommended</div>
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h4 className="font-headline text-2xl font-bold uppercase tracking-widest mb-2">Premium Plan</h4>
                    <p className="text-on-surface-variant text-sm font-headline">The Cognitive Layer</p>
                  </div>
                  <Zap className="text-secondary group-hover:scale-110 transition-transform" size={40} />
                </div>
                <div className="mb-16">
                  <span className="text-5xl font-bold font-headline">120 TL</span>
                  <span className="text-on-surface-variant text-sm inline-block ml-2">/ month</span>
                </div>
                <ul className="space-y-6 mb-16 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3 text-on-surface"><div className="w-1.5 h-1.5 bg-secondary"></div> Advanced AI Analytics</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary"></div> Deep-Focus History</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-secondary"></div> Personalized Cognitive Mapping</li>
                </ul>
                <button className="w-full bg-secondary text-black py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                  Unlock Insights
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="min-h-screen snap-start flex items-center justify-center py-20 px-6 md:px-12 bg-surface-container-lowest text-center relative overflow-hidden">
          <div className="z-10 relative">
            <h2 className="font-headline text-[5rem] md:text-[9rem] font-bold tracking-tighter text-white/5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">FOCENTRA</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <p className="font-headline uppercase tracking-[0.5em] text-xs text-secondary mb-8">Ascend Beyond Distraction</p>
              <h3 className="font-headline text-4xl md:text-6xl font-bold mb-16">Enter the Monolith.</h3>
              <button className="bg-white text-black px-16 py-6 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-secondary hover:text-black transition-all active:scale-95">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
        <footer className="w-full border-t border-white/5 bg-black py-12 px-6 md:px-12 snap-start">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
              © 2026 FOCENTRA. THE ABSOLUTE MONOLITH.
            </div>
            <div className="flex gap-12">
              <a href="#" className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors">Legal</a>
              <a href="#" className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors">Privacy</a>
              <a href="#" className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
