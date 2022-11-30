import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Expertteam() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items1 = [
    <div className="itemteam" data-value="1">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            
              <img src="images/team1.webp" alt="Shraddha_Sharma" />
          
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            Shraddha Sharma
          </h4>
          <span className="designation">BUSINESS DEVELOPMENT EXECUTIVE</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="2">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            
              <img src="images/team2.webp" alt="Nitin_Vishvakarma" />
            
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
          Nitin Vishvakarma
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="3">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            
              <img src="images/team3.webp" alt="Vikas_Choudhary" />
            
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            Vikas Choudhary
          </h4>
          <span className="designation">WEB DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="4">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
           
              <img src="images/team4.webp" alt="Sumit__Tiwari" />
           
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
           Sumit Tiwari
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="5">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
          
              <img src="images/team7.webp" alt="Yogita Saxena" />
           
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            Yogita Saxena
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="6">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
           
              <img src="images/team6.webp" alt="raghav dubey" />
          
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            Raghav Dubey
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="7">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
          
              <img src="images/team5.webp" alt="" />
           
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            Vipin Joshi
          </h4>
          <span className="designation">HR MANAGER</span>
        </div>
      </div>
    </div>,
      <div className="itemteam" data-value="8">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
           
              <img src="images/team8.webp" alt="Navin_Kukreja" />
           
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
          Navin Kukreja
          </h4>
          <span className="designation">WEB DEVELOPER</span>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <div className="rs-team style4 bg17 pt-95 pb-25 ">
        <div className="container">
          <div className="sec-title3 text-center ">
            <span className="sub-title">EXPERT TEAM</span>
            <h2 className="title ">
              The way a team plays as a whole determines its success. You may
              have the greatest bunch of individual stars in the world.
            </h2>
            <div className="heading-border-line"></div>
          </div>
          <br />
          <br />

          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            mouseTracking
            items={items1}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
        <div className="container">
          <div className="sec-title3 text-center ">
            <span className="sub-title">Certifications</span>

            <div className="heading-border-line"></div>
          </div>
          <div className="row certifite text-center">
            <div className="col-xs-12 col-md-4">
              <img src="images/rqc.webp" alt="rqc" />
            </div>
            <div className="col-xs-12 col-md-4">
              <img src="images/ukasl.webp" alt="ukas" />
            </div>
            <div className="col-xs-12 col-md-4">
              <img src="images/cmmi.webp" alt="cmmi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertteam;
