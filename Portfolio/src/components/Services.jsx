import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Layout, Search, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Layout,
    title: "Website Design & Development",
    description:
      "Modern, scalable websites built with clarity, performance, and business intent.",
    demo: "https://food-site-ten-chi.vercel.app/",
  },
  {
    icon: Globe,
    title: "Business Landing Pages",
    description:
      "Conversion-focused landing experiences designed to guide action and intent.",
    demo: "https://dummysite-ten.vercel.app/",
  },
  {
    icon: Search,
    title: "Google Visibility & Local SEO",
    description:
      "Strategic SEO solutions that help customers find you at the right moment.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Solutions",
    description:
      "Long-term digital strategies focused on growth, reach, and sustainability.",
  },
];

const ServicesSection = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#f9fbfc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div ref={headerRef} className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-widest text-cyan-600 font-medium">
            Capabilities
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Digital solutions
            <br />
            built for real growth
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We help businesses design, launch, and scale digital experiences
            that are clear, effective, and built to last.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="
                relative group
                bg-white
                rounded-2xl
                p-8
                border border-slate-200/70
                transition-all duration-300
                hover:border-cyan-500/50
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)]
              "
            >
              {/* Accent bar */}
              <div
                className="
                  absolute left-0 top-0 h-full w-1
                  bg-cyan-500
                  scale-y-0
                  origin-top
                  transition-transform duration-300
                  group-hover:scale-y-100
                "
              />

              {/* Icon */}
              <div
                className="
                  w-12 h-12 mb-6
                  rounded-xl
                  bg-slate-100
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-cyan-500
                "
              >
                <service.icon
                  className="
                    h-6 w-6 text-slate-600
                    transition-colors duration-300
                    group-hover:text-white
                  "
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Live Example (visible hint + hover reward) */}
              {service.demo && (
                <a
                  href={service.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    mt-6
                    text-sm font-medium
                    text-cyan-600
                    opacity-60
                    relative
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[1px] after:w-full
                    after:bg-cyan-600
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    group-hover:opacity-100
                    group-hover:after:scale-x-100
                    transition-all duration-300
                  "
                >
                  View live website →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
