import style from "../Slider/style.module.css";
import React, { useEffect, useRef } from "react";
import "../Slider/Slider.css";

const Slider = () => {
  const phraseRef = useRef(null);

  useEffect(() => {
    const animationDuration = 10; // Duração da animação em segundos
    const phraseElement = phraseRef.current;

    const resetAnimation = () => {
      phraseElement.style.animation = "none";
      phraseElement.offsetHeight; // Triggers reflow, resetting the animation
      phraseElement.style.animation = `slide-left ${animationDuration}s linear infinite`;
    };

    resetAnimation();
    window.addEventListener("resize", resetAnimation);

    return () => {
      window.removeEventListener("resize", resetAnimation);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-content" ref={phraseRef}>
        <p>FRONTEND DEVELOPER FRONTEND DEVELOPER </p>
        
      </div>
    </div>
  );
};

export default Slider;
