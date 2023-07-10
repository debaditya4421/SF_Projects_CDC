import React,{useRef,useState} from 'react'
// import SignUp from '../../SignUp/SignUp'
// import SignIn from '../SignIn'
// import Forgot from '../../ForgotPassword/Forgot'
// import Forgot2 from '../../ForgotPassword/Forgot2'
import SignIn from '../Signin/SignIn';
import SignUp from '../SignUp/SignUp';
import './Modal.css';
import Forgot from '../ForgotPassword/Forgot';
import '../ForgotPassword/Forgot.css';

function Modal (props){
  const [active, setActive] = useState("signin");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const modalRef = useRef();
  
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setOpenModal(false);
      setActive("signin");
    }
  }
  const Modal =() =>{
    if(active === "signin"){
      return <div id='signinm'><SignIn showToast={props.showToast} setOpenModal={props.setOpenModal}/>
              
              <h4>Don't have an account? <span onClick={()=>{setActive("signup")}}>Sign Up</span></h4>
              <h4 id="fp" onClick={()=>{setActive("forgot1")}}>Forgot Password?</h4>
            </div>
    }
    else if(active === "signup"){
      return <div id="signupm">
              <SignUp showToast={props.showToast} setOpenModal={props.setOpenModal}/>
    
                <h4>Already have an account? <span onClick={()=>{setActive("signin")}}> Sign In</span></h4>
                <br/>
    
            </div>
    }
    else if(active === "forgot1"){
      return <div className="forgot1m">
              <Forgot showToast={props.showToast} setActive={setActive} setEmail={setEmail} setQuestion={setQuestion} setOpenModal={props.setOpenModal}/>
              
              </div>
    }
    // else if(active === "forgot2"){
    //   return <div className="forgot2m">
    //           <Forgot2 showToast={props.showToast} email={email} setActive={setActive} question={question} setOpenModal={props.setOpenModal}/>
              
    //   </div>
    // }
    
  }
  return (  props.loginSignup &&
 
  <div className="sgnmodalBackground" onClick={closeModal} ref={modalRef}>
   
    <div className="sgnmodalContainer">
     
      <div className="sgnmodalclose">
        <button
          onClick={() => {
            props.setOpenModal();
            // props.setloginSignup(false);
            setActive("signin");
            console.log(props.loginSignup);
          }}
         >
          X
        </button>
      
      </div>
      
      <Modal/>
      

      
    </div>  
  </div> 
  )
}

export default Modal