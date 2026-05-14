import { motion } from "motion/react";
import { AlertCircle, ZapOff, Clock, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <TrendingDown size={24} />,
      title: "Productivity Loss",
      value: "$8.8T",
      desc: "Annual global productivity loss due to workplace disengagement and distractions."
    },
    {
      icon: <ZapOff size={24} />,
      title: "Attention Fragmentation",
      value: "47%",
      desc: "Of workers say they struggle to focus for more than 30 minutes at a time."
    },
    {
      icon: <Clock size={24} />,
      title: "Context Switching",
      value: "23min",
      desc: "Average time it takes to regain focus after a single digital interruption."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Burnout Crisis",
      value: "76%",
      desc: "Of professionals experience burnout caused by cognitive overload and fragmentation."
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-surface/50">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            The Crisis
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline font-black text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            The Modern <br /> <span className="text-on-background/40">Attention Crisis.</span>
          </motion.h2>
          <p className="text-on-background/60 text-lg leading-relaxed">
            In an era of digital overload, our attention is being mined, fragmented, and sold. The cost isn't just time—it's our ability to do deep, meaningful work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                {p.icon}
              </div>
              <div className="text-4xl font-black font-headline mb-2 text-gradient">{p.value}</div>
              <h3 className="font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-sm text-on-background/40 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Interruption Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <AlertCircle size={200} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black font-headline mb-4">Interruption Visualization</h3>
              <p className="text-on-background/60 mb-8">
                Typical knowledge workers switch tasks every 3 minutes. Each switch creates "attention residue," lowering cognitive performance by up to 40%.
              </p>
              <div className="space-y-6">
                 {[
                   { label: "Deep Work Capacity", val: 20, color: "bg-red-500" },
                   { label: "Surface Level Tasking", val: 85, color: "bg-primary" },
                 ].map(bar => (
                   <div key={bar.label}>
                     <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                       <span>{bar.label}</span>
                       <span>{bar.val}%</span>
                     </div>
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.val}%` }}
                        className={`h-full ${bar.color}`} 
                       />
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 h-48 items-end">
               {Array.from({ length: 15 }).map((_, i) => (
                 <motion.div 
                  key={i}
                  animate={{ height: [40, 100, 60, 120, 30][i % 5] + "%" }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                  className="w-full bg-primary/20 rounded-t-sm"
                 />
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
