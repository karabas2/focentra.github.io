import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const features = [
    "Real-time AI analysis",
    "Wearable integration",
    "Personalized recommendations",
    "Cognitive fatigue detection",
    "Live feedback",
    "Enterprise analytics",
    "Adaptive AI system"
  ];

  const others = [false, false, false, false, false, false, false];
  const focentra = [true, true, true, true, true, true, true];

  return (
    <section className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-headline font-black text-4xl md:text-5xl mb-6"
          >
            Built for a <span className="text-accent-gradient">New Standard.</span>
          </motion.h2>
          <p className="text-on-background/60 max-w-2xl mx-auto">
            Traditional tools track time. Focentra tracks intelligence. See how we redefine the productivity landscape.
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="p-6 md:p-8 text-xs font-bold uppercase tracking-widest text-on-background/40">Feature</div>
            <div className="p-6 md:p-8 text-xs font-bold uppercase tracking-widest text-on-background/40 text-center">Typical Apps</div>
            <div className="p-6 md:p-8 text-xs font-bold uppercase tracking-widest text-primary text-center bg-primary/5">Focentra AI</div>
          </div>

          {features.map((feature, i) => (
            <motion.div 
              key={feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              <div className="p-6 md:p-8 text-sm font-semibold">{feature}</div>
              <div className="p-6 md:p-8 flex justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500/50">
                   <X size={14} />
                </div>
              </div>
              <div className="p-6 md:p-8 flex justify-center items-center bg-primary/5">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 + i * 0.1 }}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40"
                >
                   <Check size={18} strokeWidth={3} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
