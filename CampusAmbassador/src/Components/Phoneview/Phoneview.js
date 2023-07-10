import React from "react";
import { useState, useEffect } from "react";
import About from "../About Us/about";
import Home from "../Home/Home";
import PhoneNavigation from "../Navbar/PhoneNavigation";
import Perk from "../Perks/Perk";
import Team from "../Team/Team";
import Testimonials from "../Testimonial/Testimonials";
import Work from "../Work/Work";
function Phoneview(props) {
  const [chart, setChart] = useState("ani");

  return (
    <div>
      <PhoneNavigation
        One={"Home"}
        navigate_one={"Home-page"}
        Two={"About us"}
        navigate_two={"About-page"}
        Three={"Perks"}
        navigate_three={"Perks-page"}
        Four={"Work"}
        navigate_four={"Work-page"}
        Five={"Testimonials"}
        navigate_five={"Testimonials-page"}
        Six={"Our Team"}
        navigate_six={"Team-page"}
        Seven={"Login"}
        log={props.log}
      />
      <div id="Home-page">
        <Home />
      </div>
      <div id="About-page">
        <About chart={chart} />
      </div>
      <div id="Perks-page">
        <Perk />
      </div>
      <div id="Work-page">
        <Work />
      </div>
      <div id="Testimonials-page">
        <Testimonials />
      </div>
      <div id="Team-page">
        <Team />
      </div>
    </div>
  );
}

export default Phoneview;
