import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Zap, DollarSign, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Target,
    title: "Result-Driven Approach",
    description:
      "Every decision we make is focused on achieving measurable results for your business—more leads, more customers, more growth.",
  },
  {
    icon: Zap,
    title: "Simple & Transparent Process",
    description:
      "No confusing jargon or hidden steps. We keep things clear, straightforward, and easy to understand at every stage.",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description:
      "Quality digital services don't have to break the bank. We offer competitive pricing designed for growing businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Continuous optimization and support to ensure your digital presence keeps delivering.",
  },
];

const WhyUsSection = () => {
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

 useEffect(() => {
  // Header
  gsap.fromTo(
    headerRef.current,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        once: true,
      },
    }
  );

  // 🔥 IMPORTANT FIX
  gsap.set(itemsRef.current, {
    opacity: 0,
    y: 30,
  });

  gsap.to(itemsRef.current, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: itemsRef.current[0],
      start: "top 85%",
      once: true,
    },
  });
}, []);


  return (
    <section
      id="why-us"
      className="py-20 lg:py-32 bg-slate-950 text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Partner with{" "}
            <span className="text-cyan-400">DEXOSIS</span>
          </h2>

          <p className="text-lg text-slate-400">
            We're committed to your success with an approach that puts your
            business goals first.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex items-start gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="h-7 w-7 text-cyan-400" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
