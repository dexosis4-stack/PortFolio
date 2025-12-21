import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to book a free business audit with Dexosis."
    );
    window.open(`https://wa.me/8421083349?text=${message}`, "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Container entrance */
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      /* Content sequence (mobile-friendly) */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 28,
            duration: 0.6,
            ease: "power3.out",
          },
          "+=0.05"
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "+=0.05"
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            y: 24,
            scale: 0.96,
            duration: 0.5,
            ease: "power3.out",
          },
          "+=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div
          ref={sectionRef}
          className="
            relative
            rounded-3xl
            border border-slate-200
            bg-gradient-to-br from-white via-cyan-50/60 to-white
            px-5 py-8
            sm:p-14
            lg:p-20
            overflow-hidden
          "
        >
          {/* Ambient light */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-cyan-500/10
                text-cyan-600
                text-sm font-medium
                mb-5
              "
            >
              <Calendar className="h-4 w-4" />
              Free Business Audit
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="
                text-[clamp(1.6rem,6vw,3rem)]
                font-semibold
                text-slate-900
                mb-4
                leading-tight
              "
            >
              Ready to improve your
              <br className="hidden sm:block" />
              digital presence?
            </h2>

            {/* Text */}
            <p
              ref={textRef}
              className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              Get a clear, honest review of your website and online presence —
              with practical recommendations tailored to your business.
            </p>

            {/* CTA */}
            <button
              ref={buttonRef}
              onClick={openWhatsApp}
              className="
                group
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                px-8 py-4
                rounded-xl
                bg-cyan-600 text-white
                font-semibold text-lg
                transition-all duration-200
                hover:bg-cyan-500
                hover:shadow-[0_10px_28px_-12px_rgba(6,182,212,0.45)]
                active:translate-y-[1px]
                focus:outline-none
              "
            >
              Book your free audit
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Trust note */}
            <p className="mt-5 text-sm text-slate-500">
              No pressure. No sales pitch. Just useful insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
