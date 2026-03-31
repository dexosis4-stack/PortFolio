import { useEffect, useRef } from "react";
import gsap from "gsap";

import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";

const products = [h1, h2, h3, h4, h5];

export default function Hero() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden px-10 py-8">

      {/* ───── TOP BAR ───── */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg tracking-[0.3em] font-light">ZEVANA</h1>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 border rounded-full" />
          <span className="w-2 h-2 border rounded-full" />
          <button className="border px-4 py-1 rounded-full text-xs tracking-widest hover:bg-white hover:text-black transition">
            CONTACT
          </button>
        </div>
      </div>

      {/* ───── HERO CONTENT ───── */}
      <div className="mt-20 grid grid-cols-12 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="col-span-3">
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Our headphones are crafted for those who demand precision,
            clarity, and presence. Designed to elevate every note.
          </p>
        </div>

        {/* CENTER CARDS */}
        <div className="col-span-6 flex items-end justify-center gap-6">

          {products.map((src, i) => {
            const layout = [
              "-rotate-[10deg] scale-[0.9] opacity-60 translate-y-[64px]",
              "-rotate-[6deg] scale-[0.95] opacity-75 translate-y-[12px]",
              "scale-[1.08] z-20 translate-y-0",
              "rotate-[6deg] scale-[0.95] opacity-75 translate-y-[12px]",
              "rotate-[10deg] scale-[0.9] opacity-60 translate-y-[64px]",
            ];

            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                tabIndex={0}
                aria-label={`Product variant ${i + 1}`}
                className={`
                  relative w-[220px] h-[420px] rounded-[26px] overflow-hidden
                  bg-[#111]
                  shadow-[0_30px_60px_rgba(0,0,0,0.65)]
                  transition-all duration-300 ease-out
                  cursor-pointer
                  ${layout[i]}
                  hover:scale-[1.02]
                  hover:opacity-100
                  hover:translate-y-0
                  hover:shadow-[0_40px_90px_rgba(0,0,0,0.8)]
                  focus-visible:outline-none
                `}
              >
                <img
                  src={src}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

        </div>

        {/* RIGHT TEXT */}
        <div className="col-span-3 flex justify-end">
          <h2 className="text-3xl font-light tracking-widest leading-snug text-right">
            DESIGNED
            <br />
            TO BE
            <br />
            HEARD.
          </h2>
        </div>
      </div>

      {/* ───── SUBTLE GLOW ───── */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[120px] rounded-full" />
    </section>
  );
}
