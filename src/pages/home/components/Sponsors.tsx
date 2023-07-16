export default function Sponsors(){
  return(
    <div className="h-fit w-full text-center flex flex-col items-center my-break px-break">
      <div className="text-6xl text-text-light font-bold mb-8">Sponsors</div>
      <div className="flex flex-wrap w-full justify-center">
        <Sponsor name="Sidian Technologies" logo="./SidianLogo.png"/>
      </div>
    </div>
  )
}

function Sponsor(props: {name: string, logo: string}){
  return(
    <div className="flex flex-col items-center m-8">
      <img src={props.logo} className="w-48 aspect-square bg-white rounded-full"/>
      <h2 className="text-2xl text-text-light mt-space">{props.name}</h2>
    </div>
  )
}