import { useEffect, useState } from "react";
import bgImage from "./assets/gearCanvas.jpg";

/* ================================
   Gear Main Component
================================ */

const GearMain: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section
      className="
      relative
      w-full
      h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]
      overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          loading="eager" // 🔥 use eager if this is above-the-fold (hero)
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`
      w-full h-full
      object-cover object-center

      transition-all duration-1000 ease-out
      ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
    `}
        />
      </div>

      {/* ================= CINEMATIC OVERLAY ================= */}
      <div
        className="
        absolute inset-0

        /* base darkening (strong but not full) */
        bg-black/50
        "
      />

      {/* ================= GRADIENT DEPTH ================= */}
      <div
        className="
        absolute inset-0

        bg-linear-to-t
        from-black/85 via-black/60 to-black/30
        "
      />

      {/* ================= BOTTOM CONTENT ================= */}
      <div
        className="
  absolute
  top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2

  z-20
  w-full
  max-w-5xl

  px-6

  flex flex-col
  items-center
  gap-4
  text-center
"
      >
        {/* ===== Main Bottom Text ===== */}
        <p
          className="
          text-white
          text-[clamp(2.5rem,5vw,5rem)]
          md:text-lg
          tracking-wide
          leading-relaxed
          max-w-2xl
          "
        >
          Crafted with precision. Built for storytelling.
        </p>

        {/* ===== Label (NO GLASS EFFECT) ===== */}
        <div
          className="
          px-6 py-2

          bg-white
          text-black

          text-sm md:text-base
          tracking-wider

          shadow-md
          "
        >
          Gear List
        </div>
      </div>
    </section>
  );
};

export default GearMain;
