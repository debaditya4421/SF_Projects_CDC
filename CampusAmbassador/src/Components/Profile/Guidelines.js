import Data from "./Guidelines.json";
import "./Guidelines.css";
import { useState } from "react";

function Guidelines() {
   
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index){
            return setClicked(null);
        }
        setClicked(index);
    }
    const [bclicked , setBClicked] = useState(false);
    const buttonClicked = () =>{
        setBClicked(true);
    }

    
  return (
    <div className="Guidelineswrapper">
    <div className="Guidelines">
        <div className="GuidelinesHeading">
            GUIDELINES
        </div>    
        <div className="GuidelineContainer">
            {Data.map((data,index) => (
                <div key={index}>
                    <div className="GuidelineContentName" onClick={()=>{toggle(index)}}>
                        <h1 className="GuidelinesName">{data.Name}</h1>
                        <span className="GuidelinesSign">{clicked === index ? "-" : "+" }</span>
                    </div>
                    <div className={clicked === index ? "GuidShow GuidelineContentDetails" : "GuidelineContentDetails"}>
                        {data.Content.map(content => (
                            <div className="GuidelineContentDetailsPoints">{content}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
    </div>
    </div>
  )
}

export default Guidelines