import { motion, AnimatePresence } from "motion/react";
import {
   LayoutDashboard,
   Clock,
   Brain,
   Calendar,
   Zap,
   TrendingUp,
   Bell,
   Settings,
   User,
   Coffee,
   Moon,
   ChevronRight,
   Plus,
   Play,
   Music,
   Thermometer,
   Volume2,
   Sun,
   ShieldCheck,
   CheckCircle2,
   Sparkles,
   Search,
   Filter
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Dashboard({ onBack }: { onBack: () => void }) {
   const [activeTab, setActiveTab] = useState("insights");
   const [isSyncing, setIsSyncing] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setIsSyncing(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="min-h-screen bg-[#02020e] text-on-background font-body flex selection:bg-primary/30">
         {/* Sidebar */}
         <aside className="w-72 border-r border-white/5 hidden lg:flex flex-col p-8 fixed h-full bg-[#050515] z-20">
            <div className="flex items-center gap-3 mb-16">
               <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">F</div>
               <span className="font-headline font-black text-2xl tracking-tighter">FOCENTRA</span>
            </div>

            <nav className="space-y-3 flex-1">
               {[
                  { id: "insights", label: "Neural Insights", icon: <LayoutDashboard size={20} /> },
                  { id: "planner", label: "AI Smart Planner", icon: <Calendar size={20} /> },
                  { id: "biometrics", label: "Bio-Metrics", icon: <Brain size={20} /> },
                  { id: "environment", label: "Environment Sync", icon: <Sun size={20} /> },
               ].map((item) => (
                  <button
                     key={item.id}
                     onClick={() => setActiveTab(item.id)}
                     className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${activeTab === item.id
                           ? "bg-primary text-white shadow-xl shadow-primary/20"
                           : "text-on-background/40 hover:text-white hover:bg-white/5"
                        }`}
                  >
                     {item.icon}
                     {item.label}
                  </button>
               ))}
            </nav>

            <div className="space-y-6">
               <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex justify-between items-center mb-3">
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest">Neural Sync</span>
                     <div className={`w-2 h-2 rounded-full ${isSyncing ? "bg-green-500 animate-pulse" : "bg-green-500"}`} />
                  </div>
                  <p className="text-[10px] text-on-background/40 leading-relaxed font-bold">Encrypted biometric stream active.</p>
               </div>
               <button onClick={onBack} className="w-full py-4 rounded-2xl border border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-on-background/20 hover:text-white hover:border-white/20 transition-all">
                  Exit Platform
               </button>
            </div>
         </aside>

         {/* Main Content */}
         <main className="flex-1 lg:ml-72 p-4 md:p-8 lg:p-16 relative">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10" />

            <header className="flex justify-between items-start mb-16">
               <div>
                  <div className="flex items-center gap-3 mb-3">
                     <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">Alpha 2.4</span>
                     <div className="flex items-center gap-1.5 text-[10px] font-bold text-on-background/40">
                        <Clock size={12} />
                        Last update: 2m ago
                     </div>
                  </div>
                  <h1 className="text-5xl font-black font-headline tracking-tighter mb-2">Hello, Alperen.</h1>
                  <p className="text-on-background/40 font-semibold text-lg">Your <span className="text-primary">Flow State</span> is predicted in <span className="text-white">12 minutes</span>.</p>
               </div>

               <div className="flex items-center gap-6">
                  <div className="hidden xl:flex flex-col items-end">
                     <div className="flex items-center gap-2 mb-2">
                        {[1, 1, 1, 0].map((v, i) => (
                           <div key={i} className={`w-5 h-2 rounded-full ${v ? "bg-primary" : "bg-white/10"}`} />
                        ))}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-on-background/40">Cognitive Bandwidth</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center relative hover:bg-white/5 transition-all cursor-pointer group">
                     <Bell size={24} className="text-on-background/60 group-hover:text-white" />
                     <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full border-2 border-[#02020e]" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent p-px">
                     <div className="w-full h-full rounded-2xl bg-[#02020e] flex items-center justify-center transition-transform hover:scale-95 cursor-pointer">
                        <User size={24} />
                     </div>
                  </div>
               </div>
            </header>

            <AnimatePresence mode="wait">
               {activeTab === "insights" && <NeuralInsights key="insights" />}
               {activeTab === "planner" && <SmartPlanner key="planner" />}
               {activeTab === "biometrics" && <Biometrics key="biometrics" />}
               {activeTab === "environment" && <Environment key="environment" />}
            </AnimatePresence>
         </main>
      </div>
   );
}

function NeuralInsights() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
         <div className="lg:col-span-2 glass-card p-12 relative overflow-hidden flex flex-col min-h-[500px]">
            <div className="flex justify-between items-center mb-16">
               <div>
                  <h3 className="text-2xl font-black font-headline mb-1 tracking-tight">Attention Density</h3>
                  <p className="text-sm text-on-background/40 font-medium">Correlation between biometric signals and active gaze focus.</p>
               </div>
               <div className="flex gap-2">
                  {["Day", "Week", "Month"].map(t => (
                     <button key={t} className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${t === "Day" ? "bg-primary text-white" : "bg-white/5 text-on-background/40 hover:text-white hover:bg-white/10"}`}>{t}</button>
                  ))}
               </div>
            </div>

            <div className="flex-1 flex items-end gap-2 mb-12 min-h-[250px]">
               {[45, 30, 25, 15, 60, 85, 95, 92, 70, 55, 65, 80, 85, 75, 45, 35, 40, 65, 85, 75, 60, 45, 30, 20].map((v, i) => (
                  <div key={i} className="flex-1 h-full flex flex-col justify-end items-center gap-4 group/bar">
                     <div className="absolute bottom-16 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-primary text-white text-[10px] font-bold px-2 py-1 rounded mb-2 z-10">{v}%</div>
                     <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${v}%` }}
                        transition={{ duration: 1.5, delay: i * 0.03, ease: [0.23, 1, 0.32, 1] }}
                        className={`w-full min-w-[8px] rounded-full transition-all duration-500 group-hover/bar:scale-x-150 ${i >= 5 && i <= 8 ? "bg-primary shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "bg-white/[0.1] group-hover/bar:bg-primary/40"}`}
                     />
                     <span className="text-[9px] font-black opacity-20 tracking-tighter group-hover/bar:opacity-100 transition-opacity">{i}h</span>
                  </div>
               ))}
            </div>

            <div className="grid grid-cols-3 gap-12 pt-10 border-t border-white/5">
               {[
                  { label: "Deep Work Capacity", val: "4.8h", trend: "+14%", desc: "Daily Average" },
                  { label: "Context Switches", val: "12", trend: "-28%", desc: "Focus Leaks" },
                  { label: "Neural Recovery", val: "94%", trend: "+2%", desc: "Sleep Impact" }
               ].map(stat => (
                  <div key={stat.label}>
                     <div className="text-[10px] font-black uppercase tracking-widest text-on-background/40 mb-2">{stat.label}</div>
                     <div className="flex items-baseline gap-3 mb-1">
                        <div className="text-3xl font-black font-headline tracking-tighter">{stat.val}</div>
                        <div className="text-[10px] font-black text-green-500 flex items-center gap-1">
                           <TrendingUp size={10} /> {stat.trend}
                        </div>
                     </div>
                     <div className="text-[9px] font-bold opacity-30 uppercase tracking-widest">{stat.desc}</div>
                  </div>
               ))}
            </div>
         </div>

         <div className="space-y-8">
            <div className="glass-card p-10 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 relative group overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                     <Zap size={24} />
                  </div>
                  <div>
                     <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-0.5">Focus Alert</div>
                     <span className="font-black font-headline text-xl tracking-tight">Active Pulse</span>
                  </div>
               </div>
               <div className="text-6xl font-black font-headline text-gradient mb-4">94.2%</div>
               <p className="text-sm text-on-background/60 font-medium leading-relaxed">You are in a <span className="text-primary font-bold">prime flow state</span>. Digital distractions have been automatically suppressed.</p>
            </div>

            <div className="glass-card p-10 group cursor-pointer hover:border-accent/40 transition-all">
               <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                     <Music size={28} />
                  </div>
                  <Sparkles size={16} className="text-accent animate-pulse" />
               </div>
               <h4 className="text-xl font-black font-headline mb-2 tracking-tight">Neural Sync Audio</h4>
               <p className="text-sm text-on-background/40 leading-relaxed mb-8 font-medium">Binaural beats detected. Adjusting frequency to <span className="text-accent font-bold">40Hz Gamma</span> to match current neural firing rates.</p>
               <button className="w-full py-4 rounded-xl bg-accent/5 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-widest hover:bg-accent hover:text-white transition-all">
                  Initialize Sync
               </button>
            </div>
         </div>
      </motion.div>
   );
}

function SmartPlanner() {
   const [tasks, setTasks] = useState([
      { id: 1, time: "08:00 - 10:00", task: "Algorithm Design: Neural Core", type: "Deep Focus", status: "AI Recommended", reason: "Morning Neural Peak", completed: true },
      { id: 2, time: "10:30 - 11:30", task: "Communication & Admin", type: "Low Energy", status: "Scheduled", reason: "Predicted Focus Dip", completed: false },
      { id: 3, time: "13:00 - 14:30", task: "System Architecture Review", type: "High Intensity", status: "AI Recommended", reason: "Post-Recovery Window", completed: false },
      { id: 4, time: "15:00 - 16:30", task: "Weekly Developer Sync", type: "Collaborative", status: "Fixed", reason: "Standard Slot", completed: false },
      { id: 5, time: "17:00 - 18:00", task: "Deep Learning Model Polish", type: "Medium Load", status: "AI Adjusted", reason: "Energy Conservation", completed: false },
   ]);

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.98 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.98 }}
         className="grid grid-cols-1 xl:grid-cols-12 gap-12"
      >
         <div className="xl:col-span-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div>
                  <h2 className="text-4xl font-black font-headline tracking-tighter mb-1">AI Adaptive Schedule</h2>
                  <div className="flex items-center gap-2">
                     <Sparkles size={14} className="text-primary" />
                     <p className="text-sm text-on-background/40 font-bold">Generated at 07:15 AM based on your REM sleep & Neural history.</p>
                  </div>
               </div>
               <div className="flex gap-3">
                  <button className="p-4 rounded-2xl glass border-white/5 text-on-background/40 hover:text-white transition-all"><Search size={20} /></button>
                  <button className="p-4 rounded-2xl glass border-white/5 text-on-background/40 hover:text-white transition-all"><Filter size={20} /></button>
                  <button className="btn-primary py-4 px-8 text-xs font-black flex items-center gap-3">
                     <Plus size={18} /> New Session
                  </button>
               </div>
            </div>

            <div className="space-y-6">
               {tasks.map((s, i) => (
                  <motion.div
                     key={s.id}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className={`glass-card p-8 flex flex-col md:flex-row md:items-center gap-8 group transition-all duration-500 relative overflow-hidden ${s.completed ? "opacity-30 grayscale" : "hover:bg-white/[0.04] hover:border-primary/20"}`}
                  >
                     {s.status.includes("AI") && <div className="absolute top-0 left-0 w-1 h-full bg-primary" />}

                     <div className="flex flex-col gap-1 min-w-[140px]">
                        <span className="text-[10px] font-black text-on-background/30 uppercase tracking-[0.2em]">{s.time}</span>
                        <div className={`text-lg font-black tracking-tight ${s.completed ? "line-through" : "group-hover:text-primary transition-colors"}`}>{s.task}</div>
                     </div>

                     <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                           <div className="text-[9px] font-black text-on-background/20 uppercase tracking-widest mb-1.5">Load Type</div>
                           <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border ${s.type.includes("Deep") || s.type.includes("High")
                                 ? "bg-primary/10 text-primary border-primary/20"
                                 : "bg-white/5 text-on-background/30 border-white/5"
                              }`}>
                              {s.type}
                           </span>
                        </div>
                        <div>
                           <div className="text-[9px] font-black text-on-background/20 uppercase tracking-widest mb-1.5">AI Reason</div>
                           <div className="text-[10px] font-bold text-on-background/60 flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {s.reason}
                           </div>
                        </div>
                        <div className="hidden md:block">
                           <div className="text-[9px] font-black text-on-background/20 uppercase tracking-widest mb-1.5">Status</div>
                           <div className="flex items-center gap-2">
                              {s.status.includes("AI") ? <Sparkles size={12} className="text-primary" /> : <div className="w-3 h-3 rounded-full border-2 border-white/10" />}
                              <span className="text-[10px] font-black uppercase tracking-widest">{s.status}</span>
                           </div>
                        </div>
                     </div>

                     <button
                        onClick={() => setTasks(prev => prev.map(t => t.id === s.id ? { ...t, completed: !t.completed } : t))}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all flex-shrink-0 ${s.completed ? "bg-primary text-white" : "bg-white/5 text-on-background/20 border border-white/5 hover:border-primary/40 hover:text-primary"}`}
                     >
                        <CheckCircle2 size={28} />
                     </button>
                  </motion.div>
               ))}
            </div>
         </div>

         <div className="xl:col-span-4 space-y-12">
            <div className="glass-card p-10 bg-[#050515] relative overflow-hidden flex flex-col min-h-[400px]">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                  <Sparkles size={200} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-2xl font-black font-headline mb-6 tracking-tight">Autonomous Optimization</h3>
                  <p className="text-on-background/60 text-sm leading-relaxed mb-12 font-medium">
                     Focentra's core AI has detected a <span className="text-white font-bold">sleep deficit</span> (REM: 52m).
                     Your entire weekly schedule has been re-balanced to prioritize recovery and prevent cognitive burnout.
                  </p>

                  <div className="space-y-6">
                     {[
                        { icon: <Zap />, label: "Dynamic Rescheduling", active: true },
                        { icon: <Volume2 />, label: "Environmental Focus Lock", active: true },
                        { icon: <ShieldCheck />, label: "Distraction Fortress", active: true }
                     ].map((toggle, i) => (
                        <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-all">
                           <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${toggle.active ? "bg-primary/20 text-primary shadow-lg shadow-primary/5" : "bg-white/5 text-on-background/20"}`}>
                                 {toggle.icon}
                              </div>
                              <span className="text-sm font-black tracking-tight">{toggle.label}</span>
                           </div>
                           <div className={`w-14 h-7 rounded-full transition-all flex items-center px-1 cursor-pointer ${toggle.active ? "bg-primary justify-end shadow-lg shadow-primary/20" : "bg-white/10 justify-start"}`}>
                              <div className="w-5 h-5 rounded-full bg-white shadow-xl" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="glass-card p-10 border-primary/40 bg-primary/5 group cursor-pointer hover:scale-[1.02] transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full" />
               <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                     <Play size={32} fill="white" />
                  </div>
                  <div className="text-right">
                     <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Session Starts In</div>
                     <div className="text-4xl font-black font-headline tracking-tighter">04:12</div>
                  </div>
               </div>
               <div>
                  <h4 className="text-2xl font-black font-headline tracking-tight mb-2">Deep Work: Neural Models</h4>
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-on-background/40">Hardware Synced & Optimized</span>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
}

function Biometrics() {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.98 }}
         animate={{ opacity: 1, scale: 1 }}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
         {[
            { icon: <Brain />, label: "Cognitive Load", val: "42%", sub: "Optimal Capacity", color: "text-primary" },
            { icon: <Zap />, label: "Neural Response", val: "1.2ms", sub: "Ultra-Fast", color: "text-accent" },
            { icon: <Clock />, label: "Blink Frequency", val: "14/min", sub: "Hydration Good", color: "text-green-500" },
            { icon: <Sun />, label: "Retinal Focus", val: "98.4", sub: "Point Precision", color: "text-yellow-500" }
         ].map((b, i) => (
            <div key={i} className="glass-card p-10 hover:border-primary/20 transition-all group">
               <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center ${b.color} mb-8 group-hover:scale-110 transition-transform`}>
                  {b.icon}
               </div>
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-background/30 mb-2">{b.label}</div>
               <div className="text-4xl font-black font-headline tracking-tighter mb-3">{b.val}</div>
               <div className={`text-[10px] font-black uppercase tracking-widest ${b.color} flex items-center gap-2`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${b.color.replace('text', 'bg')}`} />
                  {b.sub}
               </div>
            </div>
         ))}
         <div className="lg:col-span-4 glass-card p-12 mt-4 relative overflow-hidden min-h-[300px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
            <div className="text-center relative z-10">
               <h3 className="text-2xl font-black font-headline mb-4 tracking-tight">Neural Correlation Engine</h3>
               <p className="text-on-background/40 max-w-lg mx-auto font-medium">Historical mapping of your neural response times against focus duration is currently being synchronized with your local node.</p>
            </div>
         </div>
      </motion.div>
   );
}

function Environment() {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
         <div className="glass-card p-12 flex flex-col items-center text-center group hover:border-primary/40 transition-all">
            <div className="w-24 h-24 rounded-[32px] bg-primary/10 flex items-center justify-center text-primary mb-10 shadow-2xl shadow-primary/5 group-hover:scale-110 transition-transform duration-500">
               <Thermometer size={48} />
            </div>
            <h3 className="text-2xl font-black font-headline mb-2 tracking-tight">Ambient Temperature</h3>
            <div className="text-6xl font-black font-headline mb-6 tracking-tighter">22.4°C</div>
            <div className="px-6 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-4">OPTIMAL ZONE</div>
            <p className="text-sm text-on-background/40 font-medium leading-relaxed px-4">AI detected a focus increase at <span className="text-white">21.5°C</span>. Lowering smart climate control by 1°.</p>
         </div>

         <div className="glass-card p-12 flex flex-col items-center text-center group hover:border-accent/40 transition-all">
            <div className="w-24 h-24 rounded-[32px] bg-accent/10 flex items-center justify-center text-accent mb-10 shadow-2xl shadow-accent/5 group-hover:scale-110 transition-transform duration-500">
               <Volume2 size={48} />
            </div>
            <h3 className="text-2xl font-black font-headline mb-2 tracking-tight">Sonic Isolation</h3>
            <div className="text-6xl font-black font-headline mb-6 tracking-tighter">34dB</div>
            <div className="px-6 py-2 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20 mb-4">DEEP ISOLATION</div>
            <p className="text-sm text-on-background/40 font-medium leading-relaxed px-4">Minimal environmental noise. Active focus locking engaged for <span className="text-accent font-bold">High Intensity</span> tasks.</p>
         </div>

         <div className="glass-card p-12 flex flex-col items-center text-center group hover:border-yellow-500/40 transition-all">
            <div className="w-24 h-24 rounded-[32px] bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-10 shadow-2xl shadow-yellow-500/5 group-hover:scale-110 transition-transform duration-500">
               <Sun size={48} />
            </div>
            <h3 className="text-2px font-black font-headline mb-2 tracking-tight">Luminous Flux</h3>
            <div className="text-6xl font-black font-headline mb-6 tracking-tighter">420lx</div>
            <div className="px-6 py-2 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-black uppercase tracking-widest border border-yellow-500/20 mb-4">READING FOCUS</div>
            <p className="text-sm text-on-background/40 font-medium leading-relaxed px-4">Dynamic lighting adjusted for screen-based focus. Blue light filter <span className="text-yellow-500 font-bold">Off</span>.</p>
         </div>
      </motion.div>
   );
}
