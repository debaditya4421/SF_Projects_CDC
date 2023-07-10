import React from "react";
import "./loginbutton.css"
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
  
  
  return (
    <div>
      <button
        className="loginButton"
        id="loginbtn"
        onClick={() => {
          log();
        }}
        style={{ cursor: "pointer"}}
      >
                Signin

      </button>
    </div>
  );
}

export default LoginButton;
