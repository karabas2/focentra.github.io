import { motion } from "motion/react";
import { Cpu, Database, BarChart, Bell, Settings, Layers } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: <Settings />, title: "Wearable Sensors", desc: "Integrated biosensors collect millisecond-level focus data." },
    { icon: <Database />, title: "Data Collection", desc: "Encrypted stream is processed locally on-device for total privacy." },
    { icon: <Cpu />, title: "AI Analysis", desc: "Advanced neural models analyze gaze, posture, and cognitive load." },
    { icon: <Layers />, title: "Score Generation", desc: "Focentra calculates your live productivity and fatigue metrics." },
    { icon: <Bell />, title: "Smart Alerts", desc: "Personalized haptic feedback guides you back to flow state." },
    { icon: <BarChart />, title: "Insights", desc: "Detailed analytics help you optimize your entire work week." }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-headline font-black text-4xl md:text-5xl mb-6">The Future of <span className="text-primary">Cognitive Flow.</span></h2>
          <p className="text-on-background/60 max-w-2xl mx-auto">
            From raw signals to actionable intelligence. Experience the most advanced focus engine ever built.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-primary mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/40">
                  {step.icon}
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center text-[10px] font-bold">
                    0{i+1}
                  </div>
                </div>
                <h4 className="font-bold text-base mb-2">{step.title}</h4>
                <p className="text-xs text-on-background/40 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
