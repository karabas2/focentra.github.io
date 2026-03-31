import { motion } from "motion/react";
import { ArrowLeft, Building2, LayoutDashboard, Palette, Headset, CheckCircle2 } from "lucide-react";
import enterpriseTeam from "./assets/focentra_enterprise_team.png";

interface BusinessSolutionsProps {
  onBack: () => void;
}

export default function BusinessSolutions({ onBack }: BusinessSolutionsProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-secondary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md py-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-secondary group transition-colors font-headline uppercase tracking-widest text-[10px]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <div className="text-xl font-bold tracking-tighter text-white font-headline">
            FOCENTRA <span className="text-secondary/50 font-normal ml-2">ENTERPRISE</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="text-secondary font-headline uppercase tracking-[0.4em] text-[10px] block">Corporate Scalability</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Empower your <br /><span className="text-secondary text-glow">organization's</span> <br />deep focus.
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed max-w-lg">
                Focentra Enterprise is more than hardware. It's a comprehensive cognitive infrastructure designed to maximize the collective throughput of your entire workforce.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-white text-black px-10 py-4 font-headline font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-colors">
                  Contact Sales
                </button>
                <button className="border border-white/10 hover:border-secondary px-10 py-4 font-headline uppercase tracking-widest text-xs transition-colors">
                  Request Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <img src={enterpriseTeam} alt="Enterprise Focus Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-surface py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <h2 className="font-headline text-4xl font-bold mb-4">Enterprise-Only Capabilities</h2>
              <p className="text-on-surface-variant uppercase tracking-widest text-[10px]">Built for performance at scale</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {[
                {
                  icon: <LayoutDashboard size={24} />,
                  title: "Centralized Fleet",
                  desc: "Configure and manage hundreds of devices from a single web-based dashboard."
                },
                {
                  icon: <Building2 size={24} />,
                  title: "Bulk Procurement",
                  desc: "Custom pricing models for large-scale deployments and direct logistics support."
                },
                {
                  icon: <Palette size={24} />,
                  title: "Corporate Branding",
                  desc: "Precision engraved logos and corporate color matching for the Focentra frames."
                },
                {
                  icon: <Headset size={24} />,
                  title: "Priority support",
                  desc: "24/7 dedicated account management and hardware replacement warranty."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-background p-10 hover:bg-white/5 transition-colors group">
                  <div className="text-secondary mb-8 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                  <h3 className="font-headline font-bold text-lg mb-4">{feature.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-32 max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <h2 className="font-headline text-4xl font-bold">How we work with you.</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Assessment", desc: "We analyze your work environment and team requirements to tailor the Focentra configuration." },
                  { step: "02", title: "Deployment", desc: "Batch delivery and onboarding sessions for your team to ensure maximum adoption." },
                  { step: "03", title: "Integration", desc: "Connect Focentra data to your internal performance metrics for cognitive insights." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-secondary font-headline font-bold text-lg">{step.step}</span>
                    <div className="space-y-2">
                      <h4 className="font-bold text-white">{step.title}</h4>
                      <p className="text-sm text-on-surface-variant">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-surface p-12 md:p-16 border border-white/5 space-y-8">
              <div className="flex items-center gap-4 text-xs font-headline uppercase tracking-[0.2em] text-secondary">
                <CheckCircle2 size={16} />
                Enterprise Package Included
              </div>
              <ul className="space-y-4 text-on-surface-variant">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Custom Branding</span> <span className="text-white">Included</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Fleet API Access</span> <span className="text-white">Full</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>On-site Maintenance</span> <span className="text-white">Available</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Cognitive Data Vault</span> <span className="text-white">Standard</span></li>
              </ul>
              <button className="w-full bg-secondary text-black py-4 font-headline font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                BİZİMLE İLETİŞİME GEÇ
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
            © 2026 FOCENTRA ENTERPRISE.
          </div>
        </div>
      </footer>
    </div>
  );
}
