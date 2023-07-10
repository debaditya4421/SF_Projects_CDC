import React, { useEffect, useState } from "react";
import $ from "jquery";
import "jquery.ripples";
import "./Home.css";
import img3 from "./slideshowImgs/a1.jpg";
import img2 from "./slideshowImgs/a2.jpg";
import img1 from "./slideshowImgs/a3.jpg";
import img4 from "./slideshowImgs/a4.jpg";
import sf_logo from "./otherimgs/sf_logo.png";
import iitkgp_logo from "./otherimgs/kgp_logo.png";

function Home(props) {
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    let myIndex = 0;

    const carousel = () => {
      let el = document.getElementsByClassName("topPlusbackImg");
      el[0].style.backgroundImage = `url(${images[myIndex]})` ;
      if (myIndex === 3) {
        myIndex = 0;
      } else {
        myIndex += 1;
      }
      setTimeout(carousel, 3500);
    };
    const carouselMod = () => {
      let arr = document.getElementsByClassName("backIMG");
      let prevInd = myIndex === 0 ? 3 : myIndex - 1;

      arr[prevInd].style.opacity = "0";
      arr[myIndex].style.opacity = "1";

      myIndex = myIndex === 3 ? 0 : myIndex + 1;
      setTimeout(carouselMod, 4000);
    };

    // carousel();
    carouselMod();
  }, []);
  const [ripples, setRipples] = useState(true);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);


  return (
    <>
      <div className="topPlusbackImg">
        {/* for carouselMod list of images goes here */}
        {images.map((el, index) => {
          return (
            <img
              src={el}
              className="backIMG"
              id={`backIMG${index}`}
              key={`backIMG${index}`}
            />
          );
        })}
        <div className="topbar">
        <a href="https://springfest.in/" target="_blank" className="logo_home" id="h1">
          <img src={sf_logo} />
        </a>
        <a href="http://www.iitkgp.ac.in/" target="_blank" className="logo_home" id="h2">
          <img src={iitkgp_logo} />
        </a>
        {matches && 
          <button className="button" onClick={props.log}>
            {" "}
            Login
          </button>
        
        }
        </div>


        <div className="backImg">
          <div className="SFPCAPHomePg">
            <div className="textH spf">
              <h2>Spring Fest</h2>
            </div>
            <div className="textH pre">
              <h2>Presents</h2>
            </div>
            <div className="textH CA">
              <h2>Campus Ambassador </h2>
            </div>
            <div className="textH P">
            <h2>Program</h2>
            </div>
          </div>
          <div class="wrapper">
            <div class="text-area">
              <span>
                <a
                  href="https://www.facebook.com/springfest.iitkgp"
                  target={"_blank"}
                >
                  <i className="fa fa-facebook" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/sfiitkgp/"
                  target={"_blank"}
                >
                  <i className="fa fa-linkedin" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.twitter.com/springfest_kgp/"
                  target={"_blank"}
                >
                  <i className="fa fa-twitter" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.youtube.com/user/SpringFestForever/"
                  target={"_blank"}
                >
                  <i className="fa fa-youtube" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/iitkgp.springfest/"
                  target={"_blank"}
                >
                  <i className="fa fa-instagram" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.snapchat.com/add/spring-fest/"
                  target={"_blank"}
                >
                  <i className="fa fa-snapchat" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
