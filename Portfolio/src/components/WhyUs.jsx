import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Zap, DollarSign, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Target,
    title: "Result-Driven Thinking",
    description:
      "Every decision we make is tied to outcomes — visibility, leads, conversions, and sustainable growth.",
  },
  {
    icon: Zap,
    title: "Clear & Transparent Process",
    description:
      "Straightforward workflows, honest communication, and no unnecessary complexity.",
  },
  {
    icon: DollarSign,
    title: "Designed for Growing Businesses",
    description:
      "Thoughtful pricing and scalable solutions built for businesses that want to move forward.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We stay involved beyond launch, continuously refining and supporting your digital presence.",
  },
];

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HEADER */
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      /* ITEMS */
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-20 sm:py-24 lg:py-36 bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="max-w-xl lg:max-w-3xl mb-14 sm:mb-18 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-600 block">
            Why Dexosis
          </span>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Built on clarity,
            <br />
            focused on results
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-xl">
            We partner with businesses that value thoughtful execution,
            transparency, and long-term impact.
          </p>
        </div>

        {/* REASONS */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 max-w-5xl">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="
                group
                relative
                rounded-2xl
                bg-white
                border border-slate-200
                p-6 sm:p-0
                sm:rounded-none sm:bg-transparent sm:border-0
                sm:pl-12 sm:border-l sm:border-slate-200
                transition-colors duration-300
                hover:border-cyan-500
              "
            >
              {/* Icon */}
              <div
                className="
                  absolute sm:left-0 sm:top-0
                  left-6 top-6
                  w-10 h-10
                  rounded-lg
                  bg-cyan-500/10
                  flex items-center justify-center
                  transition-colors duration-300
                  group-hover:bg-cyan-500
                "
              >
                <reason.icon className="h-5 w-5 text-cyan-600 group-hover:text-white transition-colors" />
              </div>

              {/* Text */}
              <h3 className="mt-14 sm:mt-0 text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                {reason.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
