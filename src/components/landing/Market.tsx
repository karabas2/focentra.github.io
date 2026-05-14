import { motion } from "motion/react";
import { TrendingUp, Globe, Users, Briefcase } from "lucide-react";

export default function Market() {
  const stats = [
    { label: "Wearable AI Market", value: "$150B+", growth: "+24% CAGR" },
    { label: "Productivity SaaS", value: "$102B", growth: "+18% CAGR" },
    { label: "Knowledge Workers", value: "1.2B", growth: "Global Reach" },
    { label: "Enterprise Efficiency", value: "32%", growth: "Potential Gains" }
  ];

  return (
    <section className="py-32 px-6 bg-surface/50">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             {/* TAM / SAM / SOM chart simulation */}
             <div className="space-y-6">
                {[
                  { name: "TAM (Total Addressable Market)", val: 100, label: "$420B", color: "bg-primary/20" },
                  { name: "SAM (Serviceable Addressable Market)", val: 65, label: "$270B", color: "bg-primary/40" },
                  { name: "SOM (Serviceable Obtainable Market)", val: 25, label: "$105B", color: "bg-primary" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-on-background/60">{item.name}</span>
                       <span className="text-sm font-black text-primary">{item.label}</span>
                    </div>
                    <div className="h-12 w-full bg-white/5 rounded-xl overflow-hidden border border-white/5">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                        className={`h-full ${item.color} flex items-center px-4`}
                       />
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Investor Opportunity</motion.p>
            <h2 className="font-headline font-black text-4xl md:text-5xl mb-8 leading-tight">
              Scaling the <br /> <span className="text-accent-gradient">Attention Economy.</span>
            </h2>
            <p className="text-on-background/60 text-lg mb-12">
              We are positioned at the intersection of three explosive growth sectors: Wearable Computing, Generative AI, and Enterprise Productivity SaaS.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               {stats.map((stat, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                 >
                    <div className="text-xs font-bold text-on-background/40 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-2xl font-black font-headline text-gradient">{stat.value}</div>
                    <div className="text-[10px] font-bold text-primary mt-1">{stat.growth}</div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
