import React, { useLayoutEffect, useRef } from "react";
import ServicesSection from "./Services.jsx";
import WhoWeHelpSection from "./WhoWeHelp.jsx";
import WhyUsSection from "./WhyUs.jsx";
// import PortfolioSection from "./Projects";
import HeroSection from "./Hero.jsx";
import CTASection from "./CTA.jsx";
import ContactSection from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
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
    <div ref={containerRef} className="container opacity-0">
    <div className="sticky top-0 z-50">
      <Navbar />

    </div>
      <HeroSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <WhyUsSection />
      {/* <PortfolioSection />  */}
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
