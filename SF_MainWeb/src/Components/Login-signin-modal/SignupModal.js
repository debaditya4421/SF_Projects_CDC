import React from "react";
import SignUp from "../SignUp/SignUp";
// import{useSpring,animated} from "react-spring"

import "./signinmodal.css";
function SignupModal({ setOpenModal }) {
    // const animated=useSpring({
    //     config:{
    //         duration:250
    //     },
    //     opacity:1,
    //     transform: setOpenModal? `translateY(0%) : translateY(-100%)`
    // }:null);
    console.log(setOpenModal);
  return (
    <div className="modalBackground" onClick={() => {
        setOpenModal(false);
      }}>
      <div className="modalContainer" >
        {/* <div > */}
        <div className="modalclose">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
       <SignUp />
       </div>
      </div>
    
  );
}

export default SignupModal;