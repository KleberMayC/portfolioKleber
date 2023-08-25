import styles from "../../componentes/Contato/style.module.css";
import whatsapp from "../../assets/social/whatsapp.png"
import email from "../../assets/social/email.png"
import linkedin from '../../assets/social/linkedin.png'
export default function Contato() {
  return (
    <div className={styles.Container}>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <h2>CONTATOS</h2>
        </div>
        <h2 className={styles.base}>CONTATOS</h2>
      </div>
      <div className={styles.containerTeste}>
        <div className={styles.flex}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={whatsapp} alt="" width="30px"/>
            </div>
            <div className={styles.listitens}>
              <h5>Celular</h5>
              <span>+55 (48) 99833-2575</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={email} alt="" width="30px"/>
            </div>

            <div className={styles.listitens}>
              <h5>E-mail</h5>
              <span>klebercoelhodev@gmail.com</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={linkedin} alt="" width="30px"/>
            </div>

            <div className={styles.listitens}>
              <h5>LinkedIn</h5>
              <span>https://www.linkedin.com/in/klebercoelho99/</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
