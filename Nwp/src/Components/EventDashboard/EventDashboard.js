import React, { useState, useEffect } from "react";
// import Modal_Registration from "./Modal_Registration";

import Modal_About from "./Modal_About";
import Modal_Rules from "./Modal_Rules";
import Modal_Registration_page from "./Modal_Registration_page";
import {useParams} from 'react-router-dom';

import rope from "./images/Asset_8.png";
import rope2 from "./images/Asset 9.png";
import rope3 from "./images/Asset 10.png";
import about from "./images/Asset 4.png";
import subs from "./images/Asset 5.png";
import reg from "./images/Asset 6.png";
import rules from "./images/Asset 7.png";
import rules2 from "./images/Venue.png";
import BackButton from "../BackButton/BackButton";
import Navbar from "../Navbar/Navbar";

function EventDashboard(props) {
  let params = useParams();
  const {city , event} = params
  const changeEvent=(event.split("_")).join(" ")
  console.log(city);
  useEffect(() => {
    // localStorage.clear();
    // localStorage.setItem("loginStat", true);
    // localStorage.setItem("regStat", true);
  }, []);
  const toggleAboutModal = () => {
    setModalAboutOpen(true);
    setModalRulesOpen(false);
    setModalRegistrationOpen(false);
  };
  const toggleRulesModal = () => {
    setModalAboutOpen(false);
    setModalRulesOpen(true);
    setModalRegistrationOpen(false);
  };
  const toggleRegistrationModal = () => {
    setModalAboutOpen(false);
    setModalRulesOpen(false);
    setModalRegistrationOpen(true);
  };
  const [modalAboutOpen, setModalAboutOpen] = useState(false);
  const [modalRulesOpen, setModalRulesOpen] = useState(false);

  const [modalRegistrationOpen, setModalRegistrationOpen] = useState(false);
  const [isSub,setisSub]=useState(false); 

  // const [name, setname] = useState();
  // const [city, setcity] = useState();

  useEffect(()=>{
    // setname(props.name); 
    // setcity(props.city); 
    // console.log(props.name,"nota"); 
  },[]);
  return (
    <>
      <div className="EventDashboard">
        <BackButton/>
        <div className="evntDash">
          <div className="body-button">
            <img className="rope" src={rope} alt="rope" />
            <img className="rope2" src={rope2} alt="rope" />
            <img className="rope3" src={rope3} alt="rope" />
            <img
              className="class-btn"
              src={about}
              alt="About Bttn"
              onClick={() => {
                toggleAboutModal();
              }}
            />
            <img
              className="sub-btn"
              src={subs}
              alt="Sub Bttn"
              onClick={() => {
                toggleRulesModal();
              }}
            />
            <img
              className="reg-btn"
              src={reg}
              alt="Reg Bttn"
              onClick={() => {
                toggleRegistrationModal();
                setisSub(false); 
              }}
            />
            <img
              className="rules-btn"
              src={props.name==="A Picture Tale"?rules:rules2}
              alt="Rules Bttn"
              onClick={() => {
                toggleRegistrationModal();
                setisSub(true); 
              }}
            />
          </div>
        </div>
          {/* <h1 className="event-name-heading">{props.name}</h1> */}

        {modalAboutOpen && (
          <Modal_About setOpenModal={setModalAboutOpen} name={changeEvent}  />
        )}
        {modalRulesOpen && (
          <Modal_Rules setOpenModal={setModalRulesOpen} name={changeEvent} />
        )}
        {modalRegistrationOpen && (
          <Modal_Registration_page
            setOpenModal={setModalRegistrationOpen}
            showToast={props.showToast}
            name={changeEvent}
            isSub={isSub}
            evcity={city}
          />
        )}
      </div>
    </>
  );
}

export default EventDashboard;
