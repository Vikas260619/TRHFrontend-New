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
            <a href="/">
              <img src="images/team1.jpg" alt="Shraddha_Sharma" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Shraddha Sharma</a>
          </h4>
          <span className="designation">BUSINESS DEVELOPMENT EXECUTIVE</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="2">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team2.jpg" alt="Nitin_Vishvakarma" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Nitin Vishvakarma</a>
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="3">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team3.jpeg" alt="Vikas_Choudhary" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Vikas Choudhary</a>
          </h4>
          <span className="designation">WEB DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="4">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team4.jpeg" alt="Sumut__Tiwari" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Sumit Tiwari</a>
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="5">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team7.jpg" alt="Yogita Saxena" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Yogita Saxena</a>
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="6">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team6.jpeg" alt="raghav dubey" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Raghav Dubey</a>
          </h4>
          <span className="designation">SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="7">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team5.jpeg" alt="" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Vipin Joshi</a>
          </h4>
          <span className="designation">HR MANAGER</span>
        </div>
      </div>
    </div>,
      <div className="itemteam" data-value="8">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <a href="/">
              <img src="images/team8.jpeg" alt="Navin_Kukreja" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">
            <a href="/">Navin Kukreja</a>
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
              <img src="images/rqc.png" alt="rqc" />
            </div>
            <div className="col-xs-12 col-md-4">
              <img src="images/ukasl.png" alt="ukas" />
            </div>
            <div className="col-xs-12 col-md-4">
              <img src="images/cmmi.png" alt="cmmi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertteam;
