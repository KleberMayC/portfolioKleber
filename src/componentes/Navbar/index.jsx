import { useState } from "react";


import style from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.Container}>
      <div>
        <h2>Kleber Coelho</h2>
        <p className={style.paragrafo}>Desenvolvedor Full-Stack</p>
      </div>

      <div
        className={`${style.menuIcon} ${isOpen ? style.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${style.navegacao} ${isOpen ? style.open : ""}`}>
        <li>
          <a href="">Inicio</a>
          <a href="">Sobre</a>
          <a href="">Experiência</a>
          <a href="">Habilidades</a>
          <a href="">Portfolio</a>
          <a href="">Serviços</a>
          <a href="">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}
