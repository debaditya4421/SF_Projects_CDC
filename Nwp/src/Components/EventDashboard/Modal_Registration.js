import React, { useEffect, useState } from 'react';
import data from './events_dashboard.json';
import Regformik from './Regformik';
// import "./events.css";



function Modal_Registration(props) {
    // const [eventName,seteventName]=useState(); 
    // let nos = parseInt(props.num,10); 
    // let temparr=[]; 
    const srchJSON =()=>{
        for (let i = 0; i < data.events.length; i++) {
            if (props.name === data.events[i].name) {
                return i; 
            }
        }
    }
    
    const [reg, setreg] = useState("");
    const [drop,setdrop]=useState(true);
    const [numMem,setnumMem]=useState();  
    const [mainArr,setmainArr]=useState([]); 
    const [evIndex,setevIndex] = useState(srchJSON);
    const [choice,setchoice]=useState(null); 
    const [temparr,settemparr]=useState([]); 
    
    useEffect(() => {
        // let arr=data.events; 
        let index=0; 
        for (let i = 0; i < data.events.length; i++) {
            if (props.name === data.events[i].name) {
                index=i; 
                break;
            }
        }
        
        let start = data.events[index].teamsize[0]; 
        let end = data.events[index].teamsize[1];
        let isTrue=(start===end); 
        console.log("isTrue",isTrue); 
        let arr=[]; 
        if ((start===end)){
            let x=[]; 
            arr=[start];
            for (let i=0;i<start;i++){
                x[i]=1; 
            }
            settemparr(x); 
            setchoice(start); 
            setdrop(false); 
        }
        else {
            let x=[]; 
            for (let i=0;i<(end-start);i++){
                arr[i]=start+i; 
            }
            arr[end-start]=end; 
            arr.map((el)=>{
                if (el==start){
                    for (let i=0;i<start;i++){
                        x[i]=1; 
                    }
                }
            });
            settemparr(x); 
            setchoice(start); 
            console.log("drop-down menu options",arr); 
        }
        setmainArr(arr);  

    },[props.name]);

    return (
        <div className="Obi">
            <div className="information">
                <h1>
                    {data.events[evIndex].name}
                </h1>
            </div>
            <div className={(choice!==null)?"txtboxCol vis":"txtboxCol invis"}>
                <Regformik showToast={props.showToast} array={temparr} name={data.events[evIndex].name} numF={choice} mainA={mainArr} drop={drop} setOpenModal={props.setOpenModal}/>
                
            </div>
        </div>
    );
}

export default Modal_Registration;