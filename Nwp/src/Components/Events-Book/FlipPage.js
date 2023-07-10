import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./FlipPage.css";
import { Link } from "react-router-dom";
import Bangalore from "./CityIcons/Bangalore.png";
import Chennai from "./CityIcons/chennai.png";
import Ahemdabad from "./CityIcons/Ahmedabad.png";
import Bhubaneshwar from "./CityIcons/Bhubaneswar.png";
import Chandigarh from "./CityIcons/chandigarh.png";
import Delhi from "./CityIcons/Delhi.png";
import Guwahati from "./CityIcons/Guwahati.png";
import Hyderabad from "./CityIcons/Hyderabad.png";
import Jaipur from "./CityIcons/jaipur.png";
import Kolkata from "./CityIcons/kolkata.png";
import Lucknow from "./CityIcons/Lucknow.png";
import Mumbai from "./CityIcons/Mumbai.png";
import Nagpur from "./CityIcons/Nagpur.png";
import Patna from "./CityIcons/patna.png";
import Pune from "./CityIcons/pune.png";
import Ranchi from "./CityIcons/Ranchi.png";
import Raipur from "./CityIcons/Bhopal2.png";
import line from "./BookImges/line_nwp.png";
import EventContent from "./EventContent";
import EventContent2 from "./EventContent2";
import BackButton from "../BackButton/BackButton";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import Galleryimg1 from "./GalleryImages/sf1.jpg"
import Galleryimg2 from "./GalleryImages/sf2.jpg"
import Galleryimg3 from "./GalleryImages/sf3.jpg"
import Galleryimg4 from "./GalleryImages/sf4.jpg"
import Galleryimg5 from "./GalleryImages/sf5.jpg"
import Galleryimg6 from "./GalleryImages/sf6.jpg"
// import Galleryimg7 from "./GalleryImages/sf7.jpg"
import Galleryimg8 from "./GalleryImages/sf8.jpg"
import Galleryimg9 from "./GalleryImages/sf9.jpg"
import Galleryimg10 from "./GalleryImages/sf10.jpg"
import Galleryimg11 from "./GalleryImages/sf11.jpg"
import Galleryimg12 from "./GalleryImages/sf12.jpg"
import Galleryimg13 from "./GalleryImages/sf13.jpg"
// import Galleryimg14 from "./GalleryImages/sf14.jpg"
import Galleryimg15 from "./GalleryImages/sf15.jpg"
import Galleryimg16 from "./GalleryImages/sf16.jpg"
import Galleryimg17 from "./GalleryImages/sf17.jpg"
import Galleryimg18 from "./GalleryImages/sf18.jpg"
import Galleryimg19 from "./GalleryImages/sf19.jpg"
import Galleryimg20 from "./GalleryImages/sf20.jpg"
// import Galleryimg21 from "./GalleryImages/sf21.jpg"
import Galleryimg22 from "./GalleryImages/sf22.jpg"
import Galleryimg23 from "./GalleryImages/sf23.png"
import Galleryimg24 from "./GalleryImages/sf24.jpg"
import Galleryimg25 from "./GalleryImages/sf25.jpg"
import Galleryimg26 from "./GalleryImages/sf26.jpg"
import Galleryimg27 from "./GalleryImages/sf27.png"
// import Galleryimg28 from "./GalleryImages/sf28.png"
import Galleryimg29 from "./GalleryImages/sf29.JPG"
import Galleryimg30 from "./GalleryImages/sf30.JPG"
import Galleryimg31 from "./GalleryImages/sf31.JPG"
import Galleryimg32 from "./GalleryImages/sf32.JPG"
import Galleryimg33 from "./GalleryImages/sf33.JPG"
import Galleryimg34 from "./GalleryImages/sf34.JPG"
// import Galleryimg35 from "./GalleryImages/sf35.jpg"
import Galleryimg36 from "./GalleryImages/sf36.jpg"
import Galleryimg37 from "./GalleryImages/sf37.jpg"
import Galleryimg38 from "./GalleryImages/sf38.jpg"
// import Galleryimg39 from "./GalleryImages/sf39.JPG"
import Galleryimg40 from "./GalleryImages/sf40.jpg"
import Galleryimg41 from "./GalleryImages/sf41.jpg"
import Galleryimg42 from "./GalleryImages/sf42.jpg"
import border_above from "./BookImges/border_above.png"

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={`demoPage-${props.number} demoPage`} ref={ref}>
      <div className={`propsChildren`}>{props.children}</div>
    </div>
  );
});

