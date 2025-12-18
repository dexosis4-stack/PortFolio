import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import dexosisLogo from "../assets/DexosisLogonew.png";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);

  // Navbar entry animation
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  // Full-screen mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  // Menu ↔ Cross animation
  useEffect(() => {
    if (!menuIconRef.current || !closeIconRef.current) return;

    if (isOpen) {
      gsap.to(menuIconRef.current, {
        rotate: 90,
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.fromTo(
        closeIconRef.current,
        { rotate: -90, opacity: 0 },
        { rotate: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    } else {
      gsap.to(closeIconRef.current, {
        rotate: -90,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.fromTo(
        menuIconRef.current,
        { rotate: 90, opacity: 0 },
        { rotate: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    // { name: "Portfolio", href: "#portfolio" },
    { name: "Who We Help", href: "#who-we-help" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img
                src={dexosisLogo}
                alt="DEXOSIS"
                className="h-50 w-50 object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a href="#contact">
                <button className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-90 transition">
                  Get a Free Consultation
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span ref={menuIconRef} className="absolute">
                <Menu size={24} />
              </span>
              <span ref={closeIconRef} className="absolute opacity-0">
                <X size={24} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-white/60 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-gray-800 hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="mt-4 px-8 py-4 rounded-xl bg-black text-white text-lg">
            Get a Free Consultation
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
