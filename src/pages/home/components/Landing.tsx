import { ArrowDown } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { animationDuration, offsetDistance } from "../Home";

export default function Landing(){
  return(
    <div 
    className="relative w-full h-screen overflow-clip">
        <motion.div 

        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }} 
        transition={{ease: "easeInOut", duration: animationDuration*2}}
        
        className="absolute w-full h-full">
          <div className="absolute z-10 w-1/2 h-full bg-gradient-to-l from-0% from-background"/>
          <div className="absolute z-10 w-1/2 h-1/3 bottom-0 bg-gradient-to-t from-0% from-background"/>
          <img className="w-full h-full object-cover -translate-x-[50vw] scale-x-[-1]"src={"https://images.squarespace-cdn.com/content/v1/5f7ca9b4bb17060b028086bb/1680124033120-76B8OVF7MUX5DCP221C8/639408.jpg?format=1000w"}/>
        </motion.div>
               
        <div className="absolute z-20 flex flex-col items-end w-full h-full">
          <div className="w-full sm:w-2/3 h-full flex flex-col justify-center items-center space-y-4 text-center">
            <div className="w-fit h-fit flex flex-col space-y-2 justify-center items-center">
              <div className="text-8xl font-extrabold text-text-light">Launch Control</div>

              <motion.div 
              animate={{ y: 0, opacity: 1 }} 
              initial={{ y: offsetDistance, opacity: 0 }} 
              transition={{ease: "backInOut", duration: animationDuration}}
              className="text-4xl">Lafayette High School Car Club</motion.div>

              <motion.div
              animate={{ y: 0, opacity: 1 }} 
              initial={{ y: offsetDistance, opacity: 0 }} 
              transition={{ease: "backInOut", duration: animationDuration, delay: animationDuration/2}}
              className="flex flex-col space-y-2 items-center">
                <div className="text-2xl">About Us!</div>
                <ArrowDown size={30}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  )
}