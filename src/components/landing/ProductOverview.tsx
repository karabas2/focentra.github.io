import { motion } from "motion/react";
import { Eye, Activity, Brain, Layout, Map, List } from "lucide-react";
import glassesImg from "../../assets/focentra_glasses.png";

export default function ProductOverview() {
  const features = [
    { icon: <Eye size={20} />, title: "Eye Tracking", desc: "Precision gaze detection monitors where your attention is focused." },
    { icon: <Activity size={20} />, title: "Focus Scoring", desc: "Real-time algorithmic scoring of your current cognitive state." },
    { icon: <Brain size={20} />, title: "Behavior Analysis", desc: "AI identifies patterns in how you get distracted and why." },
    { icon: <Layout size={20} />, title: "AI Dashboard", desc: "Comprehensive view of your productivity trends and bottlenecks." },
    { icon: <Map size={20} />, title: "Attention Heatmaps", desc: "Visualize where your focus is being spent throughout the day." },
    { icon: <List size={20} />, title: "Productivity Timeline", desc: "Minute-by-minute breakdown of your flow states and interruptions." }
  ];

  return (
    <section className="py-32 px-6 bg-surface">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src={glassesImg} 
              alt="Focentra Product" 
              className="w-full h-auto relative z-10 drop-shadow-2xl animate-float"
            />
            {/* UI Tags */}
            <div className="absolute top-1/4 -left-10 glass-card p-3 flex items-center gap-3 animate-float animation-delay-1000">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Neural Link Active</span>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Hardware + Software</motion.p>
            <h2 className="font-headline font-black text-4xl md:text-5xl mb-8 leading-tight">
              A Symphony of <br /> <span className="text-accent-gradient">Intelligence.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div 
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <div className="text-primary mb-4">{f.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                  <p className="text-sm text-on-background/40 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
