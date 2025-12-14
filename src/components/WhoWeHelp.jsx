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
      "Plumbers, electricians, contractors, salons, restaurants, clinics, and other service-based businesses looking to reach more local customers.",
    benefits: [
      "Attract nearby customers searching online",
      "Showcase your services professionally",
      "Build trust with reviews and testimonials",
    ],
  },
  {
    icon: Users,
    title: "Small & Growing Businesses",
    description:
      "SMEs ready to establish or improve their digital presence to compete effectively in today's online marketplace.",
    benefits: [
      "Professional website that builds credibility",
      "Digital tools to scale your operations",
      "Ongoing support as you grow",
    ],
  },
];

const WhoWeHelpSection = () => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            markers:true,
          trigger: headerRef.current,
          start: "top 50%",
          once: true,
        },
      }
    );

    // Cards animation (left & right)
    gsap.fromTo(
      cardRefs.current,
       { opacity: 0} ,
      {
        opacity: 1,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
            markers:true,
          trigger: cardRefs.current[0],
          start: "top 50%",
          once: true,

        },
      }
    );
  }, []);

  return (
    <section id="who-we-help" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium mb-4">
            Who We Help
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built for{" "}
            <span className="text-cyan-500">Your Business</span>
          </h2>

          <p className="text-lg text-slate-500">
            We specialize in helping local businesses and SMEs thrive in the
            digital world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="
                bg-white rounded-3xl p-8 lg:p-10
                border border-slate-200
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              {/* Top */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <audience.icon className="h-8 w-8 text-cyan-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-slate-500">
                    {audience.description}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {audience.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">
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

