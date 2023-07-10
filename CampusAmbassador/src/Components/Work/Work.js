import React from "react";
import "./Work.css";
import honeycomb from "./Honeycomb.png";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import 'react-awesome-slider/dist/styles.css';

const Work = () => {
  
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <React.Fragment>
      <div className="work-grid">
        
        <div className="work-hexagon-container">
          <img className="honeyclass" src={honeycomb} alt="" />

          <div class="work-clip-block-1">
            <div className="work-clip-each work-clip-gradient">
              <div class="work-clip-caption" >PUBLICITY
              <p className="work-content">Compose, execute and pilot a publicity plan in your city and college.</p></div>
            </div>
          </div>
          <div class="work-clip-block-2">
            <div className="work-clip-each work-clip-gradient">
              <div class="work-clip-caption">PUBLIC RELATIONS
              <p className="work-content">Extend your professional network.</p></div>
            </div>
          </div>
          <div class="work-clip-block-3">
            <div className="work-clip-each work-clip-gradient">
              <div class="work-clip-caption">SPOKESPERSON
              <p className="work-content">Representative and point of contact from your college.</p></div>
            </div>
          </div>
          <div class="work-clip-block-4">
            <div className="work-clip-each work-clip-gradient">
              <div class="work-clip-caption">SPEARHEAD
              <p className="work-content">Lead and facilitate participation from your college.</p></div>
            </div>
          </div>
          <div class="work-clip-block-5">
            <div className="work-clip-each work-clip-gradient">
              <div class="work-clip-caption">EVENT MANAGEMENT
              <p className="work-content">Orchestrate the execution of Spring Fest events throughout the year.</p></div>
            </div>
          </div>
          <div class="work-clip-block-6">
            <div className="work-clip-each work-clip-gradient">
              <div class="work-clip-caption">SOCIAL RESPONSIBILITY
              <p className="work-content">Be a part of Spring Fest's social responsibilities aimed for the betterment of the society.</p></div>
            </div>
          </div>
        </div>


        <div class="work-main">
          <div class="work-container kuk-cont color-3">
            <div
              data-letters={`WORK AND \nRESPONSIBILITIES`}
              class="work-link link--kukuri" id="work-head1"
            >
              WORK AND
              <br/>RESPONSIBILITIES
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-main-div">
                <h2 className="mobile-heading" id="work-head">WORK &</h2>
                <h2 className="mobile-heading">RESPONSIBILITIES</h2>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={2000}
                    animation="cubeAnimation"
                    className="perks-slider"
                >
                    <div className="mobile-perks-gallery">
                        <img src={require('./publicity.png')}></img>
                        <p>Compose, execute and pilot a publicity plan in your city and college.</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./event-management.png')}></img>
                        <p>Orchestrate the execution of Spring Fest events throughout the year.</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./relation.jpg')}></img>
                        <p>Extend your professional network.</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./social.png')}></img>
                        <p>Be a part of Spring Fest's social responsibilities aimed for the betterment of the society.</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./spear.png')}></img>
                        <p>Lead and facilitate participation from your college.</p>
                    </div>
                    <div className="mobile-perks-gallery">
                        <img src={require('./spoke.jpg')}></img>
                        <p>Representative and point of contact from your college.</p>
                    </div>
                </AutoplaySlider>
            </div>
      {/* <div
                className="responmob"
                style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${require("../../../Assets/images/bg_work.jpg")})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "right",
                }}
            >
                <h2
                    style={{
                        fontFamily: "Major Mono Display",
                    }}
                    className={(classes.header, "headresp")}
                >
                    WORK & RESPONSIBILITIES
                </h2>
                <center>
                    <AutoplaySlider
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={2000}
                        animation="cubeAnimation"
                        className="responslider"
                    >
                        <div className={classes["business-card"]}>
                            <h5>Publicity</h5>
                            <img
                                src={honeycomb}
                            />
                            <p>
                                Compose, execute and pilot a publicity plan in
                                your city and college.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Public Relations</h5>
                            <img
                                src={honeycomb}
                            />
                            <p>Extend your professional network.</p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Social Responsibility</h5>
                            <img
                                src={honeycomb}
                            />
                            <p>
                                Be a part of Spring Fest's social
                                responsibilities aimed for the betterment of the
                                society.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Spearhead</h5>
                            <img
                                src={honeycomb}
                            />
                            <p>
                                Lead and facilitate participation from your
                                college.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Event Management</h5>
                            <img
                                src={honeycomb}
                            />
                            <p>
                                Orchestrate the execution of Spring Fest events
                                throughout the year.
                            </p>
                        </div>
                        <div className={classes["business-card"]}>
                            <h5>Spokesperson</h5>
                            <img
                                src={honeycomb}
                            />
                            <p>
                                Representative and point of contact from your
                                college.
                            </p>
                        </div>
                    </AutoplaySlider>
                </center>
            </div> */}
    </React.Fragment>
  );
};

export default Work;
