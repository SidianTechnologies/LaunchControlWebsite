import { motion } from "framer-motion";
import { animationDuration, offsetDistance } from "../Home";

export default function AboutUs(){
  return(
    <motion.div 
    className="h-fit w-full text-center flex flex-col items-center my-break">
      <motion.div 
      initial={{opacity: 0, y: offsetDistance}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      
      className="text-6xl text-text-light font-bold">Who Are We?</motion.div>

      <motion.div 
      initial={{opacity: 0, y: offsetDistance}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      className="text-xl w-full md:w-2/3 px-4 mt-space">{String("Launch control is a decent car club in Lafayette high school. ").repeat(5)}</motion.div>
    </motion.div>
  )
}