//import Ticon from '/icons/TraducaoIcon.svg';
import { AddressBook, Code, House } from "@phosphor-icons/react";
import logo from "/icons/Logo.svg";

export default function Header() {
  const size = window.innerWidth;

  return size >= 640 ? (
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
          <a href="#Home">Home</a>
        </div>
        <div>
          <a href="#AboutMe">Sobre Mim</a>
        </div>
        <div>
          <a href="#Portifolio">Projetos</a>
        </div>
        {/* <div>
            <a href="">Experiencia</a>
          </div> */}
        {/* <div>
          <button>
            <img src={Ticon} alt="" />
          </button>
        </div> */}
      </nav>
    </header>
  ) : (
    <header
      id="header"
      className="flex items-center bg-background justify-around w-full h-28 sticky top-0 z-20"
    >
      <div className="flex items-center space-x-5">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="text-xl text-lightGray font-extrabold">
          Murilo Pistore
        </div>
      </div>
      <nav className="flex space-x-4 text-lightGray font-bold">
        <a href="#Home">
          <House size={32} />
        </a>
        <a href="#AboutMe">
          <AddressBook size={32} />
        </a>
        <a href="#Portifolio">
          <Code size={32} />
        </a>
        {/* <div>
            <a href="">Experiencia</a>
          </div> */}
        {/* <div>
          <button>
            <img src={Ticon} alt="" />
          </button>
        </div> */}
      </nav>
    </header>
  );
}
