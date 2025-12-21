import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import dexosisLogo from "../assets/Dexosis.png";
import dexosisLogoWhite from "../assets/Dexosis.png";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Who We Help", href: "#who-we-help" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  /* ================= MOBILE ================= */
  const mobileNavRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const [open, setOpen] = useState(false);

  /* ================= DESKTOP ================= */
  const desktopNavRef = useRef(null);
  const [isDarkHero, setIsDarkHero] = useState(true);

  /* ---------- MOBILE INIT ---------- */
  useEffect(() => {
    gsap.fromTo(
      mobileNavRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
    );
  }, []);

  /* ---------- MOBILE MENU ---------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.to(line1.current, { y: 8, rotate: 45, duration: 0.3 });
      gsap.to(line2.current, { opacity: 0, duration: 0.2 });
      gsap.to(line3.current, { y: -8, rotate: -45, duration: 0.3 });

      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.45, ease: "power3.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          delay: 0.15,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      document.body.style.overflow = "auto";

      gsap.to([line1.current, line3.current], {
        y: 0,
        rotate: 0,
        duration: 0.3,
      });
      gsap.to(line2.current, { opacity: 1, duration: 0.2 });

      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [open]);

  /* ---------- DESKTOP SCROLL LOGIC ---------- */
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsDarkHero(!scrolled);

      gsap.to(desktopNavRef.current, {
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.75)"
          : "rgba(0,0,0,0.25)",
        backdropFilter: "blur(14px)",
        boxShadow: scrolled
          ? "0 8px 30px rgba(0,0,0,0.08)"
          : "none",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= MOBILE NAV ================= */}
      <nav
        ref={mobileNavRef}
        className="
          md:hidden
          fixed top-0 left-0 right-0 z-50
          h-14 px-4
          flex items-center justify-between
          bg-black/90 backdrop-blur-md
        "
      >
        <img src={dexosisLogoWhite} alt="DEXOSIS" className="h-7 w-auto" />

        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 flex items-center justify-center"
        >
          <span ref={line1} className="absolute w-6 h-[2px] bg-white rounded" />
          <span ref={line2} className="absolute w-6 h-[2px] bg-white rounded" />
          <span ref={line3} className="absolute w-6 h-[2px] bg-white rounded" />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        className="
          md:hidden
          fixed top-0 left-0 right-0 z-40
          h-screen w-full
          bg-black text-white
          flex items-center justify-center
          -translate-y-full opacity-0
        "
      >
        <div className="flex flex-col items-center gap-8 text-xl font-medium">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => setOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav
        ref={desktopNavRef}
        className={`
          hidden md:block
          fixed top-0 left-0 right-0 z-50
          rounded-b-3xl
          transition-colors
          ${isDarkHero ? "text-white" : "text-slate-900"}
        `}
        style={{ height: 80 }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <img
            src={isDarkHero ? dexosisLogoWhite : dexosisLogo}
            alt="DEXOSIS"
            className="h-12 w-auto"
          />

          <div className="flex gap-10 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  after:absolute after:-bottom-1 after:left-0
                  after:h-px after:w-0 after:bg-current
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
