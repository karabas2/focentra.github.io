import { useState } from "react";
import LandingPage from "./LandingPage";
import BusinessSolutions from "./BusinessSolutions";
import Dashboard from "./components/demo/Dashboard";

export default function App() {
  const [page, setPage] = useState<"home"|"business"|"dashboard">("home");

  if (page === "business") {
    return <BusinessSolutions onBack={() => { setPage("home"); window.scrollTo(0,0); }} />;
  }

  if (page === "dashboard") {
    return <Dashboard onBack={() => { setPage("home"); window.scrollTo(0,0); }} />;
  }

  return (
    <LandingPage 
      onBusiness={() => { setPage("business"); window.scrollTo(0,0); }} 
      onLaunchDemo={() => { setPage("dashboard"); window.scrollTo(0,0); }}
    />
  );
}
