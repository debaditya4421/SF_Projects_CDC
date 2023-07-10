import FlipPage from "./FlipPage";
// import { HashRouter as Router , Routes,Route } from 'react-router-dom';
import Book1 from "./Book1";
import BackButton from "../BackButton/BackButton";
import { useState } from "react";
// import { useState } from 'react';
// import EventDashboard from '../EventDashboard/EventDashboard';
// // import EventDashboard from '../Components/EventDashboard/EventDashboard';
// import MobileEvent from './MobileEvent';
const EventBook = (props) => {
    
    return (
       <div className="eventbookout">
        <div className="eventbook">
            <FlipPage EventClicking={props.EventClicking} togglebackClickPage={props.toggleBackClickPgeTurn} img1={props.img1} img2={props.img2} img3={props.img3} img4={props.img4} img5={props.img5} img6={props.img6} img7={props.img7}/>
        </div >
        <div className="mobilebackground"><Book1 EventClicking={props.EventClicking} togglebackClickPage={props.toggleBackClickPgeTurn}/></div>

        </div>
       
    );
}
 
export default EventBook;
// setTimeout(()=>{EventBook()}, 1000);
// window.addEventListener('DOMContentLoaded', () => EventBook());
