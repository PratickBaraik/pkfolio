import React from "react";
import HobbyItem from "./HobbyItem";
import { hobbies } from "./Hobby.data";

const Hobbies: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADING */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            Things I like to do apart from work
          </h2>

          <p className="text-text-secondary">
            A glimpse into my personal interests
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-16">
          {hobbies.map((hobby, index) => (
            <HobbyItem key={index} hobby={hobby} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
