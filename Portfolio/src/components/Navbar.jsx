import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import dexosisLogo from "../assets/dexosisLogonew.png"; // adjust path if needed
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);


useEffect(() => {
  gsap.fromTo(
    navbarRef.current,
    {opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    }
  );
}, []);


  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Who We Help", href: "#who-we-help" },
    { name: "Why Us", href: "#why-us" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <nav ref={navbarRef} className="navbar z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 justify-center items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-600 hover:text-black transition py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="mt-2 px-5 py-2 rounded-lg bg-black text-white"
                onClick={() => {
                  setIsOpen(false);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;