import Home_art from "/Home_art.svg";
import github from "/icons/GitHub.svg";
import linkedin from "/icons/Linkedin.svg";
import instagram from "/icons/Instagram.svg";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import curriculum from "/Curriculo.pdf";


export default function Home() {

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
    <section id="Home" className="w-full flex flex-col items-center justify-evenly px-8 sm:flex-row ">

      <div className="h-full flex flex-col gap-y-36 reveal-bottom">
        <span className="border-darkGray border-l-4 px-4 text-xl">
          <div className="text-lightGray">
            <h1>Olá meu nome é</h1>
          </div>
          <div className="text-lightGray font-black text-5xl">
            Murilo
            <br />
            Pistore
          </div>
          <div className="">Seja bem vindo ao meu portifólio</div>
        </span>
        <a 
         className="bg-darkGray cursor-pointer text-center text-background px-4 font-black py-2 rounded-lg w-2/3"
         href={curriculum}
         download
         >
          Saiba mais sobre mim
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
        <img src={Home_art} alt="arte da pagina inicial" />
      </aside>
    </section>
  );
}

