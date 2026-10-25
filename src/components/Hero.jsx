import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import SkyScene from "./SkyScene";
import ThemeToggle from "./ThemeToggle";
import { curriculoPdf, email, socials } from "../data/content";

export default function Hero({ progress = 0 }) {
  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <section
      id="home"
      className="section relative flex h-screen snap-start items-center overflow-y-auto"
    >
      <SkyScene
        progress={progress}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <ThemeToggle className="absolute top-6 right-6 z-10 bg-bg/60 backdrop-blur" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-sm tracking-widest text-teal uppercase">
            Seja bem-vindo
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-pop" />
            procurando estágio em backend
          </div>

          <h1 className="font-display gradient-text mt-6 text-4xl font-bold sm:text-5xl">
            Guilherme de Moraes Rosa
          </h1>
          <h2 className="mt-2 font-display text-xl font-semibold text-teal">
            Desenvolvedor Full Stack em formação
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Curso Análise e Desenvolvimento de Sistemas na Fatec São José dos
            Campos, com uma base construída ao longo dos semestres em HTML,
            CSS, Python, Java e JavaScript, além de TypeScript e React. Sou
            estagiário de desenvolvimento web na Agência Wiks e busco me
            aprofundar cada vez mais, com foco em me tornar um desenvolvedor
            full stack. Tenho interesse nas áreas de dados, cibersegurança e
            desenvolvimento de jogos.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href={github?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-pop"
            >
              <GithubIcon width={20} height={20} />
              GitHub
            </a>
            <a
              href={linkedin?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-pop"
            >
              <LinkedinIcon width={20} height={20} />
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-pop"
            >
              <Mail size={20} />
              E-mail
            </a>
            <a
              href={curriculoPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet px-4 py-1.5 font-medium text-sm text-violet transition-colors hover:border-pop hover:text-pop"
            >
              <Download size={16} />
              Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
