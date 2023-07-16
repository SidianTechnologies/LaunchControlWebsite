import { CircleFill } from "react-bootstrap-icons";

export default function Timeline(){
  return(
    <div className="w-full pr-16 px-4 md:px-break mt-break">
      <div className="text-6xl text-text-light font-bold">Here's the plan.</div>
      <ol className="relative border-l border-primary my-break flex flex-col space-y-break">
        <li className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 h-fit">
          <div className="w-full">
            <div className="relative w-full flex items-center">
              <div className="absolute w-3 aspect-square bg-primary -translate-x-1/2 rounded-full"></div>
              <div className="text-xl text-primary font-bold ml-8">Stage 1</div>
              <div className="ml-2 text-lg">Late July</div>
            </div>
            <div className="ml-8">
              <h1 className="text-2xl text-text-light font-bold">Get the team together.</h1>
              <div className="text-lg mt-2">This is when the launch control team started to get together. We began to get to know eachother's strengths and weaknesses as well as discussed what we all want to do with this team.</div>
            </div>
          </div>
          <div className="ml-8 lg:ml-0 w-full h-96 overflow-clip flex justify-center items-center">
            <img src="./EngineHorizontal.jpg" className="h-full object-cover rounded-[35px] border-2 p-2 border-primary/60"/>
          </div>
        </li>
      </ol>
    </div>
  )
}