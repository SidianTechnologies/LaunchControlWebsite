import {useNavigate} from "react-router-dom"
export default function NewsLetterEntry(){

    const navigate = useNavigate();
  return(
    <div>
        <div className="flex justify-center w-full mt-space">
            <button className="flex button-primary justify-center w-fit" onClick={() => navigate("/newsletter")}>Previous Newsletters</button>
        </div>
    </div>
  )
}