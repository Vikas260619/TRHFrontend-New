import React from "react";
import Marquee from "react-fast-marquee";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Helmet } from "react-helmet";
import ReactWhatsapp from "react-whatsapp";

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
            <img src="images/clientfire1.png" alt="clientfire1" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire2.png" alt="clientfire2" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire3.png" alt="clientfire3" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire4.png" alt="clientfire4" />
          </div>
        </div>
      </div>
    </div>,
    // <div className="item" data-value="5">
    //   <div className="counter-area">
    //     <div className="counter-list mb-25">
    //       <div className="counter-icon">
    //         <img src="images/clientfire5.png" alt="cloud9" />
    //       </div>
    //     </div>
    //   </div>
    // </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire6.png" alt="clientfire5" />
          </div>
        </div>
      </div>
    </div>,

    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire7.png" alt="clientfire7" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire8.png" alt="clientfire8" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire9.png" alt="clientfire9" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire10.png" alt="clientfire10" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/clientfire11.png" alt="clientfire11" />
          </div>
        </div>
      </div>
    </div>,
  ];

  return (

<div>  

  <Helmet>

  <title>
  Expert Fire Safety Professionals | Installation, Maintenance & Training Services | Contact Us Today
        </title>

        <meta
          name="description"
          content="  Reliable and effective fire protection solutions for your
          peace of mind - choose our fire fighting installation
          systems."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:1, max-video-preview:1"
        />
        <meta
          name="image"
          content="https://www.therapidhire.com/images/clientfire2.png"
        />
        <meta
          itemprop="name"
          content="Expert Fire Safety Professionals | Installation, Maintenance & Training Services | Contact Us Today
          "
        />
        <meta
          itemprop="description"
          content=" Reliable and effective fire protection solutions for your
          peace of mind - choose our fire fighting installation
          systems."
        />
        <meta
          itemprop="image"
          content="https://www.therapidhire.com/images/clientfire2.png"
        />
     


  </Helmet>
    <div classNameName="py-5">
      
      <div
        id="rs-slider"
        className="rs-slider slider3 rs-slider-style3"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="bend niceties">
          <img src="images/Firesafety1.jpg" alt="Firesafety" title="" />
        </div>
      </div>
      <div>
        <section className="container pt-3 mb-3">
          <h2
            className="h3 block-title text-center py-4 font-weight-bold"
            style={{ fontWeight: "700" }}
          >
            FEATURED SERVICES
          </h2>
          <div className="row pt-5 mt-30">
            <div className="col-lg-4 col-sm-6 mb-30 pb-5">
              <a className="card" href="/installation">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <a href="/installation">
                    <i className="fa fa-fire fa-3x head-icon"></i>
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">
                    Fire Fighting System Installation
                  </h3>
                  <p className="card-text text-sm">
                    Reliable and effective fire protection solutions for your
                    peace of mind - choose our fire fighting installation
                    systems.
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
              <a className="card" href="/maintenance">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <a href="/maintenance">
                    <i className="fa fa-wrench fa-3x head-icon"></i>
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Maintenance/AMC</h3>
                  <p className="card-text text-sm">
                    Keep your fire protection systems in top condition with our
                    comprehensive maintenance and AMC services.
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
              <a className="card" href="/testing">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <a href="/testing">
                    <i className="fa fa-check fa-3x head-icon"></i>
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">
                    Testing Of Fire Fighting System
                  </h3>
                  <p className="card-text text-sm">
                    Our rigorous testing procedures ensure your fire protection
                    system is fully operational when you need it the most.
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
              <a className="card" href="/trainig">
                <div
                  className="box-shadow bg-white rounded-circle mx-auto text-center"
                  style={{ width: "90px", height: "90px", margintop: "-45px" }}
                >
                  <a href="/trainig">
                    <i className="fa fa-plus fa-3x head-icon"></i>
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title pt-1">Trainings</h3>
                  <p className="card-text text-sm">
                    Equip yourself with the knowledge and skills needed to
                    prevent and manage fire emergencies through our expert
                    training.
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
                    Get peace of mind knowing that your fire risks have been
                    identified and managed with our comprehensive fire risk
                    assessment services.{" "}
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
                  </span>
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
                    Don't wait until it's too late. Schedule a fire safety audit
                    with our expert team today and ensure that your business is
                    fully protected.{" "}
                  </p>
                  <span className="text-sm text-uppercase font-weight-bold">
                    Learn More&nbsp;<i className="fe-icon-arrow-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="rs-counter style1 counter-home5-style client23 bg26  ">
        <div className="container">
          <div className="row">
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
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={3000}
              animationDuration={3000}
              animationType="fadeout"
              infinite
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        </div>
      </div>
    </div>


<div class="floating_btn">
    <a target="_blank" href="https://wa.me/">
      <div class="contact_icon">
      <ReactWhatsapp number="+91-9907657026" message="Hello, May I Help You !" class="whatsappbuttn"> <i className="fa fa-whatsapp"></i></ReactWhatsapp>

      </div>
    </a>
    <p class="text_icon">Chat with us</p>
  </div>
    </div>

  );
}

export default Fire;
