import './Pstyle.css';
import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import 'react-awesome-slider/dist/styles.css';
function Perk() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <React.Fragment>
            <div className='perks-div'>
                <nav className="perkshead"><h1>PERKS</h1></nav>
                
                <div className="graphic-container">

                    <div className="center-circles-container">

                        <div className="single">
                            <div className="pcircle one">
                                <div className="dot"></div>
                                <div className="content-container">
                                    <div className="line line1 disabled" ></div>
                                    <h2 id="he1" className='perkh2'>Free Night Passes</h2>
                                   
                                </div>
                            </div>
                        </div>

                        <div className="double">
                            <div className="pcircle two">
                                <div className="content-container">
                                    <div className="line line2 disabled"></div>
                                    <h2 id="he2" className='perkh2'>Meet with Celebrities</h2>
                                    
                                </div>
                            </div>
                            <div className="pcircle three">
                                <div className="content-container">
                                    <div className="line line3 disabled"></div>
                                    <h2 id="he3" className='perkh2'>Exciting Goodies</h2>
                                   
                                </div>
                            </div>
                        </div>

                        <div className="double">
                            <div className="pcircle four">
                                <div className="dot"></div>
                                <div className="content-container">
                                    <div className="line line4 disabled"></div>
                                    <h2 id="he4" className='perkh2'>Rewards</h2>
                                    
                                </div>
                            </div>
                            <div className="pcircle five">
                                <div className="content-container">
                                    <div className="line line5 disabled"></div>
                                    <h2 id="he5" className='perkh2'>Merchandises</h2>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="single">
                            <div className="pcircle six">
                                <div className="dot"></div>
                                <div className="icon">
                                    <i className="far fa-building">6</i>
                                </div>
                                <div className="content-container">
                                    <div className="line line6 disabled"></div>
                                    <h2 id="he6" className='perkh2'>Cash Prizes</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="mobile-main-div">
                <h2 className="mobile-heading">PERKS</h2>
                
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={2000}
                    animation="cubeAnimation"
                    className="perks-slider"
                >
                    <div className="mobile-perks-gallery">
                        <img src={require('../Perks/imca6.png')} alt="icon"></img>
                        <p>FREE STAR NIGHT PASSES</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./imca51.png')} alt="icon"></img>
                        <p>NO PARTICIPATION FEE</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./goodies.jpg')} alt="icon"></img>
                        <p>BRANDED MERCHANDISE</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img id="tshirt" src={require('./imca4.png')} alt="icon"></img>
                        <p>EXCITING GOODIES LIKE FREE TSHIRTS & COUPONS</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./imca2.png')} alt="icon"></img>
                        <p>CERTIFICATES</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./celebrity.jpg')} alt="icon"></img>
                        <p>MEET CELEBRITIES</p>
                    </div>
                </AutoplaySlider>
            </div>
        </React.Fragment>

    );
}

export default Perk;