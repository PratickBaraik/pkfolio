import React from "react";
import BrandOne from "./asset/brands/brandOne.jpg";
import BrandTwo from "./asset/brands/brandTwo.jpg";
import BrandThree from "./asset/brands/brandThree.jpg";
import BrandFour from "./asset/brands/brandFour.jpg";

/* ================================
   Types
================================ */
type Brand = {
  name: string;
  description: string;
  icon: string;
};

/* ================================
   Data
================================ */
const brands: Brand[] = [
  {
    name: "Safar by Mulaqat",
    description:
      "Collaborated with a travel brand specializing in experiential journeys and curated itineraries. Produced cinematic, documentary-style visual content showcasing destinations and traveler experiences, strengthening the brand’s digital storytelling and audience engagement.",
    icon: BrandOne,
  },
  {
    name: "Ecoventure",
    description:
      "Partnered with a nature-focused initiative in the Eastern Himalayas to document sustainable travel experiences. Captured landscapes, cultural interactions, and community-driven activities, delivering visuals aligned with eco-conscious and experience-led tourism.",
    icon: BrandTwo,
  },
  {
    name: "NBTYA",
    description:
      "Worked with the North Bengal Tribal Youth Association to document cultural identity and grassroots initiatives. Developed visual narratives highlighting youth engagement, heritage preservation, and community-led development efforts.",
    icon: BrandThree,
  },
  {
    name: "Thikana by Mulaqat",
    description:
      "Created visual content for a traveler-focused hostel and Airbnb brand. Showcased its design, atmosphere, and community-driven experience, reinforcing its positioning as a welcoming hub for experiential and social travel.",
    icon: BrandFour,
  },
];

/* ================================
   Organisation Component
================================ */
const Organisation: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-bg-primary">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary">
          Brands I’ve Collaborated With
        </h2>
        <p className="text-text-secondary text-base md:text-lg mt-2 leading-relaxed max-w-2xl mx-auto">
          A selection of organizations I’ve worked with, delivering visual
          storytelling and creative solutions to enhance brand presence,
          communicate identity, and engage audiences effectively.
        </p>
      </div>

      {/* ================= BRANDS ================= */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-between">
        {brands.map((brand, index) => (
          <div key={index} className="relative group w-full md:w-1/4">
            {/* Accent Line */}
            <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-accent/70 rounded-full transition-all duration-300 group-hover:bg-accent" />

            <div
              className="
                bg-surface border border-border
                rounded-2xl
                p-6 md:p-8 pl-9
                shadow-sm md:shadow-md
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 ease-out
                flex flex-col items-center text-center
                h-full
              "
            >
              {/* ICON (INCREASED SIZE) */}
              <img
                src={brand.icon}
                alt={brand.name}
                className="
  w-30 h-30 md:w-28 md:h-28 mb-6
  object-cover rounded-xl
  shadow-md
  transition-transform duration-300
  group-hover:scale-105
"
              />

              {/* NAME (INCREASED SIZE) */}
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight leading-snug">
                {brand.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-text-muted mt-3 text-sm md:text-base leading-relaxed md:leading-loose tracking-[0.01em]">
                {brand.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organisation;
