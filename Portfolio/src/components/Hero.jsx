import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef([]);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef([]);
  const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();

  const target = document.querySelector(targetId);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[8%] w-32 h-32 border border-cyan-300/40 rounded-2xl rotate-12" />
        <div className="absolute bottom-[20%] right-[15%] w-40 h-40 border border-slate-300/40 rounded-full" />
        <div className="absolute top-[30%] left-[12%] w-16 h-16 bg-emerald-300/40 rounded-lg rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] mb-8">
            <span
              ref={(el) => (headingRef.current[0] = el)}
              className="block"
            >
              Transform Your
            </span>
            <span
              ref={(el) => (headingRef.current[1] = el)}
              className="block text-cyan-500"
            >
              Business Growth
            </span>
          </h1>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto mb-12"
          >
            We craft stunning websites and digital solutions that turn visitors
            into loyal customers.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
             onClick={(e) => handleSmoothScroll(e, "#contact")}
            className=" scroll-smooth inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-white text-lg font-medium hover:bg-cyan-600 transition">
              Get a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </button>

            <button 
             onClick={(e) => handleSmoothScroll(e, "#portfolio")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-cyan-500/40 text-cyan-600 text-lg font-medium hover:bg-cyan-500/10 transition">
              <span className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                <Play className="h-4 w-4 text-cyan-600 fill-cyan-600" />
              </span>
              View Our Work
            </button>
          </div>

          {/* Stats */}
          {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Done" },
              { value: "5.0", label: "Average Rating" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
