import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { cocktailLists, mockTailLists } from "../constantes";

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    // Cria uma timeline do GSAP com ScrollTrigger para efeito de paralaxe
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails", // Elemento que dispara a animação
        start: "top 30%", // Inicia quando o topo do elemento atinge 30% da tela
        end: "bottom 80%", // Termina quando o fundo do elemento atinge 80% da tela
        scrub: true, // Sincroniza a animação com o movimento do scroll
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100, // Começa deslocado 100px para baixo
        y: 100, // Começa deslocado 100px para a esquerda
      })
      .from("#c-right-leaf", {
        x: 100, // Começa deslocado 100px para baixo
        y: 100, // Começa deslocado 100px para a direita
      });
  });

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
