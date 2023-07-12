import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Landing from "./app/pages/Landing";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const fullPage = useRef(null);
  const aboutUsFirstText = useRef(null);

  useEffect(() => {
    gsap.fromTo(fullPage.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
      }
    );

    gsap.fromTo(aboutUsFirstText.current, 
      {
        opacity: 0,
      }, {
        opacity: 1,
        scrollTrigger: {
          scrub: true,
          trigger: aboutUsFirstText.current,
          end: "top 20%"
        }
      })
  }, []);



  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-y-auto overflow-x-clip text-text" ref={fullPage}>
      <Landing/>
      <div className="h-screen w-full text-center flex flex-col items-center" ref={aboutUsFirstText}>
        <div className="text-6xl text-text-light font-bold">Who Are We?</div>
        <div className="text-xl w-2/3 mt-space">{String("Launch control is a decent car club in Lafayette high school. ").repeat(10)}</div>
        <button className="mt-space button-primary">Learn More</button>
      </div>
    </div>
  );
}

export default App;