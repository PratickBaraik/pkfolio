import React from "react";
import type { Hobby } from "./Hobby.type";

type Props = {
  hobby: Hobby;
  reverse?: boolean;
};

const HobbyItem: React.FC<Props> = ({ hobby, reverse = false }) => {
  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        gap-8 md:gap-12
        items-center
      "
    >
      {/* ================= IMAGE (DESKTOP ONLY) ================= */}
      <div
        className={`
          hidden md:block
          w-full h-full
          ${reverse ? "md:order-2" : "md:order-1"}
        `}
      >
        <div className="w-full h-full min-h-80 overflow-hidden rounded-2xl">
          <img
            src={hobby.image}
            alt={hobby.title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`
          flex justify-center
          ${reverse ? "md:order-1" : "md:order-2"}
        `}
      >
        <div className="relative group w-full max-w-xl">
          {/* Accent Line */}
          <div className="absolute left-0 top-4 bottom-4 w-0.75 bg-accent/70 rounded-full transition-all duration-300 group-hover:bg-accent" />

          {/* CARD */}
          <div
            className="
              bg-surface border border-border
              rounded-2xl
              p-6 md:p-8 pl-8 md:pl-10

              shadow-sm md:shadow-md
              hover:shadow-xl

              transition-all duration-300 ease-out
              space-y-4 md:space-y-5
            "
          >
            {/* TITLE */}
            <p className="font-semibold text-lg md:text-xl text-text-primary tracking-tight leading-snug">
              {hobby.title}
            </p>

            {/* ================= IMAGE (MOBILE ONLY) ================= */}
            <div className="w-full h-56 md:hidden overflow-hidden rounded-xl">
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-text-muted leading-relaxed md:leading-loose text-sm md:text-base tracking-[0.01em]">
              {hobby.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HobbyItem;
