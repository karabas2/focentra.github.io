import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";

export default function Team() {
  const members = [
    { name: "Alex Chen", role: "AI & Neural Systems", bio: "Ex-OpenAI, 10+ years in deep learning and cognitive modeling.", img: "https://i.pravatar.cc/150?u=alex" },
    { name: "Sarah Jenkins", role: "Hardware Engineering", bio: "Specializes in ultra-low power wearable circuitry and optics.", img: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Marcus Thorne", role: "Product Strategy", bio: "Led product teams at Stripe and Linear. Focused on SaaS growth.", img: "https://i.pravatar.cc/150?u=marcus" },
    { name: "Elena Rossi", role: "UX / UI Design", bio: "Human-computer interaction specialist with a focus on immersive UI.", img: "https://i.pravatar.cc/150?u=elena" }
  ];

  return (
    <section className="py-32 px-6 bg-surface/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 className="font-headline font-black text-4xl md:text-5xl mb-6">Built by <span className="text-accent-gradient">Experts.</span></motion.h2>
          <p className="text-on-background/60 max-w-2xl mx-auto">
            Our team brings together leaders from top AI labs, hardware firms, and software companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {members.map((m, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group text-center"
             >
                <div className="relative mb-6 inline-block">
                   <div className="absolute inset-0 bg-primary/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full relative z-10 border-2 border-white/10 group-hover:border-primary/40 transition-all grayscale group-hover:grayscale-0" />
                </div>
                <h4 className="font-bold text-xl mb-1">{m.name}</h4>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{m.role}</div>
                <p className="text-xs text-on-background/40 leading-relaxed mb-6">{m.bio}</p>
                <div className="flex justify-center gap-4 text-on-background/40">
                   <Linkedin size={18} className="hover:text-primary transition-colors cursor-pointer" />
                   <Github size={18} className="hover:text-primary transition-colors cursor-pointer" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
