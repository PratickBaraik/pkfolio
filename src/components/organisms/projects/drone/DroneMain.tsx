import PosterImage from "../assets/drone.png";

export default function VideoSection() {
  return (
    <section
      className="
        w-full
        pt-0 pb-12
        bg-white
        dark:bg-neutral-950
        transition-colors
      "
    >
      {/* Container (Same as Navbar) */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Poster Section (FULL WIDTH FIX) ---------------- */}
        <div className="mb-12 px-6">
          <div className="-mx-6">
            <img
              src={PosterImage}
              alt="Creator's Poster"
              className="
                w-full
                object-contain
              "
            />
          </div>
        </div>

        {/* ---------------- Video Section ---------------- */}
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
          "
        >
          {/* ---------- Video 1 ---------- */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video overflow-hidden rounded-xl shadow-md">
              <iframe
                src="https://www.youtube.com/embed/X5NkZtdOwDg"
                title="Loop Bridge, Bagrakot"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 text-center">
              Loop Bridge, Bagrakot
            </h3>
          </div>

          {/* ---------- Video 2 ---------- */}
          <div className="flex flex-col gap-4">
            <div className="aspect-video overflow-hidden rounded-xl shadow-md">
              <iframe
                src="https://www.youtube.com/embed/Eoo4HzILB-M"
                title="Beach Side"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 text-center">
              Beach Side
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
