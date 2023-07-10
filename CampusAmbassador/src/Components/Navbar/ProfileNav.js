import React, { useState } from "react";
import Navbar from "./Navbar";
import Leaderboard from "../Profile/Leaderboard";
import Guidelines from "../Profile/Guidelines";
import ShareIDea from "../Profile/ShareIDea";
import SuggestVenue from "../Profile/SuggestVenue";
import Profilepage from "../Profile/Profilepage";
import bgimgprofile from "../Perks/bgperk.jpg";
import { MdLeaderboard } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import PhoneNavigation from "./PhoneNavigation";

const ProfileNav = (props) => {
  const profilecss = `.p{
    background-image: url(${bgimgprofile});
    }`;
  const { preview, setPreview } = props;
  const [x, setX] = useState("x");
  const [y, setY] = useState("y");
  const [z, setZ] = useState("z");
  const [w, setW] = useState("w");
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [present, setPresent] = useState(1);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 700px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 700px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches && (
        <Navbar
          setX={setX}
          setY={setY}
          setZ={setZ}
          setW={setW}
          setA={setA}
          setB={setB}
          setPresent={setPresent}
          present={present}
          one={"Leaderboard"}
          two={"Guidelines"}
          three={"Idea"}
          four={"Venue"}
          five={"Account"}
          six={"Logout"}
          icon1={<MdLeaderboard />}
          icon2={<RiGuideFill />}
          icon3={<FaLightbulb />}
          icon4={<MdPlace />}
          icon5={<FaUserAlt />}
          icon6={<IoLogOutSharp />}
          sixthfunc={props.showModalLandingPage}
        />
      )}
      {matches && (
        <div>
          <div className="p" id={x}>
            <Leaderboard />
          </div>
          <div className="p" id={y}>
            <Guidelines />
          </div>
          <div className="p" id={z}>
            <ShareIDea showToast={props.showToast} />
          </div>
          <div className="p" id={w}>
            <SuggestVenue
              showToast={props.showToast}
              preview={preview}
              setPreview={setPreview}
            />
          </div>
          <div className="p" id={a}>
            <Profilepage showToast={props.showToast} />
          </div>
        </div>
      )}
      {/* <div className="p" id={b}><Team/></div> */}
      {!matches && (
        <div>
          <PhoneNavigation
            One={"Leaderboard"}
            navigate_one={"Leaderboard-page"}
            Two={"Guidelines"}
            navigate_two={"Guidelines-page"}
            Three={"Share Idea"}
            navigate_three={"ShareIdea-page"}
            Four={"Suggest Venue"}
            navigate_four={"SuggestVenue-page"}
            Five={"Account"}
            navigate_five={"Account-page"}
            Six={"Logout"}
            sixthfunc={props.showModalLandingPage}
          />
          <div id="Leaderboard-page">
            <Leaderboard />
          </div>
          <div id="Guidelines-page">
            <Guidelines />
          </div>
          <div id="ShareIdea-page">
            <ShareIDea showToast={props.showToast} />
          </div>
          <div id="SuggestVenue-page">
            <SuggestVenue
              showToast={props.showToast}
              preview={preview}
              setPreview={setPreview}
            />
          </div>
          <div id="Account-page">
            <Profilepage showToast={props.showToast} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileNav;
