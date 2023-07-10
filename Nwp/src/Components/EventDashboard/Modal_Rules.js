import React, { useEffect, useState } from "react";
import "./Modal.css";

import data from "./events_dashboard.json";

function Modal({ setOpenModal, name }) {
  // const bullets = data.events[0].rules

  const [bullets, setbullets] = useState([]);

  useEffect(() => {
    let index = 0;
    for (let i = 0; i < data.events.length; i++) {
      if (name === data.events[i].name) {
        index = i;
        break;
      }
    }
    setbullets(data.events[index].rules);
    console.log(data.events[index].rules.length);
  }, []);
  window.onclick = (e) => {
    if (e.srcElement.className === "modalBackground") {
      setOpenModal(false);
    }
  };

  let bullet_number = 0;
  return (
    <div className="modalBackground">
      <div className="modalContainer modalContainer-rules" id="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div
          className="modalContent modalContent-rules"
          style={{ textAlign: "left" }}
        >
        <h1 style={{textAlign:"center",marginTop:"-50px",marginBottom:"20px"}}>Rules</h1>
          {bullets.map((points) => {
            bullet_number++;
            return (
              <div className="modalRules-points">
                <p>{bullet_number}&#41;&#160;</p>
                <p>{points}</p>
              </div>
            );
            // return <p>{bullet_number}&#41;&#160;{points}</p>
            //  <p>&#160; </p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
