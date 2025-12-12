import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useLanguage } from "../hooks/useLanguage";
import curriculum from "/Curriculo.pdf";
import Home_art from "/Home_art.svg";
import github from "/icons/GitHub.svg";
import instagram from "/icons/Instagram.svg";
import linkedin from "/icons/Linkedin.svg";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    // Configurações do ScrollReveal
    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: true,
    });

    ScrollReveal().reveal(".reveal-side", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      reset: true,
    });
  }, []);

  return (
    <section
      id="Home"
      className="w-full flex flex-col items-center justify-evenly px-8 sm:flex-row "
    >
      <div className="h-full flex flex-col gap-y-36 reveal-bottom">
        <span className="border-darkGray border-l-4 px-4 text-xl">
          <div className="text-lightGray">
            <h1>{t.hero.greeting}</h1>
          </div>
          <div className="text-lightGray font-black text-5xl">
            Murilo
            <br />
            Pistore
          </div>
          <div className="">{t.hero.welcome}</div>
        </span>
        <a
          className="bg-darkGray cursor-pointer text-center text-background px-4 font-black py-2 rounded-lg max-w-64 hover:bg-gray-500 transition-colors"
          href={curriculum}
          download
        >
          {t.hero.cta}
        </a>

        <div className="flex space-x-6">
          <a href="https://github.com/TheBud4">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/murilo-pistore-55153925b/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/murilo_pistore/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <aside className="reveal-side hidden sm:flex">
        <img src={Home_art} alt={t.hero.artAlt} />
      </aside>
    </section>
  );
}
