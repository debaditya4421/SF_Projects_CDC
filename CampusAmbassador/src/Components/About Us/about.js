import React from "react";
import "./about.css";
import LineChart from "./linechart";

function About(props) {
  return (
    <>
      <div className="aboutus">
        <div className="abt-content">
        <h1 className="center">ABOUT US</h1>
        
          <p className="center" data-aos="fade-right">
            <em className="pspan">Spring Fest</em> , IIT Kharagpur is one of the
            largest Social and Cultural Fests in India. Embodying the true
            spirit of youth, Spring Fest provides a platform for young talent
            from all over India to showcase their varied talents. As we enter
            into the 64th edition all we are looking forward to is to leave
            behind a legacy of exquisite experiences. Now, you too have a chance
            to become a part of this cultural extravaganza. With Campus
            Ambassador Program you get a chance to be an extended part of the
            Organizing team of Spring Fest 2023.
          </p>
       
        <div className="progressbar" data-aos="fade-right">
          <div className="bar">
            <label className="bar-num">80k +</label>
            <LineChart color="yellow" chart={props.chart} />
            <label className="bar-txt">FOOTFALL</label>
          </div>
          <div className="bar">
            <LineChart color="rgb(4, 156, 251)" chart={props.chart} />
            <label className="bar-num">850 +</label>

            <label className="bar-txt">COLLEGE</label>
          </div>
          <div className="bar">
            <LineChart color="rgb(7, 201, 11)" chart={props.chart} />
            <label className="bar-num">30lac +</label>

            <label className="bar-txt">WEBSITE HITS</label>
          </div>
        </div>

        </div>
       
      </div>
    </>
  );
}

export default About;
