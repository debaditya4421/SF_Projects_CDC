import React, { useState } from "react";
import Home from "../Home/Home";
import Work from "../Work/Work";
import Team from "../Team/Team";
import About from "../About Us/about";
import Testimonial from "../Testimonial/Testimonials";
import Navbar from "./Navbar";
import Perks from "../Perks/Perk";
import home from '../Navbar/Icons/home.png';
import about from './Icons/about.png';
import perks from './Icons/perks.png';
import work from './Icons/work.png';
import testimonial from './Icons/testimonials.png';
import team from './Icons/team.png';


const HomeNav = (props) => {
  const [x, setX] = useState("x");
  const [y, setY] = useState("y");
  const [z, setZ] = useState("z");
  const [w, setW] = useState("w");
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [present, setPresent] = useState(1);
  const [chart, setChart] = useState("zigzag");
  
  return (
    <>
      <Navbar
        setX={setX}
        setY={setY}
        setZ={setZ}
        setW={setW}
        setA={setA}
        setB={setB}
        setPresent={setPresent}
        present={present}
        setChart={setChart}
        one={"Home"}
        two={"About"}
        three={"Perks"}
        four={"Work"}
        five={"Testimonial"}
        six={"Team"}
        icon1={<img src={home} alt=""  className="navbar-icons home-rotate"/>}
        icon2={<img src={about} alt=""  className="navbar-icons about-rotate"/>}
        icon3={<img src={perks} alt=""  className="navbar-icons perks-rotate"/>}
        icon4={<img src={work} alt=""  className="navbar-icons work-rotate"/>}
        icon5={<img src={testimonial} alt=""  className="navbar-icons testimonial-rotate"/>}
        icon6={<img src={team} alt=""  className="navbar-icons team-rotate"/>}
        sixthfunc={() => {
          console.log('first')
          if (present == 5) {
            setA("outc");
            setB("inc");
          } else if (present == 1) {
            setX("outc");
            setB("inc");
          } else if (present == 2) {
            setY("outc");
            setB("inc");
          } else if (present == 3) {
            setZ("outc");
            setB("inc");
          } else if (present == 4) {
            setW("outc");
            setB("inc");
          }
                 

          setPresent(6);
          setChart("zigzag");
        }}

      />
      <div className="p" id={x}>
        <Home log={props.log} />
      </div>
      <div className="p" id={y}>
        <About chart={chart}/>
      </div>
      <div className="p" id={z}>
        <Perks />
      </div>
      <div className="p" id={w}>
        <Work />
      </div>
      <div className="p" id={a}>
        <Testimonial />
      </div>
      <div className="p" id={b}>
        <Team />
      </div>
    </>
    // </>
  );
};

export default HomeNav;
