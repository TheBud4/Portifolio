import AboutMe from "./layout/AboutMe";
import Header from "./layout/Header";
import Home from "./layout/Home";
import MyExperience from "./layout/MyExperience";
import Portifolio from "./layout/Portifolio";

export default function App() {
  
  return (
    <div className=" w-full flex flex-col items-center justify-around gap-y-32">
      <div className="w-full">
        <Header />
        <Home />
      </div>
      <AboutMe />
      <Portifolio />
      <MyExperience />
    </div>
  );
}
