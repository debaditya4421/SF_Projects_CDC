import React from "react";
import "./Testimonials.css";
// import icon from "./images/1.jpeg";

export default function Testimonials() {
  const state = {
    cas: [
      {
        name: "Siddhant Sharma",
        content: `Spring Fest was a memorable experience for me. Working for such a huge fest was a really great experience. All the events held by Spring Fest were great and amazing.It was amazing to be there. I wish to be in SPRING FEST again.`,
        image: "icon",
      },

      {
        name: "Utkarsh Kala",
        image: "icon",
        content:
          "Where the normal Fests remain sparkling and vibrant, I found Spring Fest to be balanced where at one end you'll find the Sparks the other side keeps showering the Beauty of the existence of certain aspects of Generations. ",
      },
      {
        name: "Aditya Saurav",
        image: "icon",
        content: `I worked as a campus ambassador of my college at spring Fest 2021, IIT kharagpur. I really enjoyed working with the people of this organisation. I had lot of fun tasks to do and really liked doing them all. I would like to thank spring fest for giving me this opportunity.`,
      },
      {
        name: "Ayushi Baijal",
        image: "icon",
        content: `I just wanted to share a quick note and let you know that SF team did a really good job. I'm glad I decided to participate in Spring Fest with you guys. It's really great how beautifully your team conducted the entire event online.`,
      },
      {
        name: "Raghav Dogra",
        image: "icon",
        content: `Spring fest 2021 was an amazing experience for me. It was wonderful to be a part of something this big. The diversity of events made the fest, a lot more fun and engaging making it a memorable experience. Hope to be a part of Spring Fest.`,
      },
    ],
  };

  return (
    <div className="test-container">
      <div  className="test-head">
        <h1>

        TESTIMONIALS
        </h1>
        {/* <img src={icon} alt="" /> */}
      </div>
      <div className="testimonial-slider">
        {state.cas.map((ca, i) => {
          // let a=ca.image;
          return (
            <>
              <div key={i} className={"items item-" + i}>
                <div className="test-img2">
                  {/* <img
                    src={require("./images/" + (i + 1).toString() + ".jpeg")}
                    alt="profile pic"
                    className="test-img"
                  /> */}
                  <div className="test-img">

                  </div>
                  {/* <img src={icon} alt="" className="test-img"/> */}
                </div>
                <div className="test-text">
                  <i>{ca.content}</i>
                  <br />
                  <br />
                  <b>-{ca.name}</b>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
