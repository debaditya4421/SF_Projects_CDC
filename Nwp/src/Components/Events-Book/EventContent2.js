import event_2 from "./EventsIcons/hilary ensus.png";
import event_6 from "./EventsIcons/nukkAD.png";
// import event_4 from "./EventsIcons/I Me Myself.png";
import event_5 from "./EventsIcons/mime.png";
import event_7 from "./EventsIcons/poetry.png";
// import event_1 from "./EventsIcons/A Picture Tale.png";
import data from "./db.json";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { useContext } from "react";


const EventContent2 = (props) => {

    const citycheck = props.city;
    const cities = data.cities;
    const numEvents = props.numEvents;
    const{smthng,setSmthng} = useContext(UserContext);

    // if(numEvents === 11){
    //     return(
    //     <div className="eventContent2">
    //         <div className="CityIconsAll CityIconRight1">
    //             <div className="EventIcon icon6-11">
    //             <Link to={`/EventDashboard/${props.city}/Hindi_Poetry_Slam`}>
    //                 <div onClick={() => {props.EventClicking("Hindi Poetry Slam", props.city);setSmthng(props.pgn-1)}}><img src={event_7} alt="error" /><div>Hindi Poetry Slam</div></div>
    //             </Link>
    //             </div>
    //             <div className="EventIcon icon10-11">
    //             <Link to={`/EventDashboard/${props.city}/Nukkad`}><div onClick={() => {props.EventClicking("Nukkad", props.city);setSmthng(props.pgn-1)}}><img src={event_6} alt="error" /><div>Nukkad</div></div></Link>
    //             </div>
                
    //             <div className="EventIcon icon8-11">
    //             <Link to={`/EventDashboard/${props.city}/I_Me_Myself`}><div onClick={() => {props.EventClicking("I Me Myself", props.city);setSmthng(props.pgn-1)}}><img src={event_4} alt="eeror" /><div>I Me Myself</div></div></Link>
    //             </div>

    //             <div className="EventIcon icon7-11">
    //             <Link to={`/EventDashboard/${props.city}/English_Poetry_Slam`}><div onClick={() => {props.EventClicking("English Poetry Slam", props.city);setSmthng(props.pgn-1)}}><img src={event_7} alt="error"/><div>English Poetry Slam</div></div></Link>
    //             </div>
    //             <div className="EventIcon icon11-11">
    //             <Link to={`/EventDashboard/${props.city}/A_Picture_Tale`}><div onClick={() => {props.EventClicking("A Picture Tale", props.city);setSmthng(props.pgn-1)}}><img src={event_1} alt="error" /><div>A Picture Tale</div></div></Link>
    //             </div>
    //         </div>
    //     </div>
    //     );
    // }
    // else if(numEvents !== 11){
        return (
            <div className="eventContent2">
                <div className="CityIconsAll CityIconRight2">
                    <div className={`EventIcon icon6-12`}>
                        <Link to={`/EventDashboard/${props.city}/Hindi_Poetry_Slam`}><div onClick={() => {props.EventClicking("Hindi Poetry Slam", props.city);setSmthng(props.pgn-1)}}><img src={event_7} alt="error" /><div>Hindi Poetry Slam</div></div>
                        </Link>
                    </div>
                    
                    <div className={`EventIcon icon7-12`}><Link to={`/EventDashboard/${props.city}/A_Picture_Tale`}><div onClick={() => {props.EventClicking("A Picture Tale", props.city);setSmthng(props.pgn-1)}}><img src={event_7} alt="error" /><div>A Picture Tale</div></div></Link>
                    </div>

                  
                    <div className={`EventIcon icon8-12`}><Link to={`/EventDashboard/${props.city}/Nukkad`}><div onClick={() => {props.EventClicking("Nukkad", props.city);setSmthng(props.pgn-1)}}><img src={event_6} alt="error" /><div>Nukkad</div></div></Link>
                    </div>

                  
                    <div className={`EventIcon icon9-12`}><Link to={`/EventDashboard/${props.city}/I_Me_Myself`}><div onClick={() => {props.EventClicking("I Me Myself", props.city);setSmthng(props.pgn-1)}}><img src={event_7} alt="eeror" /><div>I Me Myself</div></div></Link>
                    </div>

                    <div className={`EventIcon icon10-12`}><Link to={`/EventDashboard/${props.city}/Mime`}><div onClick={() => {props.EventClicking("Mime", props.city);setSmthng(props.pgn-1)}}><img src={event_5} alt="error" /><div>Mime</div></div></Link>
                    </div>

                    <div className={`EventIcon icon11-12`}><Link to={`/EventDashboard/${props.city}/English_Poetry_Slam`}><div onClick={() => {props.EventClicking("English Poetry Slam", props.city);setSmthng(props.pgn-1)}}><img src={event_7} alt="error"/><div>English Poetry Slam</div></div></Link>
                    </div>

                    <div className={`EventIcon icon12-12`}><Link to={`/EventDashboard/${props.city}/Hilarity_Ensues`}><div onClick={() => {props.EventClicking("Hilarity Ensues", props.city);setSmthng(props.pgn-1)}}><img src={event_2} alt="error" /><div>Hilarity Ensues</div></div></Link>
                    </div>
                    
                </div>
            </div>
        );
    // }
    
}
 
export default EventContent2;
// window.addEventListener('DOMContentLoaded', () => EventContent2());