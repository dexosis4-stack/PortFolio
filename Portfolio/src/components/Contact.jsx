import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("access_key", "067af692-d762-4cc3-a582-733357fc32f6");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("subject", "New message — Dexosis");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        toast.success("Message sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/8421083349?text=Hi, I'd like to discuss a project.",
      "_blank"
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-36 lg:py-44 bg-[#f8fafc] relative rounded-b-3xl z-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* EYEBROW */}
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">
          Contact
        </p>

        {/* HEADLINE */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight max-w-3xl">
          Let’s talk about
          <br />
          what you’re building
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg text-slate-600 max-w-xl">
          Share a few details about your project.  
          We’ll respond with clarity and next steps.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-20 max-w-xl grid gap-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="
              w-full h-12
              border-b border-slate-300
              bg-transparent
              placeholder:text-slate-400
              focus:outline-none
              focus:border-slate-900
              transition-colors
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="
              w-full h-12
              border-b border-slate-300
              bg-transparent
              placeholder:text-slate-400
              focus:outline-none
              focus:border-slate-900
              transition-colors
            "
          />

          <textarea
            name="message"
            rows={3}
            placeholder="Briefly describe your project"
            required
            value={formData.message}
            onChange={handleChange}
            className="
              w-full
              border-b border-slate-300
              bg-transparent
              resize-none
              placeholder:text-slate-400
              focus:outline-none
              focus:border-slate-900
              transition-colors
            "
          />

          {/* ACTIONS */}
          <div className="flex items-center gap-8 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="
                group
                inline-flex items-center gap-2
                text-slate-900
                font-semibold text-lg
                transition-colors
                hover:text-slate-700
                disabled:opacity-50
              "
            >
              {loading ? "Sending…" : "Send message"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={openWhatsApp}
              className="text-slate-500 hover:text-slate-700 transition"
            >
              or WhatsApp instead
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
