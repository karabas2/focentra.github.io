import { motion } from "motion/react";
import { Check, Zap, Briefcase, GraduationCap } from "lucide-react";

export default function BusinessModel() {
  const plans = [
    {
      icon: <GraduationCap size={24} />,
      name: "Academic",
      price: "99",
      period: "per month",
      features: ["Standard Focus Tracking", "Basic Behavioral Analytics", "Student Discount Available", "Web App Access"],
      btn: "Join Waitlist",
      highlight: false
    },
    {
      icon: <Zap size={24} />,
      name: "Professional",
      price: "249",
      period: "per month",
      features: ["Real-time Fatigue Detection", "Advanced AI Insights", "Wearable Integration", "Priority Support"],
      btn: "Start Free Trial",
      highlight: true
    },
    {
      icon: <Briefcase size={24} />,
      name: "Enterprise",
      price: "Custom",
      period: "per user/month",
      features: ["Fleet Management", "Team Productivity Analytics", "API Access", "Custom Integration"],
      btn: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-headline font-black text-4xl md:text-5xl mb-6"
          >
            Sustainable <span className="text-primary">Growth.</span>
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mt-8">
             <span className="text-sm font-bold opacity-60">Monthly</span>
             <div className="w-12 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center px-1">
                <div className="w-4 h-4 rounded-full bg-primary" />
             </div>
             <span className="text-sm font-bold">Yearly</span>
             <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-full">Save 20%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col ${plan.highlight ? "border-primary/40 shadow-2xl shadow-primary/10 scale-105 z-10" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                   Most Popular
                </div>
              )}
              <div className="text-primary mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-black font-headline mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black font-headline">{plan.price === "Custom" ? "" : "$"}{plan.price}</span>
                <span className="text-sm text-on-background/40 font-bold">{plan.period}</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                 {plan.features.map(f => (
                   <div key={f} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-on-background/60">{f}</span>
                   </div>
                 ))}
              </div>
              <button className={plan.highlight ? "btn-primary w-full" : "btn-secondary w-full"}>
                {plan.btn}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-card p-8 text-center max-w-4xl mx-auto border-dashed">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                 <h4 className="font-bold text-xl mb-2">Hardware Device</h4>
                 <p className="text-sm text-on-background/40">Premium Focentra Smart Glasses starting at <span className="text-white font-bold">$349</span>. One-time purchase.</p>
              </div>
              <button className="btn-secondary">Explore Hardware</button>
           </div>
        </div>
      </div>
    </section>
  );
}
