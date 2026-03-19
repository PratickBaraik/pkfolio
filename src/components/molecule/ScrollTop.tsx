import { useEffect, useState } from "react";
import "./scrollIcon.css"; // 👈 import CSS

const ScrollToTop = ({ showAfter = 800 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > showAfter);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`scroll-btn ${visible ? "show" : ""}`}
    >
      <div className="scroll-icon" />
    </button>
  );
};

export default ScrollToTop;
