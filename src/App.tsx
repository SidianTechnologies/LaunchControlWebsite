import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ArrowDown } from "react-bootstrap-icons";
gsap.registerPlugin(ScrollTrigger)

function App() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el,
      {
        opacity: 1, 
        translateX: -window.innerWidth/2,
      }, 
      {
        opacity: 0, 
        translateX: window.innerWidth/2,

        scrollTrigger: {
          trigger: el,
          scrub: true,
          
    }});
  }, [])
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-orange-100">
      <div className="relative w-full h-screen">
        <div className="absolute w-full h-full">
          <div className="absolute z-10 w-1/2 h-full bg-gradient-to-l from-0% from-stone-950"/>
          <div className="absolute z-10 w-1/2 h-1/3 bottom-0 bg-gradient-to-t from-0% from-stone-950"/>
          <img className="w-full h-full object-cover -translate-x-[50vw] scale-x-[-1]" src={"https://images.squarespace-cdn.com/content/v1/5f7ca9b4bb17060b028086bb/1680124033120-76B8OVF7MUX5DCP221C8/639408.jpg?format=1000w"}/>
        </div>

        <div className="absolute z-20 flex flex-col items-end w-full h-full">
          <div className="w-2/3 h-full flex flex-col justify-center items-center space-y-4 text-center">
            <div className="w-fit h-fit flex flex-col space-y-2 justify-center items-center">
              <div className="text-8xl font-extrabold">Launch Control</div>
              <div className="text-3xl">Lafayette High School Car Club</div>
              <ArrowDown size={30}/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-orange-100"/>
      
      <div className="relative w-full h-fit">
        <img className="absolute -scale-x-125 scale-y-125 h-64 w-full object-none" src={"CarSideProfile.png"} ref={imgRef}/>
        <div className="text-9xl font-extrabold w-full h-64 flex justify-center items-center">We build cars.</div>
      </div>

      <div className="w-full h-px bg-orange-100"/>

      <div className="w-full h-screen"/>
    </div>
  );
}

export default App;