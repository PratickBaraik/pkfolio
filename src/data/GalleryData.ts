import img1 from "../assets/Travel/img1.jpg";
import img2 from "../assets/Travel/img2.jpg";
import img3 from "../assets/Travel/img3.jpg";
import img4 from "../assets/Travel/img4.jpg";
import img5 from "../assets/Travel/img5.jpg";
import img6 from "../assets/Travel/img6.jpg";

import img7 from "../assets/Portrait/img1.jpg";
import img8 from "../assets/Portrait/img2.jpg";
import img9 from "../assets/Portrait/img3.jpg";
import img10 from "../assets/Portrait/img4.jpg";
import img11 from "../assets/Portrait/img5.jpg";
import img12 from "../assets/Portrait/img6.jpg";

import img13 from "../assets/Wedding/img1.jpg";
import img14 from "../assets/Wedding/img2.jpg";
import img15 from "../assets/Wedding/img3.jpg";
import img16 from "../assets/Wedding/img4.jpg";
import img17 from "../assets/Wedding/img5.jpg";
import img18 from "../assets/Wedding/img6.jpg";

export type SectionData = {
  title: string;
  images: string[];
};

const allImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

/**
 * Reusable section builder
 */
const createSection = (
  title: string,
  start: number,
  end: number,
): SectionData => ({
  title,
  images: allImages.slice(start, end),
});

/**
 * Final structured data (3x3 grid per section)
 */
export const galleryData: SectionData[] = [
  createSection("Travels", 0, 6),
  createSection("Portraits", 6, 12),
  createSection("Weddings", 12, 18),
];
