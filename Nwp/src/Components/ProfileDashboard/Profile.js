import React, { useEffect, useState } from "react";
import userprofile1 from "./user1.svg";
import userback from "./userback.svg"
import DeregisterModal from "./DeregisterModal";
import "./Profile.css";
import BackButton from "../BackButton/BackButton";
import Navbar from "../Navbar/Navbar";
import Modal from "./DeregisterModal.js";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Profile(props) {
  const [user, setUser] = useState()
  const [userSolo, setUserSolo] = useState()
  const [userGroup, setUserGroup] = useState()

  const [modalName, setModalName]=useState(false)
  const [modalGroup, setModalGroup]=useState(false)
  const [modalSolo, setModalSolo]=useState(false)

  const toggleOpenModalName = () => {
    setModalName(!modalName);
  };
  const toggleOpenModalGroup = () => {
    setModalGroup(!modalGroup);
  };
  const toggleOpenModalSolo = () => {
    setModalSolo(!modalSolo);
  };
  

  let navigate = useNavigate()
  const [profile, setProfile] = useState({
    college: "",
    name: "",
    city: "",
    email: "",
    mobile: "",
    sf_id: "",
  });
  const [Tokken, setTokken] = useState([]);
  const [solo, setSolo] = useState([]);
  const [group, setGroup] = useState([]);
  const data = JSON.parse(localStorage.getItem('data'));
  function registeredevents() {
    axios
      .post("https://mainapi.springfest.in/api/user/get_registered_events", {
        token: Tokken,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("registered-event", JSON.stringify(response.data))
        // setSolo(response.data.message.solo);
        // setGroup(response.data.message.group);
        const resp=JSON.parse(localStorage.getItem("registered-event"))
      // console.log('response', response)
      setSolo(resp.message.solo);
      setGroup(resp.message.group);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // function alertMessageSingleMember(response){
  //   alert(response.data.message.stmt)
  // }

  // State ===> If confirmed, then toggle, else, leave as it is.
  // State ---> If state == True, Else 

  function deregisterUserWithName(Element) {
  
      // console.log('DONE')
      axios.post(" https://mainapi.springfest.in/api/event/deregister_member ",{
        event_id: Element.event_id,
        token:Tokken,
        group_id: Element.group_id,
        type: "group" 
      })
      .then(function (response) {
        console.log('response1', response)
        registeredevents()
        // alertMessageSingleMember(response)
        if(response.data.code === -3){
          props.showToast(true,response.data.message.stmt,"Alert")
        }else{
          props.showToast(true,response.data.message.stmt,"Success")
        }
      
  }).catch(
    function (error) {
      console.log(error);
    }
  )
  


   {/* {DeregisterModal} */}
  // <DeregisterModal/>
  // alert("af")
}

       

function deregisterInSoloEvent(Element){
  // if (window.confirm("Press OK to confirm!")){
  axios.post("https://mainapi.springfest.in/api/event/deregister_member", {
    event_id: Element.event_id,
    token:Tokken,
    group_id: Element.group_id,
    type: "solo"
  })
  .then(function (response2) {
    console.log("r21",response2);
    if(response2.data.code===0){
      props.showToast(true,response2.data.message,"Success")
    }else{
      props.showToast(true,response2.data.message,"UnsuccessFull")
      
    }
    registeredevents();
  }).catch(err=>{
      props.showToast(true,"Unable to Deregister","UnsuccessFull")

    })
}
// }



  function deregisterInGroupEvent(Element) {
    // if (window.confirm("Press OK to confirm!")) {
      console.log("DONE DEREGISTERED");
      axios
        .post("https://mainapi.springfest.in/api/event/deregister_team", {
          event_id: Element.event_id,
          token: Tokken,
          group_id: Element.group_id,
        })
        .then(function (response2) {
          console.log("DONE DEREGISTERED ");
          console.log("r2",response2);
          if(response2.data.code===0){
            props.showToast(true,response2.data.message,"Success")
          }else{
            props.showToast(true,response2.data.message,"UnsuccessFull")
            
          }
          registeredevents();
        }).catch(err=>{
      props.showToast(true,"Unable to Deregister","UnsuccessFull")
          
        })
    // }
  }

  useEffect(() => {
    const startfunc= async()=>{
      const response1= await JSON.parse(localStorage.getItem("data"))
      console.log('response1', response1)
    setProfile({
      city: data.message.city,
      email: data.message.email,
      mobile: data.message.mobile,
      college: data.message.college,
      name: data.message.name,
      sf_id: data.message.sf_id,
    });
    setTokken(response1.message.token);
    // console.log('response', response)
    
    }
    const startfunc2= async()=>{
      const response=await JSON.parse(localStorage.getItem("registered-event"))
    // console.log('response', response)
    setSolo(response.message.solo);
    setGroup(response.message.group);
    console.log('response', response)
    }
    // window.addEventListener("storage",()=>{
    //   startfunc2()
    // })
    startfunc2()
    startfunc()
    // return ()=>{
    //   window.removeEventListener("storage",()=>{
    //     startfunc2()
    //   })
    // }
    if(!localStorage.getItem("data")){
      navigate("/",
      props.showToast(true,"You Have to Login First","Unauthorized Access"))
    }

  }, []);
  useEffect(()=>{
    const refetchdata = async ()=>{
      const response1= await JSON.parse(localStorage.getItem("data"))

    axios.post(
                "https://mainapi.springfest.in/api/user/get_registered_events",
                {
                  token: response1.message.token,
                }
              )
              .then(function (data) {
                if(data.data.code==0){
                localStorage.setItem(
                  "registered-event",
                  JSON.stringify(data.data)
                );
                setSolo(data.data.message.solo);
                setGroup(data.data.message.group);
                console.log('response', data.data)
              }
              }).catch((error)=>{

              });

    };
    refetchdata()}
  ,[])

  
  return (


    
      <div className="profile-outermost">

          {/* {ModalLandingPage && (
          <ModalLogout showToast={showToast}
          setOpenModal={setModalLandingPage}
    
          change_logout_decision={change_logout_decision}
          />
          )} */}
        <BackButton togglebackclick={props.toggleBackClickPgeTurn} />

        <div className="profile-outer-container">
          <div className="profile-outer-content">
            <nav className="profile-nav">
              <ol className="">
                <li className="profile-heading">User Profile</li>
              </ol>
            </nav>
            <div className="profile-outer-content-info">
              <div className="profile-card">
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="profile-card-img-container">
                        <img
                          src={userprofile1}
                          alt="Admin"
                          className="profile-card-img"
                          
                        />
                      </div>
                      <div className="profile-info-container">
                        <h4>{profile.name}</h4>
                        <p className="">{profile.college}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-info-allDetails">
                  <div className="profile-info-detail">
                    <div className="profile-info-que">
                      <h6 className="">Name</h6>
                    </div>
                    <div className="profile-info-ans">{profile.name}</div>
                  </div>
                  <hr />
                  <div className=" profile-info-detail">
                    <div className=" profile-info-que ">
                      <h6 className=" ">Email</h6>
                    </div>
                    <div className=" profile-info-ans">{profile.email}</div>
                  </div>
                  <hr />
                  <div className="profile-info-detail ">
                    <div className=" profile-info-que ">
                      <h6 className=" ">Mobile</h6>
                    </div>
                    <div className="profile-info-ans ">{profile.mobile}</div>
                  </div>
                  <hr />
                  <div className="profile-info-detail ">
                    <div className=" profile-info-que ">
                      <h6 className=" ">SF-ID</h6>
                    </div>
                    <div className=" profile-info-ans">{profile.sf_id}</div>
                  </div>
                  <hr />
                  <div className=" profile-info-detail">
                    <div className=" profile-info-que ">
                      <h6 className=" ">Address</h6>
                    </div>
                    <div className=" profile-info-ans">{profile.city}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-registered-events ">
          <div className=" profile-registered-heading-container ">
            <div className=" profile-registered-heading ">
              <h1>Registered Events</h1>
            </div>
            
            <h1 className="profile-solo-events">
              {solo.map((Element) => {
                return (
                  <>
                    <div className=" profile-solo-registred-event  ">
                      <div
                        className="profile-solo-registered-event-name"
                        key={Element.event_id}
                      >
                        {Element.event_name}
                      </div>
                      <button
                        className=" profile-deregister-button "
                        onClick={() => {setUserSolo(Element)
                          toggleOpenModalSolo(Element)}}
                      >
                        Deregister
                      </button>
                    </div>
                  </>
                );
              })}
            </h1>
          {group.map((Element) => {
            return (
              <>
                <div className="   ">
                  <div>
                    <div
                      className="profile-group-registered-event"
                      key={Element.event_id}
                    >
                      <h1 className="profile-group-registered-event-name">
                        {Element.event_name}
                      </h1>
                      
                      <hr className="profile-group-event-hr"/>
                      <div>
                        <p>
                          {Element.members.map((mem) => {
                            return (
                            <>
                            <div className="profile-group-member">
                              <div className="profile-group-member-name" key={mem.member_sfid}>
                                #{mem.member_name} 
                              </div>
                              {(profile.sf_id === "SF"+Element.leader_id )||(profile.sf_id === "NWP"+Element.leader_id)
                              ?
                              // <div className="profile-group-member-deregister invisible">
                              //  <i className="fa-regular fa-circle-xmark"></i>
                              // </div>
                              <>
                              {(mem.member_sfid === profile.sf_id )||(mem.member_sfid === profile.sf_id)
                              ?
                              <div className="profile-group-member-deregister invisible">
                               <i className="fa-regular fa-circle-xmark"></i>
                              </div>
                              :
                              <div className="profile-group-member-deregister invisible">
                               <i className="fa-regular fa-circle-xmark"></i>
                              </div>
                              // <div className="profile-group-member-deregister">
                              //   <button onClick={()=> deregisterUserWithName(Element)}>
                              //     <i className="fa-regular fa-circle-xmark"></i>
                              //     </button>
                              // </div>
                              }
                              </>
                              :
                              // <div className="profile-group-member-deregister">
                              //   <button onClick={()=> deregisterUserWithName(Element)}><i className="fa-regular fa-circle-xmark"></i></button>
                              // </div>
                              <>
                              <div className="hidden">{
                                setTimeout(()=>{
                                  document.getElementById(Element.event_id).style.display="none"
                                },10)
                              }
                              </div>
                              <>
                              {(mem.member_sfid === profile.sf_id )||(mem.member_sfid === profile.sf_id)
                              ?
                              <div className="profile-group-member-deregister">
                                <button onClick={()=> { setUser(Element)
                                  toggleOpenModalName(Element)}}><i className="fa-regular fa-circle-xmark"></i></button>
                              </div>
                              :
                              <div className="profile-group-member-deregister invisible">
                               <i className="fa-regular fa-circle-xmark"></i>
                              </div>
                              }</>
                              </>
                              }
                              </div>
                              </>
                            );
                          })}
                        </p>
                      </div>
                      <div className="profile-group-deregister-button-container" id={Element.event_id}>
                      <button onClick={()=>{setUserGroup(Element)
                         toggleOpenModalGroup(Element)}} className=" profile-group-deregister-button ">
                        Deregister
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {modalName && <DeregisterModal toggleOpenModal={toggleOpenModalName} function={deregisterUserWithName} Element={user}/>}
      {modalGroup && <DeregisterModal toggleOpenModal={toggleOpenModalGroup} function={deregisterInGroupEvent} Element={userGroup}/>}
      {modalSolo && <DeregisterModal toggleOpenModal={toggleOpenModalSolo} function={deregisterInSoloEvent} Element={userSolo}/>}
      </div>
  );
}
export default Profile;



// Cross Button => On Click => Open Confirmation Modal
// Okay, Cancel ==> Okay=> Deregister Function, Cancel=> Close Modal