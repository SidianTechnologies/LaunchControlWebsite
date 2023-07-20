import './NewsLetterEntry.css'
import { motion } from "framer-motion";
import { animationDuration, offsetDistance } from '../pages/home/Home';
import { Bullseye, Check2Circle, ClockHistory, HourglassSplit, ThreeDotsVertical } from 'react-bootstrap-icons';

export default function NewsLetterEntry(){
  const imgarr = [
    "./EngineHorizontal.jpg",
    "./EngineHorizontal2.jpg",
    "./EngineHorizontal3.jpg",
  ]
  return(
    <div 
    className="h-fit text-center my-break flex flex-col items-center">
      <motion.div 
      initial={{opacity: 0, y: offsetDistance}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      
      className="text-6xl text-text-light font-bold">Newsletter</motion.div>

      <motion.div 
      initial={{opacity: 0, y: offsetDistance}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      
      className="text-2xl text-primary font-bold">7/19/2023</motion.div>
      
      <motion.div
      initial={{opacity: 0, y: offsetDistance}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: animationDuration, ease: "backInOut"}}
      viewport={{once: true}}
      className='w-full flex justify-center my-8'
      >
        {[0, 1, 2].map((key) => (
          <div key={key} className="flex w-max slide">
            {imgarr.map((img) => (
              <img src={img} key={img} className='h-96 m-4 rounded-3xl border-2 p-2 border-primary/60 bg-primary/10'/>
            ))}
          </div>
        ))}
      </motion.div>

      <div className='w-[100vw] flex px-break space-x-space text-left justify-center'>
        <div className='w-1/2 flex flex-col space-y-space'>
          <div className='flex space-x-space'>
            <i className='w-16 aspect-square flex justify-center items-center text-primary'><Bullseye size={45}/></i> 
            <div className='w-full'>
              <div className='text-primary font-bold text-2xl'>Objective</div>
              <div className='text-text text-lg'>Maecenas ultrices felis at mauris facilisis viverra. Nullam sit amet nisl nec mauris ultricies facilisis vitae quis nulla. Nunc eu ligula imperdiet, tincidunt mauris ac, tincidunt eros.</div>
            </div>
          </div>

          <div className='flex space-x-space'>
            <i className='w-16 aspect-square flex justify-center items-center text-primary'><Check2Circle size={50}/></i> 
            <div className='w-full'>
              <div className='text-primary font-bold text-2xl'>Accomplished</div>
              <div className='text-text text-lg'>Maecenas ultrices felis at mauris facilisis viverra. Nullam sit amet nisl nec mauris ultricies facilisis vitae quis nulla.</div>
            </div>
          </div>

          <div className='flex space-x-space'>
            <i className='w-16 aspect-square flex justify-center items-center text-primary'><HourglassSplit size={45}/></i> 
            <div className='w-full'>
              <div className='text-primary font-bold text-2xl'>In Progress</div>
              <div className='text-text text-lg'>Maecenas ultrices felis at mauris facilisis viverra. Nullam sit amet nisl nec mauris ultricies facilisis vitae quis nulla.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}