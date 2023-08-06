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
    time: "Late May",
    title: "Team Founding",
    text: "Adit Swami, founder of the launch control car club, first thought of the idea when he saw that there were no clubs that were related to cars or mechanical engineering clubs related to cars. In response, he decided to launch a club dedicated to fabricating and modifying cars to race and show off. The minimum requirement for people in the club was 5 people, but we demolished that number by getting 11 people our first day after launch, and still keep getting requests for joining.",
    img: "./EngineHorizontal.jpg",
  },
  {
    time: "Early June",
    title: "Parent Meeting",
    text: "Shortly after the launch of the club, the members decided to get the parents involved to help launch control car club out and get up to speed with all the decisions and plans for the year. In this meeting, they gave they brilliant idea of starting with a go kart in order to get used to welding and fabricating, as well as working with engines. Not only is this a good platform to start out on, this gives us a way for us to prove to sponsors that we are dedicated to this club and will do anything to succeed.  In addition, we can keep increasing the horsepower and engine size as we keep improving the go kart, which eventually might lead to us creating a frame of car with a v8.",
    img: "./EngineHorizontal2.jpg",
  },
  {
    time: "Late July",
    title: "Buying parts",
    text: "After convincing the parents for some initial funding, we were able to gather a list of parts to buy including engine, steel rods, axle, etc.  slowly but surely, we ordered the parts or went to our local home depot to buy the necessary tools and materials in order to build the go kart",
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
          <NodeComponent key={index} node={node} stage={index + 1}/>
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

          className="text-2xl text-text-light font-bold flex"><div>{title}</div> <div hidden={!current} className="text-sm py-1 px-2 border-2 rounded-lg ml-4 border-primary/60 bg-primary/10 text-primary">Current</div></motion.h1>
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

        src={img} className="h-full object-cover rounded-3xl border-2 p-2 border-primary/60 bg-primary/10"/>
      </div>
    </li>
  )
}