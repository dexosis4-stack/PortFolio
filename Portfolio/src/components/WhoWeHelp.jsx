import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Users, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    icon: Building2,
    title: "Local Service Providers",
    description:
      "Businesses that rely on trust, visibility, and local demand to grow consistently.",
    benefits: [
      "Be visible where customers are searching",
      "Present services with clarity and authority",
      "Turn visits into real enquiries",
    ],
  },
  {
    icon: Users,
    title: "Small & Growing Businesses",
    description:
      "Ambitious teams ready to compete digitally and scale with confidence.",
    benefits: [
      "Build credibility from day one",
      "Create systems that support growth",
      "Partner with a long-term digital team",
    ],
  },
];

const WhoWeHelpSection = () => {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- WELCOME TEXT (SCROLL TRIGGERED) ---------- */
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        headingRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      /* ---------- PANELS ---------- */
      gsap.fromTo(
        panelRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-help"
      className="
        relative
        py-24 sm:py-28 lg:py-40
        bg-[#0b1220]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <div className="max-w-xl lg:max-w-3xl mb-16 sm:mb-20 lg:mb-24">
          <span
            ref={labelRef}
            className="text-xs uppercase tracking-widest text-cyan-400 block"
          >
            Who We Help
          </span>

          <h2
            ref={headingRef}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
          >
            <span className="block">Designed for businesses</span>
            <span className="block">that take growth seriously</span>
          </h2>

          <p
            ref={paraRef}
            className="mt-5 sm:mt-6 text-base sm:text-lg text-white/70 max-w-xl"
          >
            We work with focused businesses that want clarity, performance,
            and long-term digital value — not quick fixes.
          </p>
        </div>

        {/* PANELS */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              ref={(el) => (panelRefs.current[index] = el)}
              className="
                group
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8 sm:p-10 lg:p-12
                transition-all duration-500
                hover:bg-white/10
              "
            >
              {/* Ambient light */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-transparent
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Header */}
              <div className="relative z-10 flex gap-5 mb-8">
                <div className="
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-xl
                  bg-cyan-500/15
                  flex items-center justify-center
                  group-hover:bg-cyan-500
                  transition-colors
                ">
                  <audience.icon className="h-6 w-6 text-cyan-400 group-hover:text-white transition-colors" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-white/70 max-w-md text-sm sm:text-base">
                    {audience.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 h-px w-full bg-white/10 mb-6" />

              {/* Benefits */}
              <div className="relative z-10 space-y-4">
                {audience.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-4">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 leading-relaxed text-sm sm:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
