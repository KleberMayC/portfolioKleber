import React from "react";
import styles from "./styles.module.css";

import trato from "../../assets/projetos/tratofino.png";
import waxy from "../../assets/projetos/waxycode.png";
import andamento from "../../assets/projetos/andamento.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.portfolioContainer}>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <h2>PORTFÓLIO</h2>
        </div>
        <h2 className={styles.base}>PORTFÓLIO</h2>
      </div>
      {/* <h1 className={styles.overlay}>MEU PORTFÓLIO</h1>
      <h2 className={styles.base}>MEU PORTFÓLIO</h2> */}
      <div className={styles.projects}>
        <div className={styles.project}>
          <h2>
            <a href="https://waxycode.vercel.app/ " target="_blank">
              Waxy Code
            </a>
          </h2>
          <img src={waxy} alt="Projeto 1" width="400px" />
          <p>React e JavaScript</p>
        </div>
        <div className={styles.project}>
          <h2>
            <a href="https://tratofino.netlify.app/" target="_blank">
              Trato Fino
            </a>
          </h2>
          <img src={trato} alt="Projeto 2" width="400px" />
          <p>HTML e CSS</p>
        </div>
        <div className={styles.project}>
          <h2>Projeto 3 (Em Construção)</h2>
          <img src={andamento} alt="Projeto 3" width="400px" />
        </div>
        <div className={styles.project}>
          <h2>Projeto 4 (Em Construção)</h2>
          <img src={andamento} alt="Projeto 3" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
