import "./App.css";
import { useState, useEffect } from "react";
// import Modal from "./Components/Modal/Modal";
import SignIn from "./Components/Signin/SignIn";
import SignupModal from "./Components/Login-signin-modal/SignupModal";
import SigninModal from "./Components/Login-signin-modal/SigninModal";
import Modal from "./Components/Login-signin-modal/Modal";
// import Modal from './Components/Modal/Modal';
// import SignUp from './Components/SignUp/SignUp';
// import LoginButton from "./Components/LoginButton/LoginButton";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const showsetLoginTrue = () => {
    setShowLogin(true);
  };
  const showsetLoginFalse = () => {
    setShowLogin(false);
  };
  const [status, setStatus] = useState("SignIn");
  const [ModalLandingPage, setModalLandingPage] = useState(false);
  const [logout_decision, setlogoutdecision] = useState(false);
  const showModalLandingPage = () => {
    // alert(ModalLandingPage);
    setModalLandingPage(!ModalLandingPage);
  };
  const [loginSignup, setLoginSignup] = useState(false);
  console.log(loginSignup);
  const toggleLoginModal = () => {
    setLoginSignup(!loginSignup);
    console.log(loginSignup);
  };
  const [toast, setToast] = useState({
    istrue: false,
    message: "",
    type: "",
  });
  function showToast(ist, msg, type) {
    setToast({
      istrue: false,
      message: "",
      type: "",
    });
    setTimeout(() => {
      setToast({
        istrue: ist,
        message: msg,
        type: type,
      });
    }, 10);
    const mytimeout = setTimeout(() => {
      setToast({
        istrue: false,
        message: "",
        type: "",
      });
    }, 5000);
    return () => {
      clearTimeout(mytimeout);
    };
  }
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <LoginButton /> */}
      <button onClick={toggleLoginModal}>Login</button>
      {/* <Modal showToast={showToast} setOpenModal={toggleLoginModal} /> */}
      {/* <SignupModal /> */}
      {/* <SignIn/> */}
      {/* <SigninModal></SigninModal> */}
      {/* <SignupModal></SignupModal> */}
    <Modal setOpenModal={toggleLoginModal} loginSignup={loginSignup} setLoginSignup={setLoginSignup} />
    </div>
  );
}

export default App;
