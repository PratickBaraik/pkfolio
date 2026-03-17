/**
 * Import all images (correct relative path — NO /src)
 */
import img1 from "../src/assets/images/picGallery/img1.jpg";
import img2 from "../src/assets/images/picGallery/img2.jpg";
import img3 from "../src/assets/images/picGallery/img3.jpg";
import img4 from "../src/assets/images/picGallery/img4.jpg";
import img5 from "../src/assets/images/picGallery/img5.jpg";
import img6 from "../src/assets/images/picGallery/img6.jpg";
import img7 from "../src/assets/images/picGallery/img7.jpg";
import img8 from "../src/assets/images/picGallery/img8.jpg";
import img9 from "../src/assets/images/picGallery/img9.jpg";

import img10 from "../src/assets/images/picGallery/img10.jpg";
import img11 from "../src/assets/images/picGallery/img11.jpg";
import img12 from "../src/assets/images/picGallery/img12.jpg";
import img13 from "../src/assets/images/picGallery/img13.jpg";
import img14 from "../src/assets/images/picGallery/img14.jpg";
import img15 from "../src/assets/images/picGallery/img15.jpg";
import img16 from "../src/assets/images/picGallery/img16.jpg";
import img17 from "../src/assets/images/picGallery/img17.jpg";
import img18 from "../src/assets/images/picGallery/img18.jpg";

/**
 * Strong typing
 */
export type SectionData = {
  title: string;
  images: string[];
};

/**
 * Central image array (single source of truth)
 */
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
  createSection("Section 1", 0, 6),
  createSection("Section 2", 6, 12),
  createSection("Section 3", 12, 18),
];
