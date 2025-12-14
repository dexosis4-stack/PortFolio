import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const text = "DEXOSIS";

const WelcomeScreen = ({ onComplete }) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // small delay before switching screen
        setTimeout(() => {
          onComplete();
        }, 300);
      },
    });

    tl.fromTo(
      ".letter",
      {
        y: 30,
        scale: 1.6,
        opacity: 0,
        letterSpacing: "0.8em",
        rotateX: 40,
      },
      {
        y: 0,
        rotateX: 0,
        letterSpacing: "0.1em",
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: "expo.out",
      }
    );

    tl.fromTo(
      ".tagline",
      {
        y: 30,
        scale: 1.6,
        opacity: 0,
        letterSpacing: "0.5em",
        rotateX: 40,
      },
      {
        y: 0,
        rotateX: 0,
        letterSpacing: "0.1em",
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );
    tl.fromTo(
      ".loadbar-container",
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.5"

    )

    tl.fromTo(
      ".loadBar",
      { width: "0%" },
      {
        width: "100%",
        duration: 3,
        ease: "power1.inOut",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-secondary">
      {/* Brand text */}
      <h1 className="flex text-6xl font-bold tracking-widest text-primary">
        {text.split("").map((char, index) => (
          <span key={index} className="letter inline-block">
            {char}
          </span>
        ))}
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg text-secondary-foreground/70 tagline">
        Turning Vision into Velocity
      </p>

      {/* Load bar */}
      <div className="w-52 h-1 mt-8 bg-neutral-300 overflow-hidden loadbar-container">
        <div className="h-1 bg-neutral-600 loadBar" />
      </div>
    </div>
  );
};

export default WelcomeScreen;
