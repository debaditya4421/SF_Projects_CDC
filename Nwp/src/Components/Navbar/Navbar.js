import React, { useEffect } from "react";
import pic1 from "./img1.png";
import { useState } from "react";
import "./nav_style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import pic2 from "./event.png";
import pic3 from "./img1.png";
import pic4 from "./cntct.png";
import { useLocation } from "react-router-dom";
function Navbar(props) {
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

  const location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("hamburger").style.display = "none";
    } else {
      document.getElementById("hamburger").style.display = "block";
    }
  }, [location]);
  // window.onclick = (e) => {
  //   if (e.srcElement.id !== "hamburger") {
  //     if (document.getElementById("hmbrgr2").style.display != "none") {
  //       animate_menu_icon_disappearance();
  //     }
  //   }
  // };
  const animate_menu_icon_appearance = () => {
    document.getElementById("li1").style.opacity = "0";
    document.getElementById("li1").style.display = "flex";
    document.getElementById("li2").style.opacity = "0";
    document.getElementById("li2").style.display = "block";
    document.getElementById("li3").style.opacity = "0";
    document.getElementById("li3").style.display = "block";
    document.getElementById("li4").style.opacity = "0";
    document.getElementById("li4").style.display = "block";
    document.getElementById("li5").style.opacity = "0";
    document.getElementById("li5").style.display = "block";
    document.getElementById("bar1").style.transform =
      "rotateZ(45deg) translateY(10px)";
    document.getElementById("bar3").style.transform =
      "rotateZ(-45deg) translateY(-10px)";
    document.getElementById("bar2").style.opacity = "0";
    document.getElementById("li1").style.opacity = "1";
    document.getElementById("hmbrgr").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("hmbrgr2").style.display = "block";
      document.getElementById("hmbrgr").style.display = "none";
    }, 210);
    setTimeout(() => {
      document.getElementById("li2").style.opacity = "1";
    }, 100);
    setTimeout(() => {
      document.getElementById("li3").style.opacity = "1";
    }, 300);
    setTimeout(() => {
      document.getElementById("li4").style.opacity = "1";
    }, 500);
    setTimeout(() => {
      document.getElementById("li5").style.opacity = "1";
    }, 700);
    props.toggleShowLoginFalse();
  };
  const animate_menu_icon_disappearance = () => {
    document.getElementById("bar1").style.transform =
      "rotateZ(0deg) translateY(0px)";
    document.getElementById("bar3").style.transform =
      "rotateZ(0deg) translateY(0px)";
    document.getElementById("bar2").style.opacity = "1";
    document.getElementById("li5").style.opacity = "0";
    document.getElementById("hmbrgr").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("hmbrgr2").style.display = "none";
      document.getElementById("hmbrgr").style.display = "block";
    }, 780);
    setTimeout(() => {
      document.getElementById("li4").style.opacity = "0";
    }, 100);
    setTimeout(() => {
      document.getElementById("li3").style.opacity = "0";
    }, 300);
    setTimeout(() => {
      document.getElementById("li2").style.opacity = "0";
    }, 500);
    setTimeout(() => {
      document.getElementById("li1").style.opacity = "0";
    }, 700);
    setTimeout(() => {
      document.getElementById("li1").style.opacity = "0";
      document.getElementById("li1").style.display = "none";
      document.getElementById("li2").style.opacity = "0";
      document.getElementById("li2").style.display = "none";
      document.getElementById("li3").style.opacity = "0";
      document.getElementById("li3").style.display = "none";
      document.getElementById("li4").style.opacity = "0";
      document.getElementById("li4").style.display = "none";
      document.getElementById("li5").style.opacity = "0";
      document.getElementById("li5").style.display = "none";
      document.getElementById("li6").style.opacity = "0";
      document.getElementById("li6").style.display = "none";
      props.toggleShowLoginTrue();
    }, 800);
  };
  return (
    <div
      id="hamburger"
      tabIndex={-1}
      onBlur={() => {
        animate_menu_icon_disappearance();
      }}
    >
      {/* <div>Icon</div> */}
      <div
        id="hmbrgr"
        onClick={() => {
          animate_menu_icon_appearance();
        }}
      >
        <div className="bar" id="bar1"></div>
        <div className="bar" id="bar2"></div>
        <div className="bar" id="bar3"></div>
      </div>
      <div id="menu11">
        <ul id="menuitems">
          <li id="li1" className="item1 menu-button flex justify-between">
            <div className="menudis">
              {" "}
              <div className="txt">Menu</div>
            </div>
            <div
              id="hmbrgr2"
              onClick={() => {
                animate_menu_icon_disappearance();
              }}
            >
              <div className="bar" id="bar1close"></div>
              <div className="bar" id="bar3close"></div>
            </div>
          </li>
          <li id="li2" className="item1 home-button hmbr-links">
            <Link to="/">
              <div className="menudis">
                {" "}
                <div className="imgm invert">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px">    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"/></svg>
                </div>{" "}
                <div className="txt11">HOME</div>
              </div>
            </Link>
          </li>
          <li id="li3" className="item1 events-button hmbr-links">
            <Link to="/events">
              <div className="menudis">
                {" "}
                <div className="imgm">
                  <img src={pic2} alt="" />
                </div>{" "}
                <div className="txt11">EVENTS</div>
              </div>
            </Link>
          </li>
          <li id="li4" className="item1 profile-button hmbr-links">
            <div
              className="menudis"
              onClick={() => {
                if (localStorage.getItem("data")) {
                  navigate("/profile");
                } else {
                  props.showToast(true, "Please Login First", "Unauthorized Access");
                  animate_menu_icon_disappearance()

                }
              }}
            >
              {" "}
              <div className="imgm">
                <img src={pic3} alt="" />
              </div>{" "}
              <div className="txt11">MY PROFILE</div>
            </div>
          </li>
          <li id="li5" className="item1 contact-button hmbr-links">
            <Link to="/contact">
              <div className="menudis">
                {" "}
                <div className="imgm">
                  <img src={pic4} alt="" />
                </div>{" "}
                <div className="txt11">CONTACT US</div>
              </div>
            </Link>
          </li>
          <li id="li6" className="item1 Login-button hmbr-links">
            <div
              className="menudis"
              onClick={() => {
                log();
              }}
              style={{cursor:"pointer"}}
            >
              {" "}
              <div className="imgm">
                <img src={pic4} alt="" />
              </div>{" "}
              <div className="txt11">{status}</div>
            </div>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;