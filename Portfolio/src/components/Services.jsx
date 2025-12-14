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
      "Modern, responsive websites that look great on all devices and drive real business results.",
    image:""
  },
  {
    icon: Globe,
    title: "Business Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into leads and customers.",
  },
  {
    icon: Search,
    title: "Google Visibility & Local SEO",
    description:
      "Get found by customers searching for your services in your local area.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Solutions",
    description:
      "Comprehensive strategies to grow your online presence and expand your customer base.",
  },
];

const ServicesSection = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "linear",
        scrollTrigger: {
          markers: false,
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0,  },
      {
        opacity: 1,
        duration: 0.5,
        ease: "linear",
        stagger: 0.2,
        scrollTrigger: {
          markers: false,
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium">
            What We Do
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Solutions That Drive{" "}
            <span className="text-cyan-500">Results</span>
          </h2>

          <p className="text-lg text-slate-500">
            We offer focused digital services that help local businesses establish
            a strong online presence and attract more customers.
          </p>
        </div>

        {/* Cards */}
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((service, index) => (
    <div
      key={service.title}
      ref={(el) => (cardsRef.current[index] = el)}
      className="
        group
        bg-white rounded-3xl p-8
        border border-slate-200
        shadow-sm
        cursor-pointer
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-lg
      "
    >
      <div
        className="
          w-14 h-14 rounded-2xl
          bg-cyan-100
          flex items-center justify-center mb-6
          transition-all duration-300
          group-hover:bg-cyan-500
          group-hover:scale-110
        "
      >
        <service.icon
          className="
            h-7 w-7 text-cyan-500
            transition-colors duration-300
            group-hover:text-white
          "
        />
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-4">
        {service.title}
      </h3>

      <p className="text-slate-500 leading-relaxed">
        {service.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServicesSection;
