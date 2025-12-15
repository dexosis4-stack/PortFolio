import { useLayoutEffect, useRef } from "react";
import ServicesSection from "./Services";
import WhoWeHelpSection from "./WhoWeHelp";
import WhyUsSection from "./WhyUs.Jsx";
import PortfolioSection from "./Projects";
import HeroSection from "./Hero";
import CTASection from "./CTA";
import ContactSection from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import gsap from "gsap";

const Landing = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <div ref={containerRef} className="container opacity-0 mx-auto">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <WhyUsSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
