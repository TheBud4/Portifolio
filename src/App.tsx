import AboutMe from "./layout/AboutMe";
import Header from "./layout/Header";
import Home from "./layout/Home";
// import MyExperience from "./layout/MyExperience";
import Portifolio from "./layout/Portifolio";

export default function App() {
  return (
    <div className=" w-full flex flex-col items-center justify-around gap-y-16">
      <Header />
      <Home />
      <AboutMe />
      <Portifolio />
      {/* <MyExperience /> */}
    </div>
  );
}
