import { useEffect, useState } from "react";
import { AddressBook, Code, House } from "@phosphor-icons/react";
import logo from "/icons/Logo.svg";
import Ticon from "/icons/TraducaoIcon.svg";
import { useLanguage } from "../hooks/useLanguage";

const getIsDesktop = () =>
  typeof window !== "undefined" ? window.innerWidth >= 640 : true;

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const onResize = () => setIsDesktop(getIsDesktop());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const renderLanguageButton = () => (
    <button
      onClick={toggleLanguage}
      aria-label={t.nav.toggleLabel}
      title={t.nav.toggleLabel}
      className="transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkGray"
    >
      <img src={Ticon} alt={t.nav.toggleLabel} className="h-8 w-8" />
      <span className="sr-only">{language === "pt" ? "PT" : "EN"}</span>
    </button>
  );

  return isDesktop ? (
    <header
      id="header"
      className="flex items-center bg-background justify-around w-full h-28 sticky top-0 z-20"
    >
      <div className="flex items-center space-x-8">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="text-2xl text-lightGray font-extrabold">
          Murilo Pistore
        </div>
      </div>
      <nav className="flex space-x-8 text-lightGray font-medium text-xl ">
        <div>
          <a href="#Home">{t.nav.home}</a>
        </div>
        <div>
          <a href="#AboutMe">{t.nav.about}</a>
        </div>
        <div>
          <a href="#Portifolio">{t.nav.projects}</a>
        </div>
        {renderLanguageButton()}
      </nav>
    </header>
  ) : (
    <header
      id="header"
      className="flex items-center bg-background justify-around w-full h-28 sticky top-0 z-20"
    >
      <div className="flex items-center space-x-5">
        <div className="text-xl text-lightGray font-extrabold">
          Murilo Pistore
        </div>
      </div>
      <nav className="flex items-center space-x-4 text-lightGray font-bold">
        <a href="#Home">
          <House size={32} />
        </a>
        <a href="#AboutMe">
          <AddressBook size={32} />
        </a>
        <a href="#Portifolio">
          <Code size={32} />
        </a>
        {renderLanguageButton()}
      </nav>
    </header>
  );
}
