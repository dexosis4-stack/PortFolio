import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const lineRefs = useRef([]);
  const powerRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------------- INTRO REVEAL ---------------- */
      gsap.set([subRef.current, ctaRef.current], { opacity: 0, y: 24 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .fromTo(
          lineRefs.current,
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.15,
          }
        )
        .fromTo(
          powerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .to(
          subRef.current,
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );

      /* ---------------- SUBTLE CURSOR PARALLAX (DESKTOP) ---------------- */
      if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener("mousemove", (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 20;
          const y = (e.clientY / window.innerHeight - 0.5) * 20;

          gsap.to(powerRef.current, {
            x,
            y,
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.to(glowRef.current, {
            x: e.clientX - window.innerWidth / 2,
            y: e.clientY - window.innerHeight / 2,
            duration: 1,
            ease: "power3.out",
          });
        });
      }

      /* ---------------- PIN & EXIT INTO NEXT SECTION ---------------- */
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
        },
      });

      exitTl
        .to(contentRef.current, {
          y: -520,
          ease: "none",
        })
        .to(
          contentRef.current,
          {
            scale: 0.92,
            opacity: 0.85,
            ease: "none",
          },
          0
        )
        .to(
          glowRef.current,
          {
            opacity: 0,
            ease: "none",
          },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[140px]" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.95] mb-10">
              {["THIS IS HOW", "WE BUILD"].map((text, i) => (
                <div key={i} className="overflow-hidden">
                  <span
                    ref={(el) => (lineRefs.current[i] = el)}
                    className="block"
                  >
                    {text}
                  </span>
                </div>
              ))}

              <div
                ref={powerRef}
                className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                DIGITAL POWER
              </div>
            </h1>

            {/* Subheading */}
            <p
              ref={subRef}
              className="text-lg sm:text-xl text-white/65 max-w-2xl mx-auto mb-14"
            >
              Not websites. Not apps.
              <br />
              We engineer digital experiences built to perform.
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <a href="#contact">
              <button
                ref={ctaRef}
                className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-black font-medium text-base hover:bg-white/90 transition"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm">
        Scroll
      </div>
    </section>
  );
}
