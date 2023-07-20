import { motion } from "framer-motion";
import { animationDuration, offsetDistance } from "../Home";
import { EnvelopeAt, Instagram, Telephone } from "react-bootstrap-icons";

export default function Contact(){
  return(
    <div 
    className="h-fit w-full text-center flex flex-col items-center my-break">
      <motion.div 
      initial={{opacity: 0, y: offsetDistance}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      
      className="text-6xl text-text-light font-bold">Contact Us!</motion.div>

      <div className="flex flex-wrap pt-8 justify-center">
        <motion.div 
        initial={{opacity: 0, y: offsetDistance}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: animationDuration, ease: "backInOut"}}
        viewport={{once: true}}

        className="w-96 m-2 relative border-2 border-primary/60 rounded-lg text-text-light flex flex-col items-center justify-center p-space bg-primary/10">
          <i className="text-primary"><EnvelopeAt size={40}/></i>
          <div className="text-2xl font-bold mt-2">Car Club Email</div>
          <div className="text-text text-lg">launchcontrolcarclub@gmail.com</div>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, y: offsetDistance}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: animationDuration, ease: "backInOut"}}
        viewport={{once: true}}

        className="m-2 w-96 relative border-2 border-primary/60 rounded-lg text-text-light flex flex-col items-center justify-center p-space bg-primary/10">
          <i className="text-primary"><Telephone size={40}/></i>
          <div className="text-2xl font-bold mt-2">Adit Swami</div>
          <div className="text-text text-lg">+1(916)-600-4946</div>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, y: offsetDistance}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: animationDuration, ease: "backInOut"}}
        viewport={{once: true}}

        className="m-2 w-96 relative border-2 border-primary/60 rounded-lg text-text-light flex flex-col items-center justify-center p-space bg-primary/10">
          <i className="text-primary"><Instagram size={40}/></i>
          <div className="text-2xl font-bold mt-2">Instagram</div>
          <div className="text-text text-lg">launch_control2023</div>
        </motion.div>
      </div>
    </div>
  )
}