import AboutMe from "./layout/AboutMe";
import Header from "./layout/Header";
import Home from "./layout/Home";
import { LanguageProvider } from "./context/LanguageContext";
// import MyExperience from "./layout/MyExperience";
import Portifolio from "./layout/Portifolio";

export default function App() {
  return (
    <LanguageProvider>
      <div className=" w-full flex flex-col items-center justify-around gap-y-16">
        <Header />
        <Home />
        <AboutMe />
        <Portifolio />
        {/* <MyExperience /> */}
      </div>
    </LanguageProvider>
  );
}
