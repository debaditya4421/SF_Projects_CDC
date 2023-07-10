import React from 'react';
import './Book1.css';
import { useNavigate } from 'react-router-dom';
import icons from './cityevent.json'
import BackButton from '../BackButton/BackButton';
// import MobileEvent from './MobileEvent';
const Book1 = (props) => {
    
    var cityname;
    const navigate = useNavigate();
    // const cities = ["Ahmedabad", "Bangalore", "Bhubaneshwar", "Chandigarh", "Chennai", "Delhi", "Guwahati", "Hyderabad", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Nagpur", "Patna", "Pune", "Raipur", "Ranchi"];
    const handleClassAddition = (cityna) => {
        document.getElementsByClassName("parchment")[0].classList.add("refurl");
        document.getElementsByClassName("Mobile-grid-container")[0].classList.add("fadeOut");
        var clickedCity={cityname:`${cityna}`};
        setTimeout(() => {
            console.log(clickedCity);
            navigate("/MobileEvent",{state:clickedCity});
        }, 1500);

    }

    return (
        <div className="bg">
        <BackButton togglebackclick={props.togglebackClickPage}/>
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
                                <div id="paper">
                                    <div className="Mobile-grid-container" >
                                        <div className='MobileHeaderCity'><h1>CITIES</h1></div>
                                        <div className='MobileCitycontainer'>
                                        {icons.cities.map((ic) => {
                                            return (
                                                <div className='Mobile-grid' id='griditemsmob' key={ic.id}>
                                                    <div className="Mobile-cityname" id='Mobilecitynames' onClick={()=>{cityname=ic.city;handleClassAddition(cityname)}}>{ic.city}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    </div>
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
export default Book1;