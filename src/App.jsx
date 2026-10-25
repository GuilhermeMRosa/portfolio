import { useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Certificados from "./components/Certificados";
import Skills from "./components/Skills";
import Contato from "./components/Contato";

export default function App() {
  const containerRef = useRef(null);
  const [pastHero, setPastHero] = useState(false);
  const [heroProgress, setHeroProgress] = useState(0);

  function handleScroll() {
    const container = containerRef.current;
    if (!container) return;
    setPastHero(container.scrollTop >= container.clientHeight / 2);
    setHeroProgress(Math.min(container.scrollTop / container.clientHeight, 1));
  }

  return (
    <>
      <Header visible={pastHero} />
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="snap-container h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <Hero progress={heroProgress} />
        <Projetos />
        <Certificados />
        <Skills />
        <Contato />
      </div>
    </>
  );
}
