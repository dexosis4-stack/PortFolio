import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Bright Smile Dental",
    category: "Healthcare",
    description:
      "A modern, patient-friendly website for a local dental clinic that increased appointment bookings by 80%.",
    color: "from-cyan-400/30 to-blue-400/30",
  },
  {
    title: "HomeFirst Plumbing",
    category: "Home Services",
    description:
      "Professional landing page with local SEO that put this plumbing business on the first page of Google.",
    color: "from-emerald-400/30 to-teal-400/30",
  },
  {
    title: "Bella's Boutique",
    category: "Retail",
    description:
      "E-commerce ready website for a fashion boutique that expanded their customer reach beyond their local area.",
    color: "from-pink-400/30 to-rose-400/30",
  },
];

const PortfolioSection = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

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

    // Cards
    gsap.set(cardsRef.current, { opacity: 0, y: 40 });

    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
        once: true,
      },
    });

    // CTA
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium mb-4">
            Our Work
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Projects That{" "}
            <span className="text-cyan-500">Deliver</span>
          </h2>

          <p className="text-lg text-slate-500">
            See how we've helped businesses like yours achieve their digital goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Preview */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-cyan-500">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-cyan-500" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-xs font-medium text-cyan-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-14">
<button className="
  inline-flex items-center gap-2
  px-7 py-3
  rounded-xl
  border border-cyan-500/40
  text-cyan-600 font-medium
  hover:bg-cyan-500/10
  hover:border-cyan-500
  transition-all duration-300
">
  View All Projects
  <ExternalLink className="h-4 w-4" />
</button>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
