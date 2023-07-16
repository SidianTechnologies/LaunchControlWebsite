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
]

export default function Timeline(){
  return(
    <div className="w-full pr-16 md:pr-8 px-4 md:pl-break my-break">
      <motion.div 

      animate={{ y: 0, opacity: 1 }} 
      initial={{ y: offsetDistance, opacity: 0 }} 
      transition={{ease: "backInOut", duration: animationDuration}}
      
      className="text-6xl text-text-light font-bold">Here's the plan.</motion.div>
      <div className="text-2xl text-text">And the progress.</div>
      <ol className="relative border-l border-primary mt-12 flex flex-col space-y-break">
        {nodes.map((node, index) => (
          <NodeComponent node={node} stage={index + 1}/>
        ))}
      </ol>
    </div>
  )
}

function NodeComponent(props: {node: TimelineNode, stage: number}){
  const { time, title, text, img} = props.node;
  return(
    <li className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 h-fit">
      <div className="w-full">
        <div className="relative w-full flex items-center">
          <div className="absolute w-3 aspect-square bg-primary -translate-x-1/2 rounded-full"></div>
          <div className="text-xl text-primary font-bold ml-8">Stage {props.stage}</div>
          <div className="ml-2 text-lg">{time}</div>
        </div>
        <div className="ml-8">
          <h1 className="text-2xl text-text-light font-bold">{title}</h1>
          <div className="text-lg mt-2">{text}</div>
        </div>
      </div>
      <div className="ml-8 lg:ml-0 w-full h-[30vh] overflow-clip flex justify-center items-center">
        <img src={img} className="h-full object-cover rounded-[35px] border-2 p-2 border-primary/60"/>
      </div>
    </li>
  )
}