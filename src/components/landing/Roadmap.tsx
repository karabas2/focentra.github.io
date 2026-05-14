import { motion } from "motion/react";

export default function Roadmap() {
  const phases = [
    { phase: "Phase 01", title: "University Beta", status: "Completed", items: ["MVP Prototype", "Neural Model Training", "Early Access Program"] },
    { phase: "Phase 02", title: "Productivity Platform", status: "Current", items: ["Consumer Hardware Launch", "Mobile App v1.0", "Advanced Analytics Tier"] },
    { phase: "Phase 03", title: "Enterprise Expansion", status: "Q4 2026", items: ["Fleet Management Tools", "API Ecosystem", "SLA & Priority Support"] },
    { phase: "Phase 04", title: "Global AI Ecosystem", status: "2027", items: ["Developer SDK", "Health & Wellness Integration", "Global Logistics"] }
  ];

  return (
    <section className="py-32 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-headline font-black text-4xl md:text-5xl mb-6">Execution <span className="text-primary">Timeline.</span></h2>
          <p className="text-on-background/60 max-w-2xl mx-auto">
            From university research to a global standard for human-AI collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Timeline Line */}
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />
           
           {phases.map((p, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
             >
                <div className="glass-card p-8 h-full relative z-10 flex flex-col">
                   <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{p.phase}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.status === "Current" ? "bg-primary/10 border-primary/40 text-primary" : "border-white/10 text-on-background/40"}`}>
                        {p.status}
                      </span>
                   </div>
                   <h4 className="font-bold text-xl mb-6">{p.title}</h4>
                   <ul className="space-y-3 flex-1">
                      {p.items.map(item => (
                        <li key={item} className="text-xs text-on-background/40 flex items-center gap-2">
                           <div className="w-1 h-1 rounded-full bg-primary" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-xl shadow-primary/40 hidden lg:block" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
