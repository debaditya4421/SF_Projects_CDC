import React from "react";
import "./Modal.css";
import data from "./events_dashboard.json";
import venues from "./venues.json"; 
import evID from "./eventID.json";
import Modal_Registration from "./Modal_Registration";
import { useState } from "react";
import { useEffect } from "react";

function Modal({ setOpenModal, name, showToast, isSub, evcity }) {
  //   const bullets = data.events[0].about
  window.onclick = (e) => {
    if (e.srcElement.className === "modalBackground") {
      setOpenModal(false);
    }
  };

  // checkLogin();
  const [displStat, setdisplStat] = useState(false);
  const [regStat, setregStat] = useState(false); //false if not registered
  const [subPage, setsubPage] = useState(false);
  const [venind,setvenind] = useState(0); 
  const idOf = () => {
    const evName = name;
    let id = null;
    let found = false;
    for (let i = 0; i < evID.categories.length; i++) {
      for (let j = 0; j < evID.categories[i].events.length; j++) {
        if (evName === evID.categories[i].events[j].name) {
          id = evID.categories[i].events[j].id;
          found = true;
          break;
        }
        if (found) {
          break;
        } else {
          continue;
        }
      }
    }
    return id;
  };
  useEffect(() => {
    let loginStat = localStorage.getItem("logstat");
    if (loginStat === "true") {
      console.log("User Logged In");
      setdisplStat(true);
      let id = idOf();
      let regEventsGrp = JSON.parse(localStorage.getItem("registered-event"))
        .message.group;
      let regEventsSolo = JSON.parse(localStorage.getItem("registered-event"))
        .message.solo;

      for (let i = 0; i < regEventsGrp.length; i++) {
        if (id == regEventsGrp[i].event_id) {
          setregStat(true);
          break;
        }
      }
      for (let j = 0; j < regEventsSolo.length; j++) {
        if (id == regEventsSolo[j].event_id) {
          setregStat(true);
          break;
        }
      }
    } else {
      console.log("Not Logged In");
    }
    if (isSub == true) {
      setsubPage(true);
    } else if (isSub == false) {
      setsubPage(false);
    }
    for (let i=0;i<venues.venues.length;i++){
      if (venues.venues[i].city===evcity){
        setvenind(i); 
        break; 
      }
    }
  }, [name, isSub]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {/* <h1>About</h1> */}
        <div
          className={
            !displStat || regStat || subPage
              ? "modalContent modalContent-register modalContent-register-mid"
              : "modalContent modalContent-register"
          }
        >
          {/* <p> {bullets}
        </p> */}
          {!displStat && <h2>Please Sign In to register for the event.</h2>}
          {regStat && !subPage && <h2>Already registered for this event</h2>}
          {!regStat && !subPage && displStat && (
            <Modal_Registration
              showToast={showToast}
              name={name}
              setOpenModal={setOpenModal}
            />
          )}
          {regStat && subPage && name === "A Picture Tale" && (
            <h2>Please wait, the submission link will open soon.</h2>
          )}
          {
            regStat && subPage && name !== "A Picture Tale" && (
            <>
              <h2>{venues.venues[venind].venue}</h2>
              <h3>{venues.venues[venind].date}</h3>
            </>
            
          )}
          {!regStat && subPage && displStat && (
            <h2>Please register for this event first.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
