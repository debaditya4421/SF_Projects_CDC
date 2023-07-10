import "./App.css";
import Profile from "./Components/ProfileDashboard/Profile";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Landingpage from "./Components/Landing-Page/Landingpage";
import { useState, useEffect } from "react";
import Modal from "./Components/Login/components/Modal";
import ModalLogout from "./Modal";
import Toast from "./Components/Toast/Toast";
import ContactUs from "./Components/ContactUs/ContactUs";
import EventBook from "./Components/Events-Book/EventBook";
import EventDashboard from "./Components/EventDashboard/EventDashboard";
import { UserContext } from "./UserContext";
import MobileEvent from "./Components/Events-Book/MobileEvent";
import sf_logo from "./Images/sf_logo.png";
import Navbar from "./Components/Navbar/Navbar";
import MobileGallery from "./Components/Events-Book/MobileGallery";
import LoginButton from "./Components/LoginButton/LoginButton";
import img1 from "./Images/backgroundLandingPage.png";
import img2 from "./Components/Events-Book/BookImges/final-event.png";
import img3 from "./Components/Events-Book/BookImges/left.png";
import img4 from "./Components/Events-Book/BookImges/left_event.png";
import img5 from "./Components/Events-Book/BookImges/nwp-bg.png";
import img6 from "./Components/Events-Book/BookImges/nwp-book2.png";
import img7 from "./Components/Events-Book/BookImges/right.png";
import contactbackground from "./Components/ContactUs/nwp-bg.png"
import cimg1 from './Components/ContactUs/ContactCard/Vinay Bagra.jpg'
import cimg2 from './Components/ContactUs/ContactCard/Anurag Raj.jpg'
import cimg3 from './Components/ContactUs/ContactCard/arihant shukla.jpg'
import cimg4 from './Components/ContactUs/ContactCard/Ajinkya.jpg'
// 
var images = [];
var cimages=[];
function preload(array) {
  for (var i = 0; i < array.length; i++) {
    images[i] = new Image();
    images[i].src = array[i];
  }
  console.log('loadedimg', images)
}
function cpreload(array) {
  for (var i = 0; i < array.length; i++) {
    cimages[i] = new Image();
    cimages[i].src = array[i];
  }
  console.log('loadedimg', images)
}

