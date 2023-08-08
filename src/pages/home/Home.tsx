import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import NewsLetterEntry from "../../components/NewsLetterEntry";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import { useNavigate } from "react-router-dom";

const animationDuration = 1;
const offsetDistance = 100;

export default function Home(){
  const navigate = useNavigate();

  return(
    <div className="w-full h-full flex flex-col justify-center items-center overflow-y-scroll overflow-x-clip text-text bg-background">
      <Landing/>
      <AboutUs/>
      <Timeline/>
      <NewsLetterEntry slideRight={true} data={{
        date: Date.now(),
        objective: "Weld the frame together.",
        accomplished: "We have a mock-up of the chassis and have welded a beam for the bumper.",
        nextSteps: "Weld the rest of the chassis and start mocking up engine placement and axle placement.",
        images: ["EngineHorizontal.jpg", "EngineHorizontal2.jpg", "EngineHorizontal3.jpg"],
      }}/>
      <button className="button-primary -mt-12 mb-break" onClick={() => navigate('newsletter')}>See More</button>
      <Contact/>
      <Sponsors/>
    </div>
  )
}

export{ 
  animationDuration,
  offsetDistance
}