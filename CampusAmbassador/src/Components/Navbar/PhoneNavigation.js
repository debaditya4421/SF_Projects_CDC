import React from "react";
import "./PhoneNavigation.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function PhoneNavigation(props) {
  const ToggleNavOpeningClass = () => {
    document.querySelector(".open").classList.toggle("oppenned");
  };
  const location = useLocation();
  return (
    <div>
      <div class="open" onClick={() => ToggleNavOpeningClass()}>
        <span class="cls"></span>
        <span>
          <ul
            class="sub-menu"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <li>
              <a
                title="about"
                onClick={() => { ToggleNavOpeningClass()
                  const anchor = document.querySelector(
                    `#${props.navigate_one}`
                  );
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {props.One}
              </a>
            </li>
            <li>
              <a
                title="skills"
                onClick={() => { ToggleNavOpeningClass()
                  const anchor = document.querySelector(
                    `#${props.navigate_two}`
                  );
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {props.Two}
              </a>
            </li>
            <li>
              <a
                title="jobs"
                onClick={() => { ToggleNavOpeningClass()
                  const anchor = document.querySelector(
                    `#${props.navigate_three}`
                  );
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {props.Three}
              </a>
            </li>
            <li>
              <a
                title="contact"
                onClick={() => { ToggleNavOpeningClass()
                  const anchor = document.querySelector(
                    `#${props.navigate_four}`
                  );
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {props.Four}
              </a>
            </li>
            <li>
              <a
                title="contact"
                onClick={() => { ToggleNavOpeningClass()
                  const anchor = document.querySelector(
                    `#${props.navigate_five}`
                  );
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                {props.Five}
              </a>
            </li>
            <li>
              <a
                title="contact"
                onClick={() => { ToggleNavOpeningClass()
                  if (location.pathname == "/profile") {
                    {
                      props.sixthfunc();
                    }
                  } else {
                    const anchor = document.querySelector(
                      `#${props.navigate_six}`
                    );
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                {props.Six}
              </a>
            </li>
            <li>
              <a title="login" onClick={()=>{
                props.log()
                ToggleNavOpeningClass()
              }}>
                {props.Seven}
              </a>
            </li>
          </ul>
        </span>
        <span class="cls"></span>
      </div>
    </div>
  );
}

export default PhoneNavigation;
