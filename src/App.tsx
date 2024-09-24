import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  
  return (
    <div className=" w-full flex flex-col items-center justify-around">
      <Header />
      <Home />
      <div className="divide-black"></div>
      <AboutMe />
    </div>
  );
}
