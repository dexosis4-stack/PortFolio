import { useState } from "react";
import WelcomeScreen from "./components/welcomeScreen";
import Landing from "./components/landing";
import { Toaster } from "./components/Ui/toaster";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Toaster /> 

      {loading && <WelcomeScreen onComplete={() => setLoading(false)} />}
      {!loading && <Landing />}
    </>
  );
}
