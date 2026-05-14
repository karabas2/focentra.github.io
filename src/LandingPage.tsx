import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import Problem from "./components/landing/Problem";
import Comparison from "./components/landing/Comparison";
import ProductOverview from "./components/landing/ProductOverview";
import HowItWorks from "./components/landing/HowItWorks";
import LiveDemo from "./components/landing/LiveDemo";
import Privacy from "./components/landing/Privacy";
import Market from "./components/landing/Market";
import BusinessModel from "./components/landing/BusinessModel";
import CompetitiveAdvantage from "./components/landing/CompetitiveAdvantage";
import Roadmap from "./components/landing/Roadmap";
import Team from "./components/landing/Team";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";

interface LandingPageProps {
  onBusiness: () => void;
  onLaunchDemo: () => void;
}

export default function LandingPage({ onBusiness, onLaunchDemo }: LandingPageProps) {
  return (
    <div className="bg-background text-on-background selection:bg-primary/30">
      <Header />
      <main>
        <Hero onLaunchDemo={onLaunchDemo} />
        <Problem />
        <Comparison />
        <ProductOverview />
        <HowItWorks />
        <LiveDemo />
        <Privacy />
        <Market />
        <BusinessModel />
        <CompetitiveAdvantage />
        <Roadmap />
        <Team />
        
        {/* Placeholder for business transition if needed */}
        <section className="py-20 flex justify-center">
           <button 
            onClick={onBusiness}
            className="text-xs font-bold uppercase tracking-widest text-on-background/20 hover:text-primary transition-colors"
           >
             Switch to Enterprise View
           </button>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
