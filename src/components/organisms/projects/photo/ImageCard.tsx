import React, { useEffect, useRef, useState } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Intersection Observer:
   * - Loads image only when near viewport
   * - Reduces network congestion (important for 27 images)
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "120px", // preload slightly before entering view
      },
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        w-full
        aspect-square
        overflow-hidden
        bg-gray-100
        dark:bg-neutral-800
        relative
      "
    >
      {/* Skeleton Loader */}
      <div
        className={`
          absolute inset-0
          transition-opacity duration-500
          ${isLoaded ? "opacity-0" : "opacity-100"}
          bg-gray-200 dark:bg-neutral-700 animate-pulse
        `}
      />

      {/* Image */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`
            w-full h-full object-cover
            transition-all duration-500 ease-out
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            hover:scale-105
            will-change-transform
          `}
        />
      )}
    </div>
  );
};

export default ImageCard;
