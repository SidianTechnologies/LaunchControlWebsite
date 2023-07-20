import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import NewsLetterEntry from "../../components/NewsLetterEntry";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";

const animationDuration = 1;
const offsetDistance = 100;

export default function Home(){
  return(
    <div className="w-full h-full flex flex-col justify-center items-center overflow-y-scroll overflow-x-clip text-text bg-background">
      <Landing/>
      <AboutUs/>
      <Timeline/>
      <NewsLetterEntry/>
      <Contact/>
      <Sponsors/>
    </div>
  )
}

export{ 
  animationDuration,
  offsetDistance
}