const loadedimg=preload([img1, img2, img3, img4, img5, img6, img7]);
const cloadedimg=cpreload([cimg1,cimg2,cimg3,cimg4,contactbackground])
console.log('loadedimg', loadedimg)
function App() {
  let navigate = useNavigate();
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
  const [showBack, setShowBack] = useState(false);

  const [smthng, setSmthng] = useState(2);
  const [backClickPgeTurn, setBackClickPgeTurn] = useState(false);

  const showModalLandingPage = () => {
    // alert(ModalLandingPage);
    setModalLandingPage(!ModalLandingPage);
  };
  const change_logout_decision = () => {
    // alert("hey");
    setStatus("Signin");
    localStorage.clear();
    localStorage.setItem("logstat", false);
    showModalLandingPage();
    navigate("/");
    showToast(true, "You are Successfully Logged Out ", "Success");
  };
  const toggleBackClickPgeTurn = () => {
    setBackClickPgeTurn(!backClickPgeTurn);
  };
  const log = () => {
    if (localStorage.getItem("data")) {
      showModalLandingPage();
    } else {
      toggleLoginModal();
    }
  };
  const [eventClicked, setEventClicked] = useState("");
  const [eventCity, setEventCity] = useState("");
  const handleEventClicking = (program, city) => {
    setEventClicked(program);
    setEventCity(city);
    console.log(program);
  };
  const [loginSignup, setLoginSignup] = useState(false);
  const toggleLoginModal = () => {
    setLoginSignup(!loginSignup);
  };
  const [toast, setToast] = useState({
    istrue: false,
    message: "",
    type: "",
  });
  function showToast(ist, msg, type) {
    setToast({
      istrue:false,
      message:"",
      type:""
    })
    setTimeout(() => {
      
    setToast({
      istrue: ist,
      message: msg,
      type: type,
    });
    }, 10);
    const mytimeout=setTimeout(() => {
      setToast({
        istrue: false,
        message: "",
        type: "",
      });
    }, 5000);
    // return ()=>{
    //   clearTimeout(mytimeout)
    // }
  }
  useEffect(() => {
    setTimeout(() => {
      
const loadedimg=preload([img1, img2, img3, img4, img5, img6, img7]);
const cloadedimg=cpreload([cimg1,cimg2,cimg3,cimg4,contactbackground])

    }, 10);
  }, [])


  
  return (
    <>
      <UserContext.Provider value={{ smthng, setSmthng }}>
        <div className="App">
        
          {toast.istrue && <Toast toast={toast} setToast={setToast} />}
          {showLogin && (
            <LoginButton
              showToast={showToast}
              status={status}
              setStatus={setStatus}
              ModalLandingPage={ModalLandingPage}
              setModalLandingPage={setModalLandingPage}
              logout_decision={logout_decision}
              setlogoutdecision={setlogoutdecision}
              showBack={showBack}
              setShowBack={setShowBack}
              setLoginSignup={toggleLoginModal}
              backclicked={backClickPgeTurn}
              toggleBackClickPgeTurn={toggleBackClickPgeTurn}
              change_logout_decision={change_logout_decision}
              log={log}
            />
          )}
          <Navbar
            toggleShowLoginTrue={showsetLoginTrue}
            toggleShowLoginFalse={showsetLoginFalse}
            showToast={showToast}
            status={status}
            setStatus={setStatus}
            ModalLandingPage={ModalLandingPage}
            setModalLandingPage={setModalLandingPage}
            logout_decision={logout_decision}
            setlogoutdecision={setlogoutdecision}
            showBack={showBack}
            setShowBack={setShowBack}
            setLoginSignup={toggleLoginModal}
            backclicked={backClickPgeTurn}
            toggleBackClickPgeTurn={toggleBackClickPgeTurn}
            change_logout_decision={change_logout_decision}
            log={log}
        />
        <Link
          to="/"
          onClick={() => {
            setSmthng(2);
          }}
        >
          <img src={sf_logo} alt="sf_logo" className="sf-logo" />
        </Link>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Landingpage
                status={status}
                img1={img1}
                setStatus={setStatus}
                ModalLandingPage={ModalLandingPage}
                setModalLandingPage={showModalLandingPage}
                logout_decision={logout_decision}
                setlogoutdecision={setlogoutdecision}
                showBack={showBack}
                setShowBack={setShowBack}
                setLoginSignup={toggleLoginModal}
                backclicked={backClickPgeTurn}
                toggleBackClickPgeTurn={toggleBackClickPgeTurn}
                showToast={showToast}
                change_logout_decision={change_logout_decision}
                log={log}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                showToast={showToast}
                toggleBackClickPgeTurn={toggleBackClickPgeTurn}
              />
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <ContactUs toggleBackClickPgeTurn={toggleBackClickPgeTurn} cimg1={cimages[0]} cimg2={cimages[1]} cimg3={cimages[2]} cimg4={cimages[3]} contactbackground={cimages[4]}/>
            }
          />
          <Route
            exact
            path="/events"
            element={
              <EventBook
                EventClicking={handleEventClicking}
                toggleBackClickPgeTurn={toggleBackClickPgeTurn}
                img1={images[0]} img2={images[1]} img3={images[2]} img4={images[3]} img5={images[4]} img6={images[5]} img7={images[6]}
              />
            }
          />
          <Route
            exact
            path="/MobileEvent"
            element={
              <MobileEvent
                EventClicking={handleEventClicking}
                toggleBackClickPgeTurn={toggleBackClickPgeTurn}
              />
            }
          />
          <Route exact path="/MobileGallery" element={<MobileGallery/>} />
          <Route
            exact
            path="/EventDashboard/:city/:event"
            element={
              <EventDashboard
                showToast={showToast}
                city={eventCity}
                name={eventClicked}
              />
            }
          />
        </Routes>
        {loginSignup && (
          <Modal showToast={showToast} setOpenModal={toggleLoginModal} />
        )}
        {ModalLandingPage && (
          <ModalLogout showToast={showToast}
          setOpenModal={setModalLandingPage}
    
          change_logout_decision={change_logout_decision}
          />
        )}
      </div>
    </UserContext.Provider>
    
    </>
  );
}

export default App;
