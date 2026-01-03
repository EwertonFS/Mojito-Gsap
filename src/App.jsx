import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Cocktails from "./componentes/Cocktails";
import About from "./componentes/About";

import Menu from "./componentes/Menu";
import Art from "./componentes/Art";
import Contact from "./componentes/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <div className="h-dvh bg-black">Div temporaria para testar scroll</div> */}
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
