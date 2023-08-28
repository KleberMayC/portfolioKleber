import style from "../Home/style.module.css";

export default function Home() {
  return (
    <section id="home" className={style.Wapper}>
      <div className={style.flex}>
        <h1 className={style.principal}>
          Ajudando empresas, criando <br />
          <span className={style.grande} >interfaces digitais</span>  que conectam <br />
          seu negócio ao mundo.
        </h1>
        <p className={style.paragrafo}>
          A combinação de Design, Desenvolvimento Frontend e habilidade <br />
          profissional para impulsionar sua marca no mercado.
        </p>
      </div>

      <div className={style.botoes}>
        <a className={style.degrade} href="">Download CV</a>
        <a className={style.lado} target="blank_" href="https://wa.me//5548998332575?text=Ol%C3%A1%20gostaria%20de%20tirar%20uma%20d%C3%BAvida">
          Mais
        </a>
        
      </div>

    </section>
  );
}
