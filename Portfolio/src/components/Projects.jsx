import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
   {
    title: "The Beary Goodies",
    category: "Pet Bakery • Singapore",
    description:
      "A premium pet bakery website designed for a Singapore-based brand, focused on aesthetic visuals, smooth browsing, and higher order conversions.",
    image: "/bearygoodies.png", // 🔥 add screenshot here
    link: "https://thebearygoodies.vercel.app",
  },
  {
    title: "Resin Art",
    category: "Shopping",
    description: "Aesthetic resin art showcase with smooth UI.",
    image: "/resin.png",
    link: "https://bhairaveecreattions.in/",
  },
];

const PortfolioSection = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Header Animation
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

    // Cards Animation
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

    // CTA Animation
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
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium mb-4">
            Our Work
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Projects That <span className="text-cyan-500">Convert</span>
          </h2>

          <p className="text-lg text-slate-500">
            Real websites built to generate leads, sales, and growth.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-medium">
                    View Live
                    <ExternalLink className="h-4 w-4" />
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
            </a>
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