import React, { useState } from 'react';
import { State } from 'react-svg';
import './Team.css';
import nitish from './nitish.jpg';
import sanyam from './sanyam.jpg';
import bakul from './bakul.jpg';

function Team() {
  const [credits, setcredits] = useState(0);

  const toggleClick = () => {

    if (credits === 0) {
      console.log("Working if");

      let x = document.getElementsByClassName('team-footer');
      let y = document.getElementsByClassName('team-credits');
      let z = document.getElementsByClassName('fa-solid');
      x[0].classList.add("team-footer-animation-up"); 
      x[0].classList.remove("team-footer-animation-down");
      z[0].classList.add('fa-angles-down');
      z[0].classList.remove('fa-angles-up');


      setcredits(1);
    }
    else {
      console.log("Working else");

      let x = document.getElementsByClassName('team-footer');
      let y = document.getElementsByClassName('team-credits');
      let z = document.getElementsByClassName('fa-solid');

      x[0].classList.remove("team-footer-animation-up"); 
      x[0].classList.add("team-footer-animation-down");
      z[0].classList.remove('fa-angles-down');
      z[0].classList.add('fa-angles-up');



      setcredits(0);
    }

  }

  return (
    <div className='h-full'>
      <section id="team">

        <div className="team-outermost">

          <h1 className="team-heading">OUR TEAM</h1>

          {/* <div className="team-content">

    <div className="team-content-card card-1">

      <div className="team-content-main">
        <a target="_blank" href="/"><img className="team-content-main-img"  src={bakul  } alt="" /></a>
      </div>
      <div className="team-card-detail">
        <h4>BAKUL SARKAR</h4>
        <h6>Publicity &amp; Media Outreach </h6>
        <a target="_blank" href="https://www.facebook.com/bakul.sarkar.9828"><i className="fa-brands fa-square-facebook"></i></a>
        <a target="_blank" href="https://www.instagram.com/bakul.sarkar.9828/?hl=en"><i className="fa-brands fa-instagram"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/bakul-sarkar-6734a5205/"><i className="fa-brands fa-linkedin"></i></a>

      </div>

    </div>

    <div className="team-content-card card-2">

      <div className="team-content-main">
        <a target="_blank" href="/"><img className="team-content-main-img"  src={sanyam  } alt="" /></a>
      </div>
      <div className="team-card-detail">
        <h4>SANYAM AGARWAL</h4>
        <h6>Publicity &amp; Media Outreach | Tech Cordinator</h6>

        <a target="_blank" href="https://www.facebook.com/sanyam.agrawal.520"><i className="fa-brands fa-square-facebook"></i></a>
        <a target="_blank" href="https://www.instagram.com/rs_sanyam/?hl=en"><i className="fa-brands fa-instagram"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/sanyam-agrawal-863888211/"><i className="fa-brands fa-linkedin"></i></a>

      </div>

    </div>

    <div className="team-content-card card-3">

      <div className="team-content-main">
        <a target="_blank" href="/"><img className="team-content-main-img"  src={nitish  } alt="" /></a>
      </div>
      <div className="team-card-detail">
        <div className="team-card-detail-innerbox">
          <h4>NITISH KUMAR</h4>
          <h6>Publicity &amp; Media Outreach</h6>

          <a target="_blank" href="https://www.facebook.com/nitishk1005"><i className="fa-brands fa-square-facebook"></i></a>
          <a target="_blank" href="https://www.instagram.com/nitish.bpns/?hl=en"><i className="fa-brands fa-instagram"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/nitish-bpns/"><i className="fa-brands fa-linkedin"></i></a>

        </div>


      </div>

    </div>



  </div> */}


          <div className="main">
            <div className="profile-card">
              <div className="img">
                <img src={bakul} />
              </div>
              <div className="caption">
                <h3>BAKUL SARKAR</h3>
                <p>Publicity &amp; Media Outreach </p>
                <div className="social-links">
                  <a target="_blank" href="https://www.facebook.com/bakul.sarkar.9828"><i className="fa-brands fa-square-facebook"></i></a>
                  <a target="_blank" href="https://www.instagram.com/bakul.sarkar.9828/?hl=en"><i className="fa-brands fa-instagram"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/in/bakul-sarkar-6734a5205/"><i className="fa-brands fa-linkedin"></i></a>
                  <a target="_blank" href="https://wa.me/916265112847"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src={sanyam} />
              </div>
              <div className="caption">
                <h3>SANYAM AGARWAL</h3>
                <p>Publicity &amp; Media Outreach | Tech Cordinator</p>
                <div className="social-links">
                  <a target="_blank" href="https://www.facebook.com/sanyam.agrawal.520"><i className="fa-brands fa-square-facebook"></i></a>
                  <a target="_blank" href="https://www.instagram.com/rs_sanyam/?hl=en"><i className="fa-brands fa-instagram"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/in/sanyam-agrawal-863888211/"><i className="fa-brands fa-linkedin"></i></a>
                  <a target="_blank" href="https://wa.me/917205704975"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src={nitish} />
              </div>
              <div className="caption">
                <h3>NITISH KUMAR</h3>
                <p>Publicity &amp; Media Outreach</p>
                <div className="social-links">

                  <a target="_blank" href="https://www.facebook.com/nitishk1005"><i className="fa-brands fa-square-facebook"></i></a>
                  <a target="_blank" href="https://www.instagram.com/nitish.bpns/?hl=en"><i className="fa-brands fa-instagram"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/in/nitish-bpns/"><i className="fa-brands fa-linkedin"></i></a>
                  <a target="_blank" href="https://wa.me/9195078160000"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>


          {/* <h3 className='webDevelopers'>Web Developers</h3> */}

          <div className='team-footer '>
            <p onClick={toggleClick} className='team-footer-arrow'><i className="fa-solid fa-angles-up"></i></p>
            {/* <h3 className='team-footer-heading'>Developers</h3> */}
            <div className='team-credits'>
              <div className='team-credits-box'><div className='team-credits-box-content'>Aditya Madhukar</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Debaditya Das</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Dikshant Sharma</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Divyanshu Jha</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Ketan Agarwal</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Krish Agarwal</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Ritik Raj</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Shashank Shrivastav</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Shaunak Ghosh</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Shruti Patel</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Shubham Kumar</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Somyajeet Gupta</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Tejal Balyan</div></div>
              <div className='team-credits-box'><div className='team-credits-box-content'>Vineet Yadav</div></div>
            </div>
          </div>

        </div>

      </section>


    </div>
  )
}

export default Team
