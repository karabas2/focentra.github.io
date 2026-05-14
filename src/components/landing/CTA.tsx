import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline font-black text-5xl md:text-7xl mb-8 leading-[1.1] tracking-tighter text-gradient">
            Transform Attention <br /> Into <span className="text-accent-gradient">Actionable Intelligence.</span>
          </h2>
          <p className="text-on-background/60 text-xl max-w-2xl mx-auto mb-12">
            The era of mindless distraction is over. Step into the future of human focus today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="btn-primary py-4 px-10 text-lg flex items-center justify-center gap-2">
                Join Beta <ArrowRight size={20} />
             </button>
             <button className="btn-secondary py-4 px-10 text-lg">
                Schedule Demo
             </button>
          </div>
          <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.4em] text-on-background/30">Investor Deck Available Upon Request</p>
        </motion.div>
      </div>
    </section>
  );
}
