import { useState } from "react";
import WelcomeScreen from "./components/welcomeScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <WelcomeScreen onComplete={() => setLoading(false)} />}
      {!loading && <div className="app-content">Your main app content goes here.</div>}
    </>
  );
}
