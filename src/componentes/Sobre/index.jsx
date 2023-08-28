import style from "../Sobre/style.module.css";

import github from "../../assets/social/github.png";
import instagram from "../../assets/social/instagram.png";
import linkedin from "../../assets/social/linkedin.png";
import email from "../../assets/social/email.png";
import whatsapp from "../../assets/social/whatsapp.png";
import foto from "../../assets/social/fundo.png";

export default function Sobre() {
  return (
    <div id="sobre" className={style.Container}>
      <div className={style.container}>
        <div className={style.overlay}>
          <h2>SOBRE MIM</h2>
        </div>
        <h2 className={style.base}>SOBRE MIM</h2>
      </div>

      <div className={style.main}>
        <img src={foto} alt="" width="400px" />

        <div className={style.right}>
          <h3 className={style.h3}>
            <span className={style.degrade}>Olá</span>, eu sou
          </h3>
          <h2 className={style.h2}>Kleber Coelho</h2>
          <h3 className={style.outroh3}>
            <span className={style.degrade}>Full Stack Developer</span>
          </h3>
          <p className={style.paragrafo}>
            Trabalhando como desenvolvedor Frontend. Atualmente <br />
            no desenvolvimento web e estou focado em aprimorar minhas <br />
            habilidades no desenvolvimento Web. Minha especialidade <br />é
            criar interfaces digitais atraentes e funcionais que melhoram a{" "}
            <br />
            experiência do usuário.
          </p>
          <div className={style.social}>
            <a className={style.border} href="">
              <img src={github} alt="" width="50px" />
            </a>

            <a className={style.border} href="">
              <img src={instagram} alt="" width="50px" />
            </a>
            <a className={style.border} href="">
              <img src={linkedin} alt="" width="50px" />
            </a>
            <a className={style.border} href="">
              <img src={email} alt="" width="50px" />
            </a>
            <a className={style.border} href="">
              <img src={whatsapp} alt="" width="50px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
