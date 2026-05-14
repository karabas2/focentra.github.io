import { motion } from "motion/react";
import { ShieldCheck, Lock, EyeOff, Server, Check } from "lucide-react";
import privacyGlasses from "../../assets/privacy_glasses.png";

export default function Privacy() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <motion.p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Security First</motion.p>
            <h2 className="font-headline font-black text-4xl md:text-5xl mb-8 leading-tight">
              Privacy is our <br /> <span className="text-accent-gradient">Foundation.</span>
            </h2>
            <p className="text-on-background/60 text-lg mb-10 leading-relaxed">
              We believe attention data is the most intimate information a person has. Focentra is built from the ground up with local-first processing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: <Lock />, title: "On-Device AI", desc: "All behavioral models run locally. No video stream ever hits the cloud." },
                 { icon: <ShieldCheck />, title: "Full Encryption", desc: "Metadata is encrypted with AES-256 before any sync occurs." },
                 { icon: <EyeOff />, title: "User Ownership", desc: "You own 100% of your data. Export or delete it at any time." },
                 { icon: <Server />, title: "GDPR/KVKK", desc: "Fully compliant with global privacy standards by design." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-on-background/40 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-12 p-6 glass border-primary/20 rounded-2xl flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Check size={24} />
               </div>
               <p className="text-sm font-bold leading-tight">
                 "Raw video and attention data never leaves the device. <br /> 
                 <span className="text-primary">That is our promise."</span>
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 relative group"
          >
             <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <div className="relative glass-card p-4 md:p-8 overflow-hidden">
                <img 
                  src={privacyGlasses} 
                  alt="Privacy Hardware" 
                  className="w-full h-auto rounded-xl drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Scanning Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                   <motion.div 
                     animate={{ y: ["-100%", "200%"] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                     className="w-full h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50"
                   />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
