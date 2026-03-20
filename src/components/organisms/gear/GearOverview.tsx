import { useEffect, useState } from "react";
import gearBg from "./assets/gearAll.jpg";

const GearOverview: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = gearBg;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section
      className="
      relative
      min-h-screen
      w-full

      flex
      items-center
      justify-center

      px-6 md:px-12 lg:px-20
      overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        style={{ backgroundImage: `url(${gearBg})` }}
        className={`
          absolute inset-0
          bg-cover bg-center bg-no-repeat

          transition-all duration-1200 ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      />

      {/* ================= THEME-AWARE OVERLAY ================= */}
      <div
        className="
        absolute inset-0

        /* LIGHT MODE */
        bg-linear-to-b
        from-black/30
        via-black/10
        to-black/40

        /* DARK MODE */
        dark:from-black/70
        dark:via-black/40
        dark:to-black/80
        "
      />

      {/* ================= THEME-AWARE ACCENT GLOW ================= */}
      <div
        className="
        absolute
        w-105 h-105

        bg-accent/30
        dark:bg-accent/10

        blur-[120px]

        top-[20%]
        left-1/2 -translate-x-1/2
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
  relative z-10

  w-full
  max-w-3xl

  flex flex-col
  items-center
  justify-center

  text-center
  gap-8
  "
      >
        {/* ================= TITLE ================= */}
        <h1
          className="
    text-white
    font-semibold
    text-[clamp(2.2rem,3vw+1rem,3.5rem)]
    leading-[1.1]
    tracking-tight

    drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)]
    "
        >
          My Creative Gear Setup
        </h1>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
    text-white/80
    text-[clamp(1rem,1vw+0.8rem,1.2rem)]
    leading-relaxed
    max-w-200

    drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]
    "
        >
          My gear kit is carefully curated to support{" "}
          <span className="text-white font-medium">
            versatile, cinematic visual production
          </span>{" "}
          across diverse environments. I primarily work with the{" "}
          <span className="text-white font-medium">Sony A7 IV</span>,
          complemented by{" "}
          <span className="text-white font-medium">
            35mm, 56mm, and 85mm prime lenses
          </span>
          , enabling a balanced range from wide storytelling compositions to
          natural perspectives and detailed portraiture.
          <br />
          <br />
          Camera movement is stabilized using the{" "}
          <span className="text-white font-medium">DJI RS 3 Mini</span> gimbal,
          while aerial visuals are captured with the{" "}
          <span className="text-white font-medium">DJI Air 3</span> drone. For
          controlled lighting, I rely on a{" "}
          <span className="text-white font-medium">
            portable 100W LED light
          </span>{" "}
          to maintain consistent illumination on location.
          <br />
          <br />
          This streamlined setup ensures{" "}
          <span className="font-medium">
            efficient, high-quality production
          </span>{" "}
          from capture through post-production.
        </p>
      </div>
    </section>
  );
};

export default GearOverview;
