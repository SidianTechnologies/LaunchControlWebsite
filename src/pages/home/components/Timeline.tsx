import { motion } from "framer-motion";
import { animationDuration, offsetDistance } from "../Home";

type TimelineNode = {
  time: string,
  title: string,
  text: string,
  img: string,
  current?: boolean,
}

const nodes: TimelineNode[] = [
  {
    time: "Late June",
    title: "Team Founding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis lacus, interdum et bibendum ac, elementum eget turpis. Maecenas ultrices felis at mauris facilisis viverra. Nullam sit amet nisl nec mauris ultricies facilisis vitae quis nulla. Nunc eu ligula imperdiet, tincidunt mauris ac, tincidunt eros.",
    img: "./EngineHorizontal.jpg",
  },
  {
    time: "Early July",
    title: "Parent Meeting",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis lacus, interdum et bibendum ac, elementum eget turpis. Maecenas ultrices felis at mauris facilisis viverra. Nullam sit amet nisl nec mauris ultricies facilisis vitae quis nulla. Nunc eu ligula imperdiet, tincidunt mauris ac, tincidunt eros.",
    img: "./EngineHorizontal2.jpg",
  },
  {
    time: "Early July",
    title: "Buying parts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis lacus, interdum et bibendum ac, elementum eget turpis. Maecenas ultrices felis at mauris facilisis viverra. Nullam sit amet nisl nec mauris ultricies facilisis vitae quis nulla. Nunc eu ligula imperdiet, tincidunt mauris ac, tincidunt eros.",
    img: "./Rohan.jpg",
    current: true,
  },
]

export default function Timeline(){
  return(
    <div className="w-full pr-16 md:pr-8 px-4 md:pl-break my-break">
      <motion.div 

      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      
      className="text-6xl text-text-light font-bold">Here's the plan.</motion.div>

      <motion.div 
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}

      className="text-2xl text-text">And the progress.</motion.div>
      <ol className="relative border-l border-primary mt-12 flex flex-col space-y-break">
        {nodes.map((node, index) => (
          <NodeComponent node={node} stage={index + 1}/>
        ))}
      </ol>
    </div>
  )
}

function NodeComponent(props: {node: TimelineNode, stage: number}){
  const { time, title, text, img, current} = props.node;
  return(
    <li className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 h-fit">
      <div className="w-full">
        <motion.div 
        initial={{opacity: 0, y: offsetDistance}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: animationDuration, ease: "backInOut"}}
        viewport={{once: true}}

        className="relative w-full flex items-center">
          <div className="absolute w-3 aspect-square bg-primary -translate-x-1/2 rounded-full"></div>
          <div className="text-xl text-primary font-bold ml-8">Stage {props.stage}</div>
          <div className="ml-2 text-lg">{time}</div>
        </motion.div>
        <div className="ml-8">
          <motion.h1 
          initial={{opacity: 0, y: offsetDistance}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: animationDuration, ease: "backInOut"}}
          viewport={{once: true}}

          className="text-2xl text-text-light font-bold flex"><div>{title}</div> <div hidden={!current} className="text-sm py-1 px-2 border-2 rounded-lg ml-4 border-primary/60 text-primary">Current</div></motion.h1>
          <motion.div 
          initial={{opacity: 0, y: offsetDistance}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: animationDuration, ease: "backInOut"}}
          viewport={{once: true}}

          className="text-lg mt-2">{text}</motion.div>
        </div>
      </div>
      <div className="ml-8 lg:ml-0 w-full h-[30vh] overflow-clip flex justify-center items-center">
        <motion.img 
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: animationDuration, ease: "backInOut"}}
        viewport={{once: true}}

        src={img} className="h-full object-cover rounded-[35px] border-2 p-2 border-primary/60"/>
      </div>
    </li>
  )
}