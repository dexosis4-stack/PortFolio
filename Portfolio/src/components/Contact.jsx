import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ================= GSAP Animations ================= */
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  /* ================= Handlers ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const submissionData = new FormData();
  submissionData.append("access_key", "067af692-d762-4cc3-a582-733357fc32f6");
  submissionData.append("name", formData.name);
  submissionData.append("email", formData.email);
  submissionData.append("phone", formData.phone);
  submissionData.append("message", formData.message);
  submissionData.append("subject", "New Contact Message - Dexosis");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message Sent!", {
        description: "We'll contact you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Submission Failed", {
        description: "Please try again later.",
      });
    }
  } catch (error) {
    toast.error("Network Error", {
      description: "Please check your connection and try again.",
    });
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};


  const openWhatsApp = () => {
    window.open(
      "https://wa.me/8421083349?text=Hi! I'm interested in your services.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-medium mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Start a{" "}
            <span className="text-cyan-500">Conversation</span>
          </h2>

          <p className="text-lg text-slate-500">
            Have a question or ready to discuss your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div
            ref={formRef}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input type="hidden" name="botcheck" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-cyan-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-600 transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>


            </form>
          </div>

          {/* Info */}
          <div ref={infoRef} className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Prefer a quick chat?
                </h4>
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium text-slate-900">
                      dexosis4@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium text-slate-900">
                      Serving businesses worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-xl p-5">
                <p className="text-sm text-cyan-700">
                  <strong>Quick Response:</strong> We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
