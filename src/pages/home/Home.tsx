import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
gsap.registerPlugin(ScrollTrigger);

export default function Home(){
  const fullPage = useRef(null);

  useEffect(() => {
    gsap.fromTo(fullPage.current,
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 3,
      }
    );
  }, []);

  return(
    <div className="w-full h-full flex flex-col justify-center items-center overflow-y-auto overflow-x-clip text-text bg-background" ref={fullPage}>
      <Landing/>
      <AboutUs/>
      <Timeline/>
    </div>
  )
}