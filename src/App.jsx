import { useState } from "react";
import WelcomeScreen from "./components/welcomeScreen";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <WelcomeScreen onComplete={() => setLoading(false)} />}
        
      {!loading &&<> <Navbar/> <Landing/></>}
      
    </>
  );
}