function MyBook(props) {
  var myIndex1 =0;
  var myIndex2 =0;
  var myIndex3 =0;
  var myIndex4 =0;
  var myIndex5 =0;
  var myIndex6 =0;
  const carousel1 = () =>{
    let i1;
    let x1 = document.getElementsByClassName("galimg");
    for (i1 = 0; i1 < x1.length; i1++) {
      x1[i1].style.opacity = "0";  
    }
    myIndex1++;
    if (myIndex1 > x1.length) {myIndex1 = 1}    
    x1[myIndex1-1].style.opacity = "1";  
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
  const carousel3 = () =>{
    let i;
    let x = document.getElementsByClassName("galimg3");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    myIndex3++;
    if (myIndex3 > x.length) {myIndex3 = 1}    
    x[myIndex3-1].style.opacity = "1";  
  }
  const carousel4 = () =>{
    let i;
    let x = document.getElementsByClassName("galimg4");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    myIndex4++;
    if (myIndex4 > x.length) {myIndex4 = 1}    
    x[myIndex4-1].style.opacity = "1";  
  }
  const carousel5 = () =>{
    let i;
    let x = document.getElementsByClassName("galimg5");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    myIndex5++;
    if (myIndex5 > x.length) {myIndex5 = 1}    
    x[myIndex5-1].style.opacity = "1";  
  }
  const carousel6 = () =>{
    let i;
    let x = document.getElementsByClassName("galimg6");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    myIndex6++;
    if (myIndex6 > x.length) {myIndex6 = 1}    
    x[myIndex6-1].style.opacity = "1";  
  }

  const bookstyle=`
  .demoPage-1 {background-image: url(${props.img6.src});}
  .demoPage-2{background-image: url(${props.img4.src});}
  .demoPage-3{
    background-image: url(${props.img2.src});}
    .demoPage-4,
.demoPage-6,
.demoPage-8,
.demoPage-10,
.demoPage-12,
.demoPage-14,
.demoPage-16,
.demoPage-18,
.demoPage-20,
.demoPage-22,
.demoPage-24,
.demoPage-26,
.demoPage-28,
.demoPage-30,
.demoPage-32,
.demoPage-34,
.demoPage-36,
.demoPage-38 {
  background-image: url(${props.img4.src});}
  .demoPage-5,
.demoPage-7,
.demoPage-9,
.demoPage-11,
.demoPage-13,
.demoPage-15,
.demoPage-17,
.demoPage-19,
.demoPage-21,
.demoPage-23,
.demoPage-25,
.demoPage-27,
.demoPage-29,
.demoPage-31,
.demoPage-33,
.demoPage-35,
.demoPage-37,
.demoPage-39 {
  background-image: url(${props.img2.src});
}
.eventbookout{background-image: url(${props.img5.src});}
  `
  
  // const pageFlip = new pageFlip(document.getElementById('book'),{
  //   width:400,
  //   height:550
  // });
  // useEffect(()=>{
  //   Fliptoindpage(book.current.pageFlip()){
  //     book.current.pageFlip().on("flip", (e) => {
  //       setSmthng(e.data);
  //     });
  //   }
  // },[])
  // const [disClick, setDisClick] = useState(true);
  
  // const [bkcbtn, setBkcbtn] = useState(false);
  // const toggleBkctn = () => {
  //   setBkcbtn(!bkcbtn);
  // };
  let allEvents = [];
  const{smthng,setSmthng} = useContext(UserContext);
  const[cntrl,setCntrl] = useState(0);
  const book = useRef();
  const refOne = useRef(null);
  const [coverPageClass, setCoverPageClass] = useState(
    "event-page event-page-cover"
  );

  window.onclick = (e) => {
    if (e.srcElement.id === "book") {
      book.current.pageFlip().flip(0);
      
      // book.current.pageFlip().on("flip",(e)=>{
      //   if(e.data==1){
      //     document.getElementById("event-book-link-gallery").style.backgroundColor="#ecb265";
      //   }
      //   else{
      //     document.getElementById("event-book-link-gallery").style.backgroundColor="#b0936ce4";
      //   }
      // });
      // alert(book.current.pageFlip().getCurrentPageIndex())
      // document
      //   .getElementsByClassName(".bookmarks-button")
      //   .classList.add("hide-bookmarks");
    }
    window.ondblclick = (e) => {
      if (e.srcElement.className !== "demoPage-1") {
        if (book.current.pageFlip().getCurrentPageIndex() === 0) {
          book.current.pageFlip().flipNext();
        }
      }
    };
  };
useEffect(()=>{
setTimeout(() => {
  book.current.pageFlip().flip(smthng);
}, 1500);
setInterval(() => {
carousel1();
setTimeout(() => {
  carousel2();
}, 1270);
setTimeout(() => {
carousel3();
  
}, 1500);
setTimeout(() => {
  carousel4()
}, 1200);
setTimeout(() => {
  carousel5()
}, 1500);
setTimeout(() => {
  carousel6()
}, 400);
}, 3500);
},[])
  return (
    <>
      <BackButton togglebackclick={props.togglebackClickPage}/>
    <style>{bookstyle}</style>
    <div className="book" id="book">
     
      <HTMLFlipBook
        height={550}
        width={400}
        showCover={true}
        ref={book}
        maxShadowOpacity={0.4}
        disableFlipByClick={true}
      >
        <Page number="1" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div style={{ display: "none" }}>
            {
              setTimeout(()=>{
                book.current.pageFlip().on('flip', (e)=>{
                  if(e.data === 1){
                    setCntrl(1);
                  }
                  else if(e.data===3){
                    setCntrl(3);
                  }
                  else{
                    setCntrl(0);
                  }
                })
              },1500)
            }
          </div>
        </Page>
        <Page number="2" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <figure className="Gallery-layout">
            <div className="BookGalleryContAll BookGalleryCont1">
            <img className="borderAboveAll borderAbove1" src={border_above} alt=" "/>
            <div className="gallery-images galleryimg1">
              
              <img src={Galleryimg1} class="galimg" alt="img1"/>
              <img src={Galleryimg2} class="galimg" alt="img2"/>
              <img src={Galleryimg3} class="galimg" alt="img3"/>
              <img src={Galleryimg4} class="galimg" alt="img4"/>
              <img src={Galleryimg5} class="galimg" alt="img5"/>
              <img src={Galleryimg6} class="galimg" alt="img6"/>
              {/* <img src={Galleryimg7} class="galimg" alt="img7"/> */}
            </div>
            </div>
            <div className="BookGalleryContAll BookGalleryCont2">
            <img className="borderAboveAll borderAbove2" src={border_above} alt=" "/>
            <div className="gallery-images galleryimg2">
              <img src={Galleryimg8} class="galimg2" alt="img1"/>
              <img src={Galleryimg9} class="galimg2" alt="img2"/>
              <img src={Galleryimg10} class="galimg2" alt="img3"/>
              <img src={Galleryimg11} class="galimg2" alt="img4"/>
              <img src={Galleryimg12} class="galimg2" alt="img5"/>
              <img src={Galleryimg13} class="galimg2" alt="img6"/>
              {/* <img src={Galleryimg14} class="galimg2" alt="img7"/> */}
            </div>
            </div>
            <div className="BookGalleryContAll BookGalleryCont3">
            <img className="borderAboveAll borderAbove3" src={border_above} alt=" "/>
            <div className="gallery-images galleryimg3">
              <img src={Galleryimg15} class="galimg3" alt="img1"/>
              <img src={Galleryimg16} class="galimg3" alt="img2"/>
              <img src={Galleryimg17} class="galimg3" alt="img3"/>
              <img src={Galleryimg18} class="galimg3" alt="img4"/>
              <img src={Galleryimg19} class="galimg3" alt="img5"/>
              <img src={Galleryimg20} class="galimg3" alt="img6"/>
              {/* <img src={Galleryimg21} class="galimg3" alt="img7"/> */}
            </div>
            </div>
          </figure>
        </Page>
        <Page number="3" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <figure className="Gallery-layout">
            <div className="BookGalleryContAll BookGalleryCont7">
              <img className="borderAboveAll borderAbove7" src={border_above} alt=" "/>
            <div className="gallery-images galleryimg7">
              <img src={Galleryimg22} class="galimg4" alt="img1"/>
              <img src={Galleryimg23} class="galimg4" alt="img2"/>
              <img src={Galleryimg24} class="galimg4" alt="img3"/>
              <img src={Galleryimg25} class="galimg4" alt="img4"/>
              <img src={Galleryimg26} class="galimg4" alt="img5"/>
              <img src={Galleryimg27} class="galimg4" alt="img6"/>
              {/* <img src={Galleryimg28} class="galimg4" alt="img7"/> */}
            </div>
            </div>
            <div className="BookGalleryContAll BookGalleryCont8">
            <img className="borderAboveAll borderAbove8" src={border_above} alt=" "/>
            <div
              className="gallery-images galleryimg8"
            >
              <img src={Galleryimg29} class="galimg5" alt="img1"/>
              <img src={Galleryimg30} class="galimg5" alt="img2"/>
              <img src={Galleryimg31} class="galimg5" alt="img3"/>
              <img src={Galleryimg32} class="galimg5" alt="img4"/>
              <img src={Galleryimg33} class="galimg5" alt="img5"/>
              <img src={Galleryimg34} class="galimg5" alt="img6"/>
              {/* <img src={Galleryimg35} class="galimg5" alt="img7"/> */}
            </div>
            </div>
            <div className="BookGalleryContAll BookGalleryCont9">
              <img className="borderAboveAll borderAbove9" src={border_above} alt=" "/>
              <div className="gallery-images galleryimg9">
                <img src={Galleryimg36} class="galimg6" alt="img1"/>
                <img src={Galleryimg37} class="galimg6" alt="img2"/>
                <img src={Galleryimg38} class="galimg6" alt="img3"/>
                {/* <img src={Galleryimg39} class="galimg6" alt="img4"/> */}
                <img src={Galleryimg40} class="galimg6" alt="img5"/>
                <img src={Galleryimg41} class="galimg6" alt="img6"/>
                <img src={Galleryimg42} class="galimg6" alt="img7"/>
              </div>
            </div>
          </figure>
        </Page>
        <Page number="4" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="event-book-links">
            <button
              onClick={() => {
                book.current.pageFlip().flip(5);
              }}
            >
              <div className="EVENTcITY">Ahmedabad</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(7);
              }}
            >
              <div className="EVENTcITY">Bangalore</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(9);
              }}
            >
              <div className="EVENTcITY">Bhubaneshwar</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(11);
              }}
            >
              <div className="EVENTcITY">Chandigarh</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(13);
              }}
            >
              <div className="EVENTcITY">Chennai</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(15);
              }}
            >
              <div className="EVENTcITY">Delhi</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(17);
              }}
            >
              <div className="EVENTcITY">Guwahati</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(19);
              }}
            >
              <div className="EVENTcITY">Hyderabad</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(21);
              }}
            >
              <div className="EVENTcITY">Jaipur</div>
            </button>
          </div>
        </Page>
        <Page number="5" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="event-book-links">
            <button
              onClick={() => {
                book.current.pageFlip().flip(23);
              }}
            >
              <div className="EVENTcITY">Kolkata</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(25);
              }}
            >
              <div className="EVENTcITY">Lucknow</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(27);
              }}
            >
              <div className="EVENTcITY">Mumbai</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(29);
              }}
            >
              <div className="EVENTcITY">Nagpur</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(31);
              }}
            >
              <div className="EVENTcITY">Patna</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(33);
              }}
            >
              <div className="EVENTcITY">Pune</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(35);
              }}
            >
              <div className="EVENTcITY">Ranchi</div>
            </button>
            <button
              onClick={() => {
                book.current.pageFlip().flip(37);
              }}
            >
              <div className="EVENTcITY">Bhopal</div>
            </button>
          </div>
        </Page>
        <Page number="6" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img src={Ahemdabad} className="EventBookCityNameImage" alt="error" />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Ahmedabad</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={12}
              city={"Ahmedabad"}
              EventClicking={props.EventClicking}
              pgn={6}
            />
          </div>
        </Page>
        <Page number="7" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Ahmedabad"}
              numEvents={12}
              EventClicking={props.EventClicking}
              pgn={7}
            />
          </div>
        </Page>

        <Page number="8" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Bangalore}
                className="EventBookCityNameImage"
                alt="error"
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Bangalore</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={14}
              city={"Banglore"}
              EventClicking={props.EventClicking}
              pgn={8}
            />
          </div>
        </Page>
        <Page number="9" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Banglore"}
              numEvents={14}
              EventClicking={props.EventClicking}
              pgn={9}
            />
          </div>
        </Page>

        <Page number="10" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img src={Bhubaneshwar} className="EventBookCityNameImage EventBookCityNameImageBhub" alt="error" />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Bhubaneswar</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Bhubaneshwar"}
              pgn={10}
            />
          </div>
        </Page>
        <Page number="11" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Bhubaneshwar"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={11}
            />
          </div>
        </Page>

        <Page number="12" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Chandigarh}
                className="EventBookCityNameImage"
                alt="error"
              />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Chandigarh</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={12}
              EventClicking={props.EventClicking}
              city={"Chandigarh"}
              pgn={12}
            />
          </div>
        </Page>
        <Page number="13" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Chandigarh"}
              numEvents={12}
              EventClicking={props.EventClicking}
              pgn={13}
            />
          </div>
        </Page>

        <Page number="14" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Chennai}
                alt="error"
                className="EventBookCityNameImage"
              />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Chennai</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Chennai"}
              pgn={14}
            />
          </div>
        </Page>
        <Page number="15" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Chennai"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={15}
            />
          </div>
        </Page>

        <Page number="16" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Delhi}
                alt="error"
                className="EventBookCityNameImageDelh"
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Delhi</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <EventContent
            numEvents={14}
            pgn={16}
            EventClicking={props.EventClicking}
            city={"Delhi"}
          />
        </Page>
        <Page number="17" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Delhi"}
              numEvents={14}
              EventClicking={props.EventClicking}
              pgn={17}
            />
          </div>
        </Page>

        <Page number="18 img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}">
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Guwahati}
                alt="error"
                style={{transform:"scale(0.9)"}}
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Guwahati</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              pgn={18}
              EventClicking={props.EventClicking}
              city={"Guwahati"}
            />
          </div>
        </Page>
        <Page number="19" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Guwahati"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={19}
            />
          </div>
        </Page>

        <Page number="20" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Hyderabad}
                alt="error"
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Hyderabad</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={12}
              EventClicking={props.EventClicking}
              city={"Hyderabad"}
              pgn={20}
            />
          </div>
        </Page>
        <Page number="21" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Hyderabad"}
              numEvents={12}
              EventClicking={props.EventClicking}
              pgn={21}
            />
          </div>
        </Page>

        <Page number="22" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Jaipur}
                alt="error"
                className="EventBookCityNameImage"
              />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Jaipur</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Jaipur"}
              pgn={22}
            />
          </div>
        </Page>
        <Page number="23" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Jaipur"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={23}
            />
          </div>
        </Page>

        <Page number="24" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img src={Kolkata} className="EventBookCityNameImage" alt="error" />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Kolkata</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Kolkata"}
              pgn={24}
            />
          </div>
        </Page>
        <Page number="25" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Kolkata"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={25}
            />
          </div>
        </Page>

        <Page number="26" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Lucknow} 
                className="EventBookCityNameImage"
                alt="error"
              />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Lucknow</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              pgn={26}
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Lucknow"}
            />
          </div>
        </Page>
        <Page number="27" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Lucknow"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={27}
            />
          </div>
        </Page>

        <Page number="28" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Mumbai}
                className="EventBookCityNameImage"
                alt="error"
              />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Mumbai</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={14}
              pgn={28}
              EventClicking={props.EventClicking}
              city={"Mumbai"}
            />
          </div>
        </Page>
        <Page number="29">
          <div>
            <EventContent2
              city={"Mumbai"}
              numEvents={14}
              EventClicking={props.EventClicking}
              pgn={29}
            />
          </div>
        </Page>

        <Page number="30 img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}">
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Nagpur}
                alt="error"
              />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Nagpur</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              pgn={30}
              EventClicking={props.EventClicking}
              city={"Nagpur"}
            />
          </div>
        </Page>
        <Page number="31" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Nagpur"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={31}
            />
          </div>
        </Page>

        <Page number="32" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img src={Patna} alt="error" />
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Patna</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Patna"}
              pgn={32}
            />
          </div>
        </Page>
        <Page number="33" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Patna"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={33}
            />
          </div>
        </Page>

        <Page number="34" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Pune}
                className="EventBookCityNameImage"
                alt="error"
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Pune</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={14}
              EventClicking={props.EventClicking}
              city={"Pune"}
              pgn={34}
            />
          </div>
        </Page>
        <Page number="35" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Pune"}
              numEvents={14}
              EventClicking={props.EventClicking}
              pgn={35}
            />
          </div>
        </Page>

        <Page number="36" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Ranchi}
                alt="error"
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Ranchi</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Ranchi"}
              pgn={36}
            />
          </div>
        </Page>
        <Page number="37" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Ranchi"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={37}
            />
          </div>
        </Page>

        <Page number="38" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div className="EventCityIcon iconcity">
            <div className="iconCityName">
              <img
                src={Raipur}
                className="EventBookCityNameImageBhopal"
                alt="error"
              />{" "}
              <div className="EventBookCityNameHeading">
                <img src={line} className="EventBookCityNameLine" alt=" " />
                <div className="EventBookCityName">Bhopal</div>
                <img src={line} className="EventBookCityNameLine" alt=" " />
              </div>
            </div>
          </div>
          <div>
            <EventContent
              numEvents={11}
              EventClicking={props.EventClicking}
              city={"Bhopal"}
              pgn={38}
            />
          </div>
        </Page>
        <Page number="39" img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img6={props.img6}
          img7={props.img7}>
          <div>
            <EventContent2
              city={"Bhopal"}
              numEvents={11}
              EventClicking={props.EventClicking}
              pgn={39}
            />
          </div>
        </Page>
      </HTMLFlipBook>

      <div className="bookmarks-button">
        <button
          className={cntrl === 1 ? "event-book-link-gallery event-book-link-gallery-hover" : "event-book-link-gallery"}
          // className="event-book-link-gallery"
          onClick={() => {
            book.current.pageFlip().flip(2);
          }}
        >
          <div className="toUppercase">Gallery</div>
        </button>
        <button
        className={cntrl === 3 ? "event-book-link-index event-book-link-gallery-hover" : "event-book-link-index"}
          // className="event-book-link-index"
          onClick={() => {
            book.current.pageFlip().flip(4);
          }}
        >
          <div className="toUppercase">Cities</div>
        </button>
      </div>
    </div>
    </>
  );

}
export default MyBook;