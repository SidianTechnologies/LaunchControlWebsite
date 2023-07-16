import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function AboutUs(){
  const aboutUsFirstText = useRef(null);

  useEffect(() => {
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
  }, [])

  return(
    <div className="h-fit w-full text-center flex flex-col items-center" ref={aboutUsFirstText}>
      <div className="text-6xl text-text-light font-bold">Who Are We?</div>
      <div className="text-xl w-2/3 mt-space">{String("Launch control is a decent car club in Lafayette high school. ").repeat(10)}</div>
      <div className="flex space-x-space">
      </div>
    </div>
  )
}