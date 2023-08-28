import React, { useState } from "react";
import style from "../Habilidades/style.module.css";
import CSS from "../../assets/skills/CSS.svg";
import Figma from "../../assets/skills/Figma.svg";
import Git from "../../assets/skills/Git.svg";
import HTML from "../../assets/skills/HTML.svg";
import JS from "../../assets/skills/JS.svg";
import Reactt from "../../assets/skills/Reactt.svg";

export default function Habilidades() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isItemHovered = (item) => {
    return item === hoveredItem;
  };

  return (
    <div id="habilidade" className={style.Container}>
      <div className={style.container}>
        <div className={style.overlay}>
          <h2>HABILIDADES</h2>
        </div>
        <h2 className={style.base}>HABILIDADES</h2>
      </div>
      <div className={style.habilidades}>
        <div
          className={`${style.border} ${
            isItemHovered("HTML") ? style.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter("HTML")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={style.h3}>HTML</h3>
          <img src={HTML} alt="HTML" />
        </div>
        <div
          className={`${style.border} ${
            isItemHovered("CSS") ? style.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter("CSS")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={style.h3}>CSS</h3>
          <img src={CSS} alt="CSS" />
        </div>
        <div
          className={`${style.border} ${
            isItemHovered("JavaScript") ? style.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter("JavaScript")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={style.h3}>JavaScript</h3>
          <img src={JS} alt="JavaScript" />
        </div>
        <div
          className={`${style.border} ${
            isItemHovered("React") ? style.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter("React")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={style.h3}>React</h3>
          <img src={Reactt} alt="React" />
        </div>
        <div
          className={`${style.border} ${
            isItemHovered("Git") ? style.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter("Git")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={style.h3}>Git</h3>
          <img src={Git} alt="Git" />
        </div>
        <div
          className={`${style.border} ${
            isItemHovered("Figma") ? style.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter("Figma")}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className={style.h3}>Figma</h3>
          <img src={Figma} alt="Figma" />
        </div>
      </div>
    </div>
  );
}
