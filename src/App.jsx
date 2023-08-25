import Contato from "./componentes/Contato";
import Contrate from "./componentes/Contrate";
import Experiencia from "./componentes/Experiencia";
import Footer from "./componentes/Footer";
import Habilidades from "./componentes/Habilidades";
import Home from "./componentes/Home";
import Navbarteste from "./componentes/Navbarteste";
import Portfolio from "./componentes/Portfolio";
import Slider from "./componentes/Slider";
import Sobre from "./componentes/Sobre";

export default function App() {
  return (
    <div>
      <Navbarteste />
      {/* <Navbar /> */}
      <Home />
      <Slider />
      <Sobre />
      <Habilidades />
      <Experiencia />
      <Portfolio />
      <Contrate />
      <Contato />
      <Footer />
    </div>
  );
}
