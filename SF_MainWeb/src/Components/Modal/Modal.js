import React,{useRef,useState} from 'react'
import './landingPageModal.css'
// Logout
function Modal (props){
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setOpenModal(false);
    }
  }
  return (
 
  <div className="sgnmodalBackgroundlanding" onClick={closeModal} ref={modalRef}>
   
    <div className="sgnmodalContainerlanding">
     
      <div className="sgnmodalcloselanding">
        <button
          onClick={() => {
            props.setOpenModal(false);
          }}
         >
          X
        </button>
      </div>
      <div className='landing-page-modal-content'>
      <p>Are you sure you want to logout</p><br/>
      <div className="confirm-buttons">
        <button className='sgnbuttonlanding p-1' onClick={()=>{
          props.change_logout_decision()
          // localStorage.clear();
          // localStorage.setItem("logstat", false);
          // props.setOpenModal(false)

        }}>Logout</button>
        <button className='sgnbuttonlanding1' onClick={()=>{
          props.setOpenModal(false);
          console.log("W")
        }}>Cancel</button>
      </div>
    </div>  
    </div>
  </div> 
  )
}

export default Modal