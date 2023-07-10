import event_3 from "./EventsIcons/Nritklya.png";
import event_8 from "./EventsIcons/SF idol.png";
import event_9 from "./EventsIcons/shake a leg.png";
import event_10 from "./EventsIcons/shuffle.png";
import event_12 from "./EventsIcons/Rapmania.png";
// import event_13 from "./EventsIcons/Beat It.png";
import event_11 from "./EventsIcons/Two For A Tango.png";
import event_7 from "./EventsIcons/poetry.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

const EventContent = (props) => {
    const numEvents = props.numEvents;
    const{smthng,setSmthng} = useContext(UserContext);
    // if(numEvents!==14){
    //     return (
    //         <div className="eventContent">
    //             <div className="CityIconsLeftPage">
    //                 {/* <div className="EventBookEventsLine1"> */}
    //                 <div className="EventIcon1 iconLeft1-1">
    //                     <Link to={`/EventDashboard/${props.city}/SF_Idol`}><div><img src={event_8} alt="error" onClick={() => { props.EventClicking("SF Idol", props.city);setSmthng(props.pgn-1) }} /><div>SF Idol</div></div></Link>
    //                 </div>
    //                 <div className="EventIcon1 iconLeft1-2">
    //                     <Link to={`/EventDashboard/${props.city}/Shuffle`}><div><img src={event_10} alt="error" onClick={() => { props.EventClicking("Shuffle", props.city);setSmthng(props.pgn-1) }} /><div>Shuffle</div></div></Link>
    //                 </div>
    //                 {/* </div> */}
    //                 <div className="EventIcon1 iconLeft1-3">
    //                     <Link to={`/EventDashboard/${props.city}/Shake_A_Leg`}><div><img src={event_9} alt="error" onClick={() => { props.EventClicking("Shake A Leg", props.city);setSmthng(props.pgn-1) }} /><div>Shake A Leg</div></div></Link>
    //                 </div>
    //                 <div className="EventIcon1 iconLeft1-4">
    //                     <Link to={`/EventDashboard/${props.city}/Two_For_A_Tango`}><div><img src={event_11} alt="error" onClick={() => { props.EventClicking("Two For A Tango", props.city);setSmthng(props.pgn-1) }} /><div>Two For A Tango</div></div></Link>
    //                 </div>
    //                 <div className="EventIcon1 iconLeft1-5">
    //                     <Link to={`/EventDashboard/${props.city}/Nrityakala`}><div><img src={event_3} alt="error" onClick={() => { props.EventClicking("Nrityakala", props.city);setSmthng(props.pgn-1) }} /><div>Nrityakala</div></div></Link>
    //                 </div>
    //             </div>

    //         </div>
    //     );
    // }
    // else if (numEvents === 14) {
        return (
            <div className="eventContent">
                <div className="CityIconsAll CityIconsLeft2">
                    <div className="EventIcon iconLeft-1"><Link to={`/EventDashboard/${props.city}/Rapmania`}><div><img src={event_12} alt="error" onClick={() => { props.EventClicking("Rapmania", props.city);setSmthng(props.pgn-1) }} /><div>Rapmania</div></div></Link></div>
                    <div className="EventIcon iconLeft-2"><Link to={`/EventDashboard/${props.city}/Beat_It`}><div><img src={event_12} alt="error" onClick={() => { props.EventClicking("Beat It", props.city);setSmthng(props.pgn-1) }} /><div>Beat It</div></div></Link></div>
                    <div className="EventIcon iconLeft-3"><Link to={`/EventDashboard/${props.city}/Shake_A_Leg`}><div><img src={event_9} alt="error" onClick={() => { props.EventClicking("Shake A Leg", props.city);setSmthng(props.pgn-1) }} /><div>Shake A Leg</div></div></Link></div>
                    <div className="EventIcon iconLeft-4"><Link to={`/EventDashboard/${props.city}/Two_For_A_Tango`}><div><img src={event_11} alt="error" onClick={() => { props.EventClicking("Two For A Tango", props.city);setSmthng(props.pgn-1) }} /><div>Two For A Tango</div></div></Link></div>
                    <div className="EventIcon iconLeft-5"><Link to={`/EventDashboard/${props.city}/Nrityakala`}><div><img src={event_3} alt="error" onClick={() => { props.EventClicking("Nrityakala", props.city);setSmthng(props.pgn-1) }} /><div>Nrityakala</div></div></Link></div>
                    <div className="EventIcon iconLeft-6"><Link to={`/EventDashboard/${props.city}/SF_Idol`}><div><img src={event_8} alt="error" onClick={() => { props.EventClicking("SF Idol", props.city);setSmthng(props.pgn-1) }} /><div>SF Idol</div></div></Link></div>
                    <div className="EventIcon iconLeft-7"><Link to={`/EventDashboard/${props.city}/Shuffle`}><div><img src={event_10} alt="error" onClick={() => { props.EventClicking("Shuffle", props.city);setSmthng(props.pgn-1) }} /><div>Shuffle</div></div></Link></div>
                    
                </div>
            </div>
        );
    // }

}
export default EventContent;
// window.addEventListener('DOMContentLoaded', () => EventContent());
