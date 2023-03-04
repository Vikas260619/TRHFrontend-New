import React from "react";
import Common from "../Container/Common";
import Marquee from "react-fast-marquee";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";



function Fire() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/logo1.png" alt="Mistminds" style={{height:"25vh",borderRadius:"50%"}} />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="1">
    <div className="counter-area">
      <div className="counter-list mb-25">
        <div className="counter-icon">
          <img src="images/logo2.png" alt="Mistminds" />
        </div>
      </div>
    </div>
  </div>,
    <div className="item" data-value="2">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/trootech.webp" alt="trootech" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/bynebits.webp" alt="bynebits" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/coditas.webp" alt="coditas" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/cloud9.webp" alt="cloud9" />
          </div>
        </div>
      </div>
    </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/digital.jpg" alt="digital" />
         </div>
       </div>
     </div>
   </div>,
    
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/manven.jpg" alt="manven" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/sartdata.jpg" alt="sartdata" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/innovation.jpg" alt="innovation" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/softude.jpg" alt="softude" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/elgebra.jpg" alt="elgebra" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/linkage.jpg" alt="linkage" />
         </div>
       </div>
     </div>
   </div>,
    <div className="item" data-value="5">
    <div className="counter-area">
      <div className="counter-list mb-25">
        <div className="counter-icon">
          <img src="images/aventussoftware.jpg" alt="AventusSoftware" />
        </div>
      </div>
    </div>
  </div>,
   
  ];
  return (
    <div classNameName="py-5">
      <img src="images/firebanner2.png" alt="CloudServices" />

      <div>
      

        <section className="container pt-3 mb-3">
          <h2 className="h3 block-title text-center py-4 font-weight-bold" style={{fontWeight:"700"}}>
            FEATURED SERVICE
          </h2>
          <div className="row pt-5 mt-30">
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <i className="fa fa-fire fa-3x head-icon"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">
                    Fire fighting sytem installation
                  </h3>
                  <p className="card-text text-sm">
                  Reliable and effective fire protection solutions for your peace of mind - choose our fire fighting installation systems.
                  </p>
                  <a href="/installation">
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
                  </span>
                  </a>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <i className="fa fa-wrench fa-3x head-icon"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Maintenance/AMC</h3>
                  <p className="card-text text-sm">
                  Keep your fire protection systems in top condition with our comprehensive maintenance and AMC services.
                  </p>
                  <a href="/maintenance">
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
                  </span>
                  </a>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <i className="fa fa-check fa-3x head-icon"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">
                    Testing Of Fire Fighting System
                  </h3>
                  <p className="card-text text-sm">
                  Our rigorous testing procedures ensure your fire protection system is fully operational when you need it the most.

                  </p>
                  <a href="/testing">
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
                  </span>
                  </a>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <i className="fa fa-plus fa-3x head-icon"></i>
                  
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Trainings</h3>
                  <p className="card-text text-sm">
                  Equip yourself with the knowledge and skills needed to prevent and manage fire emergencies through our expert training.
                  </p>
                  <a href="/trainig">
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
                  </span>
                  </a>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <i className="fa fa-asterisk fa-3x head-icon"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Fire Risk Assessment</h3>
                  <p className="card-text text-sm">
                  Investing in our fire risk assessment services will provide you with peace of mind, knowing that you have identified potential fire risks and taken the necessary steps to mitigate them. Contact us today to learn more about our fire risk assessment services and how we can help you protect your business.
                  </p>
                  
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="#">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <i className="fa fa-building fa-3x head-icon"></i>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Fire Safety Audit</h3>
                  <p className="card-text text-sm">
                  Our fire safety audit services cover all aspects of fire safety, including fire detection, fire suppression, emergency response, and fire prevention. We use a combination of technical expertise and practical experience to provide you with a detailed report of findings and recommendations.
                  </p>
                 
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <section className="pt-95 pb-95 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12  col-md-12 ">
                <div className="sec-title3 text-center mb-35">
                  <span className="sub-title">OUR Client</span>
                  <h1 className="title pb-25 ">
                    We help clients harness the power and scope of the digital
                    world for enhanced business performance and awareness.
                  </h1>
                  <div className="heading-border-line"></div>
                </div>
              </div>
              <Marquee className="marq1">
                <div>
                  <img src="images/logo1.png" alt="microsoft" />
                </div>
                <div>
                  <img src="images/logo2.png" alt="cloudcomputing" />
                </div>
                <div>
                  <img src="images/logo3.png" alt="vuejs" />
                </div>
                <div>
                  <img src="images/logo4.png" alt="bootstrap" />
                </div>
                <div>
                  <img src="images/logo5.png" alt="emben" />
                </div>
                <div>
                  <img src="images/logo6.png" alt="aws" />
                </div>
                <div>
                  <img src="images/logo7.png" alt="jquery" />
                </div>
              
              </Marquee>
            </div>
          </div>
        </section> */}

        
      </div>
      <div className="container-fluid"  style={{ 
      backgroundImage: `url("images/bannerclient.png")` 
    }}>
        {/* <div className="row">
          <div className="col-lg-12  col-md-12 col-xs-12 ">
            <div className="sec-title3 text-center mb-35">
              <span className="sub-title">OUR CLIENTS</span>
              <h2 className="title pb-25 white-color">
                Trusted By The World's Best Companies
              </h2>
              <div className="heading-border-line"></div>
            </div>
          </div>
        </div>

        <div>
          <AliceCarousel
            // autoPlay
            autoPlayStrategy="none"
            // autoPlayInterval={3000}
            // animationDuration={3000}
            animationType="fadeout"
            infinite
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Fire;
