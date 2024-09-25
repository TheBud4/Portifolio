import Home_art from "/Home_art.svg";
import github from "/icons/GitHub.svg";
import linkedin from "/icons/Linkedin.svg";
import instagram from "/icons/Instagram.svg";
export default function Home() {
  return (
    <section className="w-full flex items-center justify-evenly px-8">
      <div className="h-full  flex flex-col gap-y-36">
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
        <button className="bg-darkGray text-background px-4 font-black py-2 rounded-lg w-2/3">
          Saiba mais sobre mim
        </button>

        <div className="flex space-x-4">
          <a href="https://github.com/TheBud4">
            <img src={github} alt="github" />
          </a>
          <a href="">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <aside className="">
        <img src={Home_art} alt="arte da pagina inicial" />
      </aside>
    </section>
  );
}
