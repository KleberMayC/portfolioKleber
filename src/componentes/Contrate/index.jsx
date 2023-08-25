import styles from "./styles.module.css";

export default function Contrate() {
  return (
    <div className={styles.Container}>
      <div className={styles.wrapper}>
        {" "}
        <div className={styles.h1}>
          <h1>Tem algum projeto em mente?</h1>
          <p>Estou disponível para freelancer</p>
        </div>
        <div className={styles.botoes}>
          <a className={styles.degrade} href="">
            Fale Comigo
          </a>
          <a className={styles.lado} href="">
            Mais Projetos
          </a>
        </div>
      </div>
    </div>
  );
}
