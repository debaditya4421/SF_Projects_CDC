import React from "react";
// import 'landing.css';
import "./landingpage.css";
import hitch from "./images/hich-hike.png";
import cloud from "./images/profile.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal";
import back from "../../Images/back.png";
import Navbar from "../Navbar/Navbar";
import video from "./cloud animation (1).mp4"

function Landingpage(props) {
  const {
    setShowBack,
    showBack,
    setlogoutdecision,
    logout_decision,
    setModalLandingPage,
    ModalLandingPage,
    setStatus,
    status,
    change_logout_decision,
    toggleBackClickPgeTurn,
    showModalLandingPage,
    log,
  } = props;
  let navigate = useNavigate();
  const animation = () => {
    document.getElementById("video").style.zIndex=10
    document.getElementById('video').currentTime = 0;
    console.log("ani",document.getElementById('video').currentTime)
    document.getElementById("video").play()
    document.getElementById('video').style.opacity = 1;
    setTimeout(() => {
      document.getElementById("button-container-container").style.display =
      "block";
    document.getElementById("button-container").style.display = "grid";
    setTimeout(() => {
      document.getElementById("button-container").style.left = "0";
      document.getElementById("button-container").style.right = "0";
      document.querySelectorAll(".hitch-hike")[0].style.opacity = 0;
      document.querySelectorAll(".hitch-hike")[0].style.scale = "0";
      document.querySelectorAll(".butto1")[0].style.opacity = 0;
      document.querySelectorAll(".butto1")[0].style.scale = "0";

      console.log(document.querySelectorAll(".butto"));
      document.querySelectorAll(".butto").forEach((ele) => {
        ele.style.opacity = 1;
      });
    }, 100);
    }, 1500);
   setTimeout(() => {
    document.getElementById('video').style.opacity = 0;
    
   }, 2300);
setTimeout(() => {
  document.getElementById("video").style.zIndex=-1000000
  
}, 2900);
  };
  const animationrev = () => {

    document.getElementById("video").style.zIndex=10
document.getElementById('video').currentTime = 0;
console.log("rev",document.getElementById('video').currentTime)

    document.getElementById("video").play()
    document.getElementById('video').style.opacity = 1;

    setTimeout(() => {
      document.getElementById("button-container").style.left = "-80%";
    document.getElementById("button-container").style.right = "-80%";
    document.querySelectorAll(".hitch-hike")[0].style.scale = "1";
    document.querySelectorAll(".hitch-hike")[0].style.opacity = 1;
    document.querySelectorAll(".butto1")[0].style.scale = "1";
    document.querySelectorAll(".butto1")[0].style.opacity = 1;

    console.log(document.querySelectorAll(".butto"));
    document.querySelectorAll(".butto").forEach((ele) => {
      ele.style.opacity = 0;
    });
    }, 1450);
    
   setTimeout(() => {
    document.getElementById('video').style.opacity = 0;
    
   }, 2300);
    setTimeout(() => {
      document.getElementById("video").style.zIndex=-1000000
      document.getElementById("button-container").style.display = "none";
      document.getElementById("button-container-container").style.display =
        "none";

    }, 2900);
  };

  useEffect(() => {
    if (props.backclicked) {
      setTimeout(() => {
        animation();
        props.toggleBackClickPgeTurn();
        setShowBack(true);
      }, 1);
    }
    document.getElementsByClassName("landing-page")[0].style.backgroundImage=`url(${props.img1})`;
  }, []);

  setTimeout(() => {
    if (localStorage.getItem("data")) {
      setStatus("Logout");
    } else {
      setStatus("Sign In");
    }
  }, 100);

  return (
    <div className="landing-container">
        <video preload id="video" className="w-full h-full landingpage-video">
        <source
          src={video}
          type="video/mp4"
        />

        </video>
      {showBack && (
        <div
          onClick={() => {
            animationrev();
          }}
        >
          <button
            className="BackButtonLandingPage"
            onClick={() => {
              animationrev();
              setShowBack(!showBack);
            }}
          >
            <img src={back} alt="" />
          </button>
        </div>
      )}
      <div className="landing-page">
        <img className="hitch-hike" src={hitch} alt="" />
        <div
          className="butto1"
          onClick={() => {
            animation();
            setShowBack(!showBack);
          }}
        >
          <div className=" cloud-name ">Enter</div>
          <img className=" cloud-img" src={cloud} alt="" />
        </div>
      </div>
      <div className="landing-button-container" id="button-container-container">
        <div className="landing-button" id="button-container">
          <div className="button-1 butto">
            <Link to="/events" className="landingPageButtonHover">
              <h1 className="cloud-name">Events</h1>
              <img className="cloud-img cloud-img-1" src={cloud} alt="" />
            </Link>
          </div>
          <div className="button-2 butto">
            <div
              onClick={() => {
                // props.setLoginSignup();
                log();
              }}
              className="landingPageButtonHover"
            >
              <h1 className="cloud-name">
                {localStorage.getItem("data") ? "Sign Out" : "Sign In"}
              </h1>
              <img className="cloud-img cloud-img-1" src={cloud} alt="" />
            </div>
          </div>
          <div className="button-3 butto">
            <h1
              className="cloud-name"
              onClick={() => {
                if (status == "Logout") {
                  navigate("/profile");
                } else {
                  props.showToast(true, "Please Login First", "Unauthorized Access");
                }
              }}
            >
              My Profile
            </h1>
            <img
              className="cloud-img cloud-img-1"
              src={cloud}
              alt=""
              onClick={() => {
                if (status == "Logout") {
                  navigate("/profile");
                } else {
                  props.showToast(
                    true,
                    "You are not logged in",
                    "Unsuccessful"
                  );
                }
              }}
            />
          </div>
          <div className="button-4 butto">
            <Link to={"/contact"} className="landingPageButtonHover">
              <h1 className="cloud-name">Contact Us</h1>
              <img className="cloud-img cloud-img-1" src={cloud} alt="" />
            </Link>
          </div>
          

          <div className="button-5 butto">
            <Link to={"/MobileGallery"} className="landingPageButtonHover">
              <h1 className="cloud-name">Gallery</h1>
              <img className="cloud-img cloud-img-1" src={cloud} alt="" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Landingpage;
