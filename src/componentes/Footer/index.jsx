import React from "react";
import styles from "../Footer/styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Todos os direitos reservados &copy; 2023. Criado por Kleber.</p>
      </div>
    </footer>
  );
}

export default Footer;
