import style from "../Navbar/style.module.css";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0 && !scrolled) {
        setScrolled(true);
      } else if (position === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className={style.Container}>
        <div>
          <h2>Kleber Coelho</h2>
          <p className={style.paragrafo}>Desenvolvedor Full-Stack</p>
        </div>

        <ul className={style.navegacao}>
          <li>
            <a href="">Inicio</a>
            <a href="">Sobre</a>
            <a href="">Habilidades</a>
            <a href="">Portfolio</a>
            <a href="">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
