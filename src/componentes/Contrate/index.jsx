import styles from "./styles.module.css";

export default function Contrate() {
  return (
    <div className={styles.Container}>
      <div className={styles.wrapper}>
        {" "}
        <div className={styles.h1}>
          <h1>Tem algum projeto em mente?</h1>
          <p>**Estou disponível para freelancer**</p>
        </div>
        <div className={styles.botoes}>
          <a className={styles.degrade} target="blank_" href="https://wa.me//5548998332575?text=Ol%C3%A1%20gostaria%20de%20tirar%20uma%20d%C3%BAvida">
            Fale Comigo
          </a>
          <a className={styles.lado} target="blank_" href="https://github.com/KleberMayC/">
            Mais Projetos
          </a>
        </div>
      </div>
    </div>
  );
}
