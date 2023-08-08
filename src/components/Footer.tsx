import { useNavigate } from "react-router-dom";

export default function Footer(){
  const navigate = useNavigate();
  return(
    <div className="w-full h-24 bg-primary/10 p-4 flex justify-between items-center">
      <a href="https://sidiantechnologies.web.app" target="_blank" className="flex h-full items-center pr-3">
        <img src="/SidianLogo.png" className="w-16"/>
        <div>
          <p className="">Website Design By:</p>
          <p className="text-text-light">Sidian Technologies</p>
        </div>
      </a>
      <button onClick={() => navigate('admin-panel')} className="text-text-light mr-4 underline">Admin Panel</button>
    </div>
  )
}