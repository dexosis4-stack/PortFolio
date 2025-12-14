import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="relative bg-cyan-500 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background glow blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Free Business Audit
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business Online?
            </h2>

            {/* Subtext */}
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Book a free consultation and get a personalized roadmap for improving
              your digital presence. No obligations, just actionable insights.
            </p>

            {/* CTA Button */}
            <button
              className="
                inline-flex items-center gap-2
                px-8 py-4
                rounded-xl
                bg-white text-cyan-600
                font-semibold text-lg
                hover:bg-white/90
                transition-all duration-300
                shadow-lg
              "
            >
              Book Your Free Audit
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
