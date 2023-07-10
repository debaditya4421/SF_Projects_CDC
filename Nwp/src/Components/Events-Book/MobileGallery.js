import Galleryimg1 from "./GalleryImages/sf1.jpg"
import Galleryimg2 from "./GalleryImages/sf2.jpg"
import Galleryimg3 from "./GalleryImages/sf3.jpg"
import Galleryimg4 from "./GalleryImages/sf4.jpg"
import Galleryimg5 from "./GalleryImages/sf5.jpg"
import Galleryimg6 from "./GalleryImages/sf6.jpg"
import Galleryimg7 from "./GalleryImages/sf7.jpg"
import Galleryimg8 from "./GalleryImages/sf8.jpg"
import Galleryimg9 from "./GalleryImages/sf9.jpg"
import Galleryimg10 from "./GalleryImages/sf10.jpg"
import Galleryimg11 from "./GalleryImages/sf11.jpg"
import Galleryimg12 from "./GalleryImages/sf12.jpg"
import Galleryimg13 from "./GalleryImages/sf13.jpg"
import Galleryimg14 from "./GalleryImages/sf14.jpg"
import "./MobileGallery.css";
import BackButton from "../BackButton/BackButton"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function MobileGallery() {
  let myIndex1 =0;
  let myIndex2 =0;
  const carousel1 = () =>{
    let i;
    let x = document.getElementsByClassName("galimg1");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    myIndex1++;
    if (myIndex1 > x.length) {myIndex1 = 1}    
    x[myIndex1-1].style.opacity = "1";  
  }
  const carousel2 = () =>{
    let i;
    let x = document.getElementsByClassName("galimg2");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.opacity = "1";  
  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(window.innerWidth > 929){
      navigate("/events");
  }
  },[])
  useEffect(()=>{
    setInterval(()=>{
      carousel1();
      setTimeout(()=>{carousel2()},1000)
    },2000)
  },[])
  return (
    <div className="GalleryForMobileAll">
      <BackButton/>
    <div className="mobileGalleryContainer">
      <div className="GalleryMobileHeading">Gallery</div>
      <div className="MobileGalleryImage1" style={{transform:"translateY(50px)"}}>
        <img src={Galleryimg3} className="galimg1"  alt="Spring Fest NWP"/>
        <img src={Galleryimg2} className="galimg1" alt="Spring Fest NWP"/>
        <img src={Galleryimg1} className="galimg1" alt="Spring Fest NWP"/>
        <img src={Galleryimg4} className="galimg1" alt="Spring Fest NWP"/>
        <img src={Galleryimg5} className="galimg1" alt="Spring Fest NWP"/>
        <img src={Galleryimg6} className="galimg1" alt="Spring Fest NWP"/>
        <img src={Galleryimg7} className="galimg1" alt="Spring Fest NWP"/>
      </div>
      <div className="MobileGalleryImage1 MobileGalleryImage2">
        <img src={Galleryimg8} className="galimg2"  alt="Spring Fest NWP"/>
        <img src={Galleryimg9} className="galimg2" alt="Spring Fest NWP"/>
        <img src={Galleryimg10} className="galimg2" alt="Spring Fest NWP"/>
        <img src={Galleryimg11} className="galimg2" alt="Spring Fest NWP"/>
        <img src={Galleryimg12} className="galimg2" alt="Spring Fest NWP"/>
        <img src={Galleryimg13} className="galimg2" alt="Spring Fest NWP"/>
        <img src={Galleryimg14} className="galimg2" alt="Spring Fest NWP"/>
      </div>
    </div>
    </div>
  )
}
export default MobileGallery