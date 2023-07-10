import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css"
import back from "../../Images/back.png"
function BackButton(props) {
  const navigate = useNavigate();
  return (
    <div className="backButtonParent">
      <button
        className="BackButton"
        onClick={() => {
          navigate(-1);
          props.togglebackclick();
        }}
      >
       <img className="" src={back} alt=""/>
      </button>
    </div>
  );
}

export default BackButton;
