import React,{useState} from "react";
import "./Navbar.css";
import menu_icon from "./Icons/menu.png";
import LineChart from "../About Us/linechart";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar(props) {
  const present = props.present;
 const location=useLocation();
useEffect(() => {
  
 if(location.pathname=="/profile")
 {
  document.querySelector("#nav-option-1").classList.add("Logout-link");
  document.querySelector("#nav-option-1").classList.remove("home-link");
  document.querySelector("#nav-option-2").classList.add("Account-link");
  document.querySelector("#nav-option-2").classList.remove("about-link");
  document.querySelector("#nav-option-3").classList.add("Venue-link");
  document.querySelector("#nav-option-3").classList.remove("perk-link");
  document.querySelector("#nav-option-4").classList.add("Idea-link");
  document.querySelector("#nav-option-4").classList.remove("work-link");
  document.querySelector("#nav-option-5").classList.add("Guidelines-link");
  document.querySelector("#nav-option-5").classList.remove("testimonial-link");
  document.querySelector("#nav-option-6").classList.add("leaderboard-link");
  document.querySelector("#nav-option-6").classList.remove("team-link");

 }
}, [])
 const [ripples, setRipples] = useState(false)

  return (
    <>
      <section className="menu menu--circle">


        <input type="checkbox" id="menu__active" />
        <label htmlFor="menu__active" className="menu__active">
          <div className={`menu__toggle `} onClick={()=>{
            setRipples(!ripples)
          }}>
            <img src={menu_icon} alt="" className="menu-icon"/>
            <div className="icon">
              <div className="hamburger"></div>
            </div>
          </div>
          <div className={`menu__toggle1 ${ripples?"":"request-loader"}`} onClick={()=>{
            setRipples(!ripples)
          }}></div>
          <input type="radio" name="arrow--up" id="degree--up-0" />
          <input type="radio" name="arrow--up" id="degree--up-1" />
          <input type="radio" name="arrow--up" id="degree--up-2" />
          <div className="menu__listings">
            <div class="home-nav-pallete landing-page-pallete">{props.one}</div>  
            <div class="home-nav-pallete About-page-pallete">{props.two}</div>
            <div class="home-nav-pallete Perks-page-pallete">{props.three}</div>
            <div class="home-nav-pallete Work-page-pallete">{props.four}</div>
            <div class="home-nav-pallete Testimonials-page-pallete">{props.five}</div>
            <div class="home-nav-pallete Teams-page-pallete">{props.six}</div>
            <ul className="circle">
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                    id="nav-option-1"
                      href="#"
                      className="button home-link inline-block"
                      onClick={props.sixthfunc}
                      onMouseOver={() => {
                        document.querySelector(
                          ".Teams-page-pallete"
                        ).style.opacity = "1";
                      }}
                      onMouseLeave={() => {
                        document.querySelector(
                          ".Teams-page-pallete"
                        ).style.opacity = "0";
                      }}
                      style={{color:"#D7D7D6"}}
                    >
                      {props.icon6}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                    id="nav-option-2"
                      href="#"
                      className="button About-link inline-block"
                      onClick={() => {
                        if (present == 6) {
                          props.setB("outac");
                          props.setA("inac");
                        } else if (present == 1) {
                          props.setX("outc");
                          props.setA("inc");
                        } else if (present == 2) {
                          props.setY("outc");
                          props.setA("inc");
                        } else if (present == 3) {
                          props.setZ("outc");
                          props.setA("inc");
                        } else if (present == 4) {
                          props.setW("outc");
                          props.setA("inc");
                        }
                        
                        props.setPresent(5);
                        props.setChart("zigzag");
                      }}
                      onMouseOver={() => {
                        document.querySelector(
                          ".Testimonials-page-pallete"
                        ).style.opacity = "1";
                      }}
                      onMouseLeave={() => {
                        document.querySelector(
                          ".Testimonials-page-pallete"
                        ).style.opacity = "0";
                      }}
                      style={{color:"#D7D7D6"}}
                    >
                      {props.icon5}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                    id="nav-option-3"
                      href="#"
                      className="button perk-link inline-block"
                      onClick={() => {
                        if (present == 5) {
                          props.setA("outac");
                          props.setW("inac");
                        } else if (present == 6) {
                          props.setB("outac");
                          props.setW("inac");
                        } else if (present == 1) {
                          props.setX("outc");
                          props.setW("inc");
                        } else if (present == 2) {
                          props.setY("outc");
                          props.setW("inc");
                        } else if (present == 3) {
                          props.setZ("outc");
                          props.setW("inc");
                        }
                        
                        props.setPresent(4);
                        props.setChart("zigzag");
                      }}
                      onMouseOver={() => {
                        document.querySelector(
                          ".Work-page-pallete"
                        ).style.opacity = "1";
                      }}
                      onMouseLeave={() => {
                        document.querySelector(
                          ".Work-page-pallete"
                        ).style.opacity = "0";
                      }}
                      style={{color:"#D7D7D6"}}
                    >
                      {props.icon4}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                    id="nav-option-4"
                      href="#"
                      className="button work-link inline-block"
                      onClick={() => {
                        if (present == 4) {
                          props.setW("outac");
                          props.setZ("inac");
                        } else if (present == 5) {
                          props.setA("outac");
                          props.setZ("inac");
                        } else if (present == 6) {
                          props.setB("outac");
                          props.setZ("inac");
                        } else if (present == 1) {
                          props.setX("outc");
                          props.setZ("inc");
                        } else if (present == 2) {
                          props.setY("outc");
                          props.setZ("inc");
                        }
                        
                        props.setPresent(3);
                        props.setChart("zigzag");
                      }}
                      onMouseOver={() => {
                        document.querySelector(
                          ".Perks-page-pallete"
                        ).style.opacity = "1";
                      }}
                      onMouseLeave={() => {
                        document.querySelector(
                          ".Perks-page-pallete"
                        ).style.opacity = "0";
                      }}
                      style={{color:"#D7D7D6"}}
                    >
                      {props.icon3}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                    id="nav-option-5"
                      href="#"
                      className="button testimonial-link inline-block"
                      onClick={() => {
                        if (present == 3) {
                          props.setZ("outac");
                          props.setY("inac");
                        } else if (present == 4) {
                          props.setW("outac");
                          props.setY("inac");
                        } else if (present == 5) {
                          props.setA("outac");
                          props.setY("inac");
                        } else if (present == 6) {
                          props.setB("outac");
                          props.setY("inac");
                        } else if (present == 1) {
                          props.setX("outc");
                          props.setY("inc");
                        }
                        
                        props.setPresent(2);
                        props.setChart("ani");
                       
                                           }}
                      onMouseOver={() => {
                        document.querySelector(
                          ".About-page-pallete"
                        ).style.opacity = "1";
                      }}
                      onMouseLeave={() => {
                        document.querySelector(
                          ".About-page-pallete"
                        ).style.opacity = "0";
                      }}
                      style={{color:"#D7D7D6"}}
                    >
                      {props.icon2}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                    id="nav-option-6"
                      href="#"
                      className="button team-link inline-block"
                      onClick={() => {
                        if (present == 2) {
                          props.setY("outac");
                        } else if (present == 3) {
                          props.setZ("outac");
                        } else if (present == 4) {
                          props.setW("outac");
                        } else if (present == 5) {
                          props.setA("outac");
                        } else if (present == 6) {
                          props.setB("outac");
                        }
                        props.setX("inac");
                        props.setPresent(1);
                        props.setChart("zigzag");
                      }}
                      onMouseOver={() => {
                        document.querySelector(
                          ".landing-page-pallete"
                        ).style.opacity = "1";
                      }}
                      onMouseLeave={() => {
                        document.querySelector(
                          ".landing-page-pallete"
                        ).style.opacity = "0";
                      }}
                      style={{color:"#D7D7D6"}}
                    >
                      {props.icon1}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu__arrow menu__arrow--top">
            <ul>
              <li>
                <label htmlFor="degree--up-0">
                  <div className="arrow"></div>
                </label>
                <label htmlFor="degree--up-1">
                  <div className="arrow"></div>
                </label>
                <label htmlFor="degree--up-2">
                  <div className="arrow"></div>
                </label>
              </li>
            </ul>
          </div>
        </label>
      </section>
    </>
  );
}

export default Navbar;
