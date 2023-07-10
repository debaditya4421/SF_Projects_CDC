import { React, useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Modal from "./Components/Login copy/components/Modal.js";
import Toast from "./Components/Toast/Toast";
import Profile from "../src/Components/Profile/Profile";
import ShareIDea from "./Components/Profile/ShareIDea";
import SuggestVenue from "./Components/Profile/SuggestVenue";
import Guidelines from "./Components/Profile/Guidelines";
import UserContext from "./Context/UserContext";
import ModalLogout from "./Modal";
import LoginButton from "./LoginButton/LoginButton";
import Leaderboard from "./Components/Profile/Leaderboard";
import HomeNav from "./Components/Navbar/HomeNav";
import ProfileNav from "./Components/Navbar/ProfileNav";
import Phoneview from "./Components/Phoneview/Phoneview";
import PhoneNavigation from "./Components/Navbar/PhoneNavigation";
import $ from "jquery";
import "jquery.ripples";
import Perk from "./Components/Perks/Perk";
import { useContext } from "react";
import { FaWindows } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const [ModalLandingPage, setModalLandingPage] = useState(false);
  const [preview, setPreview] = useState(false);
  const usercontext = useContext(UserContext);
  const { setuser, setUserToken } = usercontext;
  const showModalLandingPage = () => {
    // alert(ModalLandingPage);
    setModalLandingPage(!ModalLandingPage);
  };

  const change_logout_decision = () => {
    // alert("hey");
    setuser();
    setUserToken("");
    showModalLandingPage();
    navigate("/");
    showToast(true, "You are Successfully Logged Out ", "Success");
  };
  const [loginSignup, setLoginSignup] = useState(false);

  const toggleLoginModal = () => {
    setLoginSignup(!loginSignup);
  };
  const log = () => {
    toggleLoginModal();
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

  const [ripples, setRipples] = useState(true);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );
  const [preloader, SetPreloader] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    try {
      const data = localStorage.getItem("user");
      const newdata = JSON.parse(data);
      setuser(newdata.data);
      setUserToken(newdata.token);
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  setTimeout(() => {
    SetPreloader(false)
    document.querySelector(".preloader-parent").style.display="none"
  }, 5000);
  return (
    <>
      {toast.istrue && <Toast toast={toast} setToast={setToast} />}
      {preview ? (
        <>
          <div className="absolute w-[70%] h-[80%] top-[10%] bottom-0 z-[1000] left-[15%]">
            <div className="preview-venue"></div>
          </div>
          <div
            className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-black opacity-70 z-[999]"
            onClick={() => {
              setPreview(false);
            }}
          >
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute right-4 top-4"
              onClick={() => {
                setPreview(false);
              }}
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </>
      ) : null}
      {/* <Absolute/> */}
      {/* {preloader && <Preloader />} */}
      {!preloader && (
        <Routes>
          {/* <Route exact path='/' element={< HomeNav log={log}/>}/> */}
          {matches && <Route exact path="/" element={<HomeNav log={log} />} />}
          {!matches && (
            <Route exact path="/" element={<Phoneview log={log} />} />
          )}
          <Route
            exact
            path="/profile"
            element={
              <ProfileNav
                showToast={showToast}
                preview={preview}
                setPreview={setPreview}
                showModalLandingPage={showModalLandingPage}
              />
            }
          />
        </Routes>
      )}
      {loginSignup && (
        <Modal showToast={showToast} setOpenModal={toggleLoginModal} />
      )}
      {ModalLandingPage && (
        <ModalLogout
          setOpenModal={setModalLandingPage}
          showToast={showToast}
          change_logout_decision={change_logout_decision}
        />
      )}
    </>
  );
}

export default App;
