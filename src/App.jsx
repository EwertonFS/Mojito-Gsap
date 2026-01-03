import { ScrollTrigger, SplitText } from "gsap-trial/all";
import gsap from "gsap-trial";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Cocktails from "./componentes/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <div className="h-dvh bg-black">Div temporaria para testar scroll</div> */}
      <Cocktails />
    </main>
  );
};

export default App;
