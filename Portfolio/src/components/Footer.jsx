import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Design", href: "#services" },
      { name: "Landing Pages", href: "#services" },
      { name: "Local SEO", href: "#services" },
      { name: "Digital Growth", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/dexosis_web/?hl=en", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1220] to-[#0A1020] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              DEXOSIS
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              Helping local businesses and SMEs build powerful digital presences
              that drive growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center
                             hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-400 mb-5 max-w-xs">
              Get tips on growing your business online.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:underline"
            >
              Subscribe to updates →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} DEXOSIS. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
