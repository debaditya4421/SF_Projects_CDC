import React,{useState,useEffect} from 'react';
import {Formik,Form,Field,FieldArray} from 'formik'; 
import evID from './eventID.json';
const axios = require("axios"); 

const initialValues={
    numOfMembers:0,
    members:[]
}
//this obj declaration needs to be outside function Regformik

function Regformik(props) {
    
    
    const [registerBtnText, setregisterBtnText] = useState("Register");
    //ValidationSchema here
    //onSubmit here
    const onSubmit=(values,id)=>{
        setregisterBtnText("Registering...")
        console.log("values:",values); 
        console.log(id); 
        const token=JSON.parse(localStorage.getItem("data")).message.token;
        const reqObj={}; 
        reqObj.token=token; 
        reqObj.event_id=id; 
        reqObj.event_reg=[]; 
        values.members.map((el)=>{
            let tempObj={
                sf_id:el,
                email:"test@test.test"
            }
            reqObj.event_reg.push(tempObj); 
        });
        console.log("token",reqObj.token); 
    
        axios
            .post("https://mainapi.springfest.in/api/event/register",JSON.stringify(reqObj))
                .then((response)=>{
                    if (response.data.code==0){
                        console.log("Registration Successful"); 
                        props.setOpenModal(false); 
                        props.showToast(true,"You have Succesfully Registered","Success")
                        //show toast now
                        //update registered-event local storage variable
                        axios
                            .post("https://mainapi.springfest.in/api/user/get_registered_events",{
                                token:reqObj.token,
                             })
                                .then((res2)=>{
                                    // console.log("reg Events:",res2); 
                                    localStorage.setItem("registered-event",JSON.stringify(res2.data)); 
                                })
                                    .catch((err2)=>{
                                         console.log(err2); 
                                    }); 
                    }
                   else if (response.data.code === -4) {
                    props.showToast(true,"Participant/s already registered For this event.","Unsuccessful");
                } else if (response.data.code === -5) {
                    props.showToast(true,"Invalid member details! Enter valid SF ID.","Unsuccessful");
                } else if (response.data.code === -2) {
                  props.showToast(true,"Registration unsuccessful. Please logout and login again","Unsuccessful");
                } 
                else if (response.data.code === -10) {
                  props.showToast(true,"A Participant Detail is Repeated. Kindly Check","Unsuccessful");
                } 
                else if (response.data.code === -6) {
                  props.showToast(true,"Team Size Requirement Not Fulfilled.","Unsuccessful");
                } else{
                        //console.log("Registration unsuccessful. Please logout and login again");
                        props.showToast(true,"Registration unsuccessful. Please logout and login again","Unsuccessful")
    
                    }
                    // localStorage.setItem("evDeets",JSON.stringify(response.message))
                    console.log(response);
                    setregisterBtnText("Register");
                })
                .catch((error)=>{
                    console.log(error); 
                    props.showToast(true,"Registration unsuccessful. Please logout and login again","Unsuccessful")
                    setregisterBtnText("Register");
                });
    
    }
    
     
    const [numMem,setnumMem]=useState(0);  
    useEffect(()=>{
        // initialValues.numOfMembers=props.array.length; 
        setnumMem(props.array.length); 
        initialValues.members=new Array(props.array.length); 
        initialValues.members.fill(''); 
        initialValues.members[0]=JSON.parse(localStorage.getItem("data")).message.sf_id; 
        initialValues.numOfMembers=props.array.length; 
        console.log(props.numF,initialValues); 
        //initialValues assignment finished
        
    },[props.array]);

    const idOf = () => {
    const evName = props.name;
    let id = null;
    let found = false;
    for (let i = 0; i < evID.categories.length; i++) {
      for (let j = 0; j < evID.categories[i].events.length; j++) {
        if (evName === evID.categories[i].events[j].name) {
          id = evID.categories[i].events[j].id;
          found = true;
          break;
        }
        if (found) {
          break;
        } else {
          continue;
        }
      }
    }
    return id;
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values, idOf(props.name));
        }}
      >
        {({ values, setValues }) => (
          <Form>
            <div className={props.drop ? "drop show" : "drop noshow"}>
              <Field name="numOfMembers">
                {({ field }) => (
                  <select
                    {...field}
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      const members = [...values.members];
                      const numOfMembers = ev.target.value || 0;
                      const prevNum = parseInt(field.value || 0);
                      if (prevNum < numOfMembers) {
                        for (let j = 0; j < numOfMembers - prevNum; j++) {
                          members.push("");
                        }
                      } else if (prevNum > numOfMembers) {
                        for (let k = 0; k < prevNum - numOfMembers; k++) {
                          members.pop();
                        }
                      }
                      setValues({ ...values, members });
                      console.log(values);
                      field.onChange(ev);
                    }}
                  >
                    {props.mainA.map((el, index) => {
                      return (
                        <option value={el} key={`op${index}`}>
                          {el}
                        </option>
                      );
                    })}
                  </select>
                )}
              </Field>
            </div>

            <div className="register-drop-down-list">
              <FieldArray name="members">
                {(fieldArrayprops) => {
                  // console.log(fieldArrayprops);
                  const { form } = fieldArrayprops;
                  const { values } = form;
                  const { members } = values;

                  return (
                    <>
                      {members.map((el, index) => {
                        return (
                          <div className="infield" key={index}>
                            <label htmlFor={`members[${index}]`}>{`Member ${
                              index + 1
                            }`}</label>
                            <Field
                              className="entry-id"
                              name={`members[${index}]`}
                            />
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </div>

            <button className="register-submit-button" type="submit">
              <div>{registerBtnText}</div>{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}            
export default Regformik;
