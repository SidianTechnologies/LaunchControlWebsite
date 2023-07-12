import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { ArrowDown } from "react-bootstrap-icons";
gsap.registerPlugin(ScrollTrigger);

export default function Landing(){
  const LHSCarClubTextRef = useRef(null);
  const landingBgImageRef = useRef(null);
  const AboutUsTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(LHSCarClubTextRef.current,
      {
        yPercent: 250,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: LHSCarClubTextRef.current,
          scrub: true,
        }
      }
    );
    
    gsap.fromTo(landingBgImageRef.current,
      {
        opacity: 0, 
      }, 
      {
        opacity: 1,
        duration: 3,
      }
    );
    
    gsap.fromTo(AboutUsTextRef.current,
      {
        yPercent: 300,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: AboutUsTextRef.current,
          scrub: true,
        }
      }
    );
  }, [])

  return(
    <div className="relative w-full h-screen overflow-clip">
        <div className="absolute w-full h-full">
          <div className="absolute z-10 w-1/2 h-full bg-gradient-to-l from-0% from-background"/>
          <div className="absolute z-10 w-1/2 h-1/3 bottom-0 bg-gradient-to-t from-0% from-background"/>
          <img className="w-full h-full object-cover -translate-x-[50vw] scale-x-[-1]" ref={landingBgImageRef} src={"https://images.squarespace-cdn.com/content/v1/5f7ca9b4bb17060b028086bb/1680124033120-76B8OVF7MUX5DCP221C8/639408.jpg?format=1000w"}/>
        </div>

        <div className="absolute z-20 flex flex-col items-end w-full h-full">
          <div className="w-full sm:w-2/3 h-full flex flex-col justify-center items-center space-y-4 text-center">
            <div className="w-fit h-fit flex flex-col space-y-2 justify-center items-center">
              <div className="text-8xl font-extrabold text-text-light">Launch Control</div>
              <div className="text-4xl" ref={LHSCarClubTextRef}>Lafayette High School Car Club</div>
              <div className="flex flex-col space-y-2 items-center" ref={AboutUsTextRef}>
                <div className="text-2xl">About Us!</div>
                <ArrowDown size={30}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}