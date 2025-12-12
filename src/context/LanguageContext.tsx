import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

type Language = "pt" | "en";

type Translations = {
  nav: { home: string; about: string; projects: string; toggleLabel: string };
  hero: { greeting: string; welcome: string; cta: string; artAlt: string };
  about: {
    title: string;
    description: string;
    techTitle: string;
    profileAlt: string;
  };
  portfolio: {
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    viewOnGithub: string;
    languages: string;
  };
};

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre Mim",
      projects: "Projetos",
      toggleLabel: "Mudar idioma para inglês",
    },
    hero: {
      greeting: "Olá meu nome é",
      welcome: "Seja bem vindo ao meu portifólio",
      cta: "Saiba mais sobre mim",
      artAlt: "Arte da página inicial",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Meu nome é Murilo Pistore, sou um Desenvolvedor de Software, moro em Medianeira-PR, Brasil e estudo Ciências da Computação na Universidade Tecnológica Federal do Paraná - UTFPR",
      techTitle: "Minhas Tecnologias",
      profileAlt: "Foto de perfil",
    },
    portfolio: {
      titlePrefix: "Meus",
      titleHighlight: "Projetos",
      subtitle: "Estes são alguns dos trabalhos e projetos que já realizei.",
      viewOnGithub: "Ver no GitHub",
      languages: "Linguagens:",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      toggleLabel: "Switch language to Portuguese",
    },
    hero: {
      greeting: "Hi, my name is",
      welcome: "Welcome to my portfolio",
      cta: "Learn more about me",
      artAlt: "Homepage illustration",
    },
    about: {
      title: "About Me",
      description:
        "My name is Murilo Pistore, I am a Software Developer, living in Medianeira-PR, Brazil, and studying Computer Science at the Federal University of Technology - Paraná (UTFPR).",
      techTitle: "My Technologies",
      profileAlt: "Profile picture",
    },
    portfolio: {
      titlePrefix: "My",
      titleHighlight: "Projects",
      subtitle: "These are some of the works and projects I've built.",
      viewOnGithub: "View on GitHub",
      languages: "Languages:",
    },
  },
};

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio_lang") as Language | null;
    if (stored === "pt" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
