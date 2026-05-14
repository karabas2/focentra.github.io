import { motion } from "motion/react";
import { Cpu, Zap, Brain, Shield, Rocket } from "lucide-react";

export default function CompetitiveAdvantage() {
  const advantages = [
    { icon: <Brain />, title: "Adaptive AI", desc: "Our system doesn't just track focus; it adapts to your unique neural patterns over time." },
    { icon: <Cpu />, title: "Edge Processing", desc: "Proprietary hardware handles heavy AI computation locally, ensuring speed and privacy." },
    { icon: <Zap />, title: "Real-time Loop", desc: "The fastest feedback loop in the industry—from distraction to correction in <100ms." },
    { icon: <Shield />, title: "Privacy-Native", desc: "Built with a privacy-first architecture that satisfies the strictest enterprise requirements." },
    { icon: <Rocket />, title: "Scalable SaaS", desc: "A robust software layer that transforms wearable data into organizational intelligence." }
  ];

  return (
    <section className="py-32 px-6 bg-surface/30">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <motion.p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">The Advantage</motion.p>
            <h2 className="font-headline font-black text-4xl md:text-5xl mb-8 leading-tight">
              Why we <br /> <span className="text-accent-gradient">Lead.</span>
            </h2>
            <p className="text-on-background/60 text-lg">
              Focentra isn't just a gadget. It's the infrastructure for the next generation of productive work.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
             {advantages.map((adv, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group hover:border-primary/40 transition-all"
               >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                     {adv.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-3">{adv.title}</h4>
                  <p className="text-sm text-on-background/40 leading-relaxed">{adv.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
