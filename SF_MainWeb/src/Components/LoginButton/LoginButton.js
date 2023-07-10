import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./loginbutton.css";
function LoginButton(props) {
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
  setTimeout(() => {
    if (localStorage.getItem("data")) {
      setStatus("Sign Out");
    } else {
      setStatus("Sign In");
    }
  }, 100);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("loginbtn").style.display = "none";
    } else {
      document.getElementById("loginbtn").style.display = "block";
    }
  }, [location]);
  return (
    <div>
      <button
        className="loginButton"
        id="loginbtn"
        onClick={() => {
          log();
        }}
        style={{ cursor: "pointer" }}
      >
        {localStorage.getItem("data") ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}

export default LoginButton;
