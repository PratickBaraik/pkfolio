import React from "react";
import Section from "./Section";
import { galleryData } from "../../../../../data/GalleryData";

const GallerySections: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-950 transition-colors">
      {/* SAME CONTAINER AS NAVBAR */}
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        {galleryData.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            images={section.images}
            sectionIndex={index}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySections;
