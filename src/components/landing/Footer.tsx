export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">F</div>
              <span className="font-headline font-black text-xl tracking-tighter">FOCENTRA</span>
            </div>
            <p className="text-sm text-on-background/40 max-w-xs leading-relaxed">
              Empowering human potential through the intersection of wearable hardware and behavioral AI.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Product</h5>
            <ul className="space-y-4 text-sm text-on-background/40">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wearable</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SaaS Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Company</h5>
            <ul className="space-y-4 text-sm text-on-background/40">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Social</h5>
            <ul className="space-y-4 text-sm text-on-background/40">
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Github</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary">Legal</h5>
            <ul className="space-y-4 text-sm text-on-background/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-on-background/20">
          <div>© 2026 FOCENTRA INTELLIGENCE SYSTEMS INC.</div>
          <div className="flex gap-8">
             <span>San Francisco, CA</span>
             <span>Berlin, DE</span>
             <span>Istanbul, TR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
