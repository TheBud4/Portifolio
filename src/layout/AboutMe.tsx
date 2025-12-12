import Technology from "../components/Tecnology";
import { useLanguage } from "../hooks/useLanguage";
import csharp from "/icons/Csharp.svg";
import css from "/icons/CSS.svg";
import docker from "/icons/Docker.svg";
import firebase from "/icons/Firebase.svg";
import flutter from "/icons/Flutter.svg";
import git from "/icons/GIT.svg";
import html from "/icons/HTML.svg";
import linux from "/icons/Linux.svg";
import nodejs from "/icons/NodeJs.svg";
import react from "/icons/React.svg";
import sql from "/icons/SQL.svg";
import tailwind from "/icons/Tailwind.svg";
import typescript from "/icons/Typescript.svg";
import pfp from "/PFP.png";

export function AboutMe() {
  const { t } = useLanguage();
  const [techFirstWord, ...techRest] = t.about.techTitle.split(" ");
  const technologies = [
    { icon: nodejs, altText: "NodeJs" },
    { icon: html, altText: "Html5" },
    { icon: css, altText: "Css3" },
    { icon: git, altText: "GIT" },
    { icon: typescript, altText: "Typescript" },
    { icon: csharp, altText: "Csharp" },
    { icon: react, altText: "React" },
    { icon: tailwind, altText: "Tailwind" },
    { icon: docker, altText: "Docker" },
    { icon: firebase, altText: "Firebase" },
    { icon: flutter, altText: "Flutter" },
    { icon: linux, altText: "Linux" },
    { icon: sql, altText: "SQL" },
  ];

  return (
    <div id="AboutMe" className="w-full flex flex-col items-center gap-y-16">
      <img src={pfp} alt={t.about.profileAlt} />
      <h1 className="text-lightGray font-black text-2xl sm:text-5xl">
        {t.about.title}
      </h1>
      <p className="text-lightGray text-sm px-6 sm:text-xl text-center max-w-4xl">
        {t.about.description}
      </p>
      <h2 className="text-lightGray font-black text-2xl sm:text-4xl">
        <span className="text-darkGray">{techFirstWord}</span>{" "}
        {techRest.join(" ")}
      </h2>
      <div className="w-full flex gap-2 justify-center flex-row flex-wrap sm:gap-x-4 sm:gap-y-0 ">
        {technologies.map((tech) => (
          <Technology key={tech.altText} icon={tech.icon} altText={tech.altText} />
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
