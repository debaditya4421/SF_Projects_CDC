import React,{useRef,useState} from 'react'
import './DeregisterModal.css'
// const axios = require("axios");

function DeregisterModal (props){
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setOpenModal(false);
    }
  }
  return (
    <>
 
   <div className="sgnmodalBackgroundlanding" onClick={closeModal} ref={modalRef}>
   
     <div className="sgnmodalContainerlanding">
     
      <div className="sgnmodalcloselanding">
        <button
          onClick={() => {
            props.toggleOpenModal()
          }}
         >
          X
        </button>
      </div>
      <div className='landing-page-modal-content'>
      <p>Are you sure you want to Deregister?</p><br/>
      <div className="confirm-buttons">
        <button className='sgnbuttonlanding p-1' onClick={()=>{
            props.function(props.Element)
            props.toggleOpenModal()

        }}>Deregister</button>
        <button className='sgnbuttonlanding1' onClick={()=>{
            props.toggleOpenModal()
        }}>Cancel</button>
      </div>
    </div>  
    </div>
  </div> 

</>
  
)

}

export default DeregisterModal