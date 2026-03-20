import type { Hobby } from "./Hobby.type";

import Bike from "../asset/biking.jpg";
import Trekking from "../asset/trekking.jpg";
import Travel from "../asset/travel.jpg";

export const hobbies: Hobby[] = [
  {
    title: "Bike Riding",
    description:
      "Bike riding serves as both a personal escape and a source of creative clarity. Long rides enhance my awareness of movement, environment, and perspective—elements that subtly influence my visual storytelling and overall creative process.",
    image: Bike,
  },
  {
    title: "Trekking",
    description:
      "Trekking challenges both physical endurance and mental resilience. Exploring natural terrains strengthens my adaptability and observational skills, while fostering a deeper connection with landscapes and raw, unfiltered environments.",
    image: Trekking,
  },
  {
    title: "Travel & Exploration",
    description:
      "Traveling exposes me to diverse cultures, people, and environments, broadening my worldview. These experiences continuously inspire fresh perspectives, enriching both my creative direction and problem-solving approach.",
    image: Travel,
  },
];
