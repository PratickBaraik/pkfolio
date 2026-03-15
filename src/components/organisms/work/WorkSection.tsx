import CineWork from "./assets/cinematics.jpg";
import PhotoWork from "./assets/photo.jpg";
import DroneWork from "./assets/drone.png";

const WorkSection = () => {
  const works = [
    {
      title: "Cinematography",
      img: CineWork,
      alt: "Prakashit doing cinematography work",
    },
    {
      title: "Photography",
      img: PhotoWork,
      alt: "Prakashit doing photography work",
    },
    {
      title: "Drone Footage",
      img: DroneWork,
      alt: "Prakashit doing drone footage work",
    },
  ];

  return (
    <section className="w-full">
      {/* Heading */}
      <h1 className="mt-12 text-center text-[clamp(1.8rem,3vw+0.5rem,4rem)] font-semibold">
        Body of Work
      </h1>

      {/* Description */}
      <p className="mt-4 px-4 text-center text-[clamp(0.9rem,1.2vw+0.3rem,1.3rem)] max-w-5xl mx-auto">
        Every photograph is more than an image—it is a moment preserved beyond
        time. Through composition, light, and storytelling, each frame becomes a
        visual narrative that captures emotion and atmosphere.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-[clamp(2rem,5vw,4rem)]">
        {works.map((work, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
          >
            {/* Image */}
            <img
              src={work.img}
              alt={work.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Cinematic dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

            {/* Title reveal */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h2 className="text-white text-2xl font-semibold tracking-wide">
                {work.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
