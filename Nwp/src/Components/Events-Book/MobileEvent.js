import './Book1.css';
import { useLocation, useNavigate } from 'react-router-dom';
import icons from './cityevent.json';
import { Link } from "react-router-dom";
import BackButton from '../BackButton/BackButton';
import { useEffect } from 'react';

const MobileEvent = (props) => {
    const location = useLocation();
    let i=1;
    const navigate = useNavigate();
    useEffect(()=>{
        if(window.innerWidth > 929){
            navigate("/events");
        }
    },[])
    return (
        <div className="bg">
            
        <BackButton />
        <div className='mobbg'>
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <td>
                            <div id="top-scroll"></div>
                            <div id="top-scroll2"></div>
                            <div id="top-parchment"></div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="parchment">
                                <div id="paper" className='paper'>

                                    {icons.cities.map((icon) => {
                                        if (location.state.cityname === icon.city)
                                            return (
                                                <div className="Mobile-grid-container" key={icon.id}><div className="cityheadermob">{icon.city}</div>
                                                    {
                                                        icon.events.map((eve) => {
                                                            return (
                                                                <Link to={`/EventDashboard/${location.state.cityname}/${(eve.split(" ")).join("_")}`} onClick={() => {props.EventClicking(`${eve}`, `${location.state.cityname}`)
                                                                }}>
                                                                <div className={`Mobile-eventsicons MobileEventsicon-${i} MobileEventsicon-${eve}`}  key={eve}>
                                                                    <div id='event-image-mob'><img className="mobile-icons" src={require(`./iconsevents/${eve}.png`)} alt={`${eve}`} />
                                                                    </div><div className="eventname-mob">{eve}</div>
                                                                    <div style={{display:"none"}}>{i++}</div>
                                                                </div>
                                                                </Link>
                                                            );
                                                        })}
                                                </div>
                                            );})}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <div id="bottom-scroll"></div>
                            <div id="bottom-scroll2"></div>
                            <div id="bottom-parchment"></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
    );
}
export default MobileEvent;