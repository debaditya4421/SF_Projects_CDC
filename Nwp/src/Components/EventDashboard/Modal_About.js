import React, { useEffect, useState } from "react";
import "./Modal.css";
import data from "./events_dashboard.json"
import Modal_Registration from "./Modal_Registration";


function Modal({ setOpenModal,name }) {
  // let index=srchJSON(); 
  // const bullets = data.events[index].about
  const [bullets,setbullets]=useState(); 
  // const [name,setname]=useState(); 

  useEffect(()=>{
    let index=0; 
    for (let i=0;i<data.events.length;i++){
      if (name === data.events[i].name) {
      index=i; 
      break;
    }
  }
  setbullets(data.events[index].about); 
  console.log(name); 
  },[]); 
  window.onclick=(e)=>{
    if(e.srcElement.className ==="modalBackground"){
      setOpenModal(false);
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer" id="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
       <div className="modalContent modalContent-About">
        <h1 className="modalAbout-heading">{name}</h1>
        <p> {bullets}
        </p>
        {/* <p> <Modal_Registration name="Shuffle"/>
        </p> */}
       </div>
      </div>
    </div>
  );
}

export default Modal;