import { motion } from "motion/react";
import { Activity, Bell, Battery, Brain, Zap } from "lucide-react";

export default function LiveDemo() {
  return (
    <section className="py-32 px-6 bg-surface/30">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Live Intelligence</motion.p>
            <h2 className="font-headline font-black text-4xl md:text-5xl mb-8 leading-tight">
              Real-time <br /> <span className="text-accent-gradient">Attention Engine.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Cognitive Fatigue Prediction", desc: "AI predicts burnout 30 minutes before it happens based on neural patterns." },
                { title: "Distraction Detection", desc: "Instant detection of environmental or digital focus leaks." },
                { title: "Personalized Recovery", desc: "Automated suggestion of optimal break times and durations." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1 h-auto bg-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="w-full bg-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-on-background/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Brain size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase font-bold text-on-background/40">Session Active</div>
                   <div className="text-sm font-bold">Deep Work: Architecture</div>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-green-500 font-bold text-xs">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    LIVE
                  </div>
                  <Battery size={20} className="text-on-background/40" />
               </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                 <div className="text-[10px] uppercase font-bold text-on-background/40 mb-1">Focus Score</div>
                 <div className="text-2xl font-black font-headline text-primary">88.4</div>
               </div>
               <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                 <div className="text-[10px] uppercase font-bold text-on-background/40 mb-1">Distractions</div>
                 <div className="text-2xl font-black font-headline text-accent">02</div>
               </div>
            </div>

            {/* Chart Area */}
            <div className="h-48 flex items-end gap-1 mb-8">
               {Array.from({ length: 30 }).map((_, i) => (
                 <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${20 + Math.random() * 80}%` }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                  className="flex-1 bg-gradient-to-t from-primary/5 to-primary/40 rounded-t-sm"
                 />
               ))}
            </div>

            {/* Notification */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-4 rounded-xl flex items-center gap-4 border-primary/20 shadow-xl shadow-primary/10"
            >
               <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Zap size={18} fill="white" />
               </div>
               <div>
                  <div className="text-[10px] uppercase font-bold text-primary">AI Recommendation</div>
                  <div className="text-xs font-semibold leading-snug">Focus level dropped by 22% — suggested 3-minute recovery break.</div>
               </div>
               <button className="ml-auto text-[10px] font-bold uppercase tracking-wider text-primary">Apply</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
