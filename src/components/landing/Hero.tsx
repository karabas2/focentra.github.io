import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import heroGlasses from "../../assets/focentra_hero.png";

export default function Hero({ onLaunchDemo }: { onLaunchDemo: () => void }) {
  return (
    <section id="product" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next-Gen Wearable Intelligence
          </motion.div>
          
          <h1 className="font-headline font-black text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-8 text-gradient">
            Focus Smarter <br />
            <span className="text-accent-gradient">in the Age of <br /> Distraction.</span>
          </h1>
          
          <p className="text-on-background/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Focentra uses AI-powered attention tracking and wearable intelligence to optimize productivity, reduce cognitive fatigue, and deliver personalized focus insights in real time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onLaunchDemo}
              className="btn-primary flex items-center justify-center gap-2 group px-10"
            >
              Enter Platform <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={12} fill="white" />
              </div>
              Product Vision
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
             {/* Mock investor logos could go here */}
             <span className="font-headline font-bold text-lg tracking-widest">A16Z</span>
             <span className="font-headline font-bold text-lg tracking-widest">SEQUOIA</span>
             <span className="font-headline font-bold text-lg tracking-widest">YCOMBINATOR</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          <div className="relative z-10 animate-float">
            <img 
              src={heroGlasses} 
              alt="Focentra Smart Glasses" 
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            />
          </div>
          
          {/* Floating Analytics Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 md:right-0 glass-card p-4 w-48 shadow-2xl"
          >
            <div className="text-[10px] uppercase font-bold text-primary mb-2">Attention Score</div>
            <div className="text-3xl font-black font-headline">94.2%</div>
            <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-4 md:left-0 glass-card p-4 w-56 shadow-2xl"
          >
            <div className="text-[10px] uppercase font-bold text-accent mb-2">Cognitive Load</div>
            <div className="flex items-end gap-2">
               <div className="h-8 w-3 bg-accent/40 rounded-sm" />
               <div className="h-12 w-3 bg-accent/60 rounded-sm" />
               <div className="h-6 w-3 bg-accent/20 rounded-sm" />
               <div className="h-10 w-3 bg-accent/80 rounded-sm" />
               <div className="h-14 w-3 bg-accent rounded-sm" />
            </div>
            <div className="text-[10px] text-on-background/40 mt-2">Optimal State Detected</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
