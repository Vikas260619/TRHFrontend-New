import React from "react";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Helmet } from "react-helmet";

function Aboutus() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <div className="about-box-inner">
        <div className="flip-box-wrap">
          <div className="front-part">
            <div className="front-content-part">
              <div className="front-icon-part">
                <div className="icon-part">
                  <img src="images/rapid1.png" alt="rapid1" />
                </div>
              </div>
              <div className="front-title-part">
                <h3 className="title">
                  <a href="/about">Vision</a>
                </h3>
              </div>
              <div className="front-desc-part">
                <p>
                  TheRapidHire Pvt Ltd. will inspire its employees to be the
                  best they can be. We will engage in sustainable practices and
                  anticipate the needs of our customers. Our vision is to bring
                  our employees into the 21st century through innovation and
                  modern technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="about-box-inner">
        <div className="flip-box-wrap">
          <div className="front-part">
            <div className="front-content-part">
              <div className="front-icon-part">
                <div className="icon-part">
                  <img src="images/rapid2.png" alt="rapid2" />
                </div>
              </div>
              <div className="front-title-part">
                <h3 className="title">
                  <a href="/about">Mission</a>
                </h3>
              </div>
              <div className="front-desc-part">
                <p>
                  Our mission is to provide a supercilious support to our
                  customer through our service. We are always aware of new
                  trends in the field of security and are committed to applying
                  it in our solution. We always improvise our services by
                  surveying the interest of our customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="about-box-inner">
        <div className="flip-box-wrap">
          <div className="front-part">
            <div className="front-content-part">
              <div className="front-icon-part">
                <div className="icon-part">
                  <img src="images/rapid3.png" alt="rapid3" />
                </div>
              </div>
              <div className="front-title-part">
                <h3 className="title">
                  <a href="/about">Values</a>
                </h3>
              </div>
              <div className="front-desc-part">
                <p>
                  Having clear company values helps us ensure that all our
                  employees are working towards the same goals. Our core values
                  support the company's vision and shape its culture. That's why
                  our business decision should be aligned with these values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];
  return (
    <div>
      <Helmet>
        <title>About us - TheRapidHire</title>

        <meta
          name="description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all time"

        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          rel="canonical" href="https://therapidhire.com/aboutus/" /> 

        
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TheRapidHire - Software Development|IT outsourcing company"
        />
        <meta property="og:url" content="https://therapidhire.com/aboutus" />
        <meta
          property="og:image"
          content="https://therapidhire.com/images/ser3.png"
        />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:description"
          content="TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TheRapidHire - Software Development|IT outsourcing company"
        />
        <meta name="twitter:site" content="@therapidhire" />
        <meta
          name="twitter:description"
          content="TheRapidHire is a CMMI Level-5 software development, IT outsourcing, and HR company. We are a CMMI 5-level certified organization providing quality products and professionals on a contract basis."
        />
        <meta
          name="twitter:image"
          content="https://therapidhire.com/images/ser3.png"
        />
        <meta name="twitter:image:alt" content="therapidhire" />
      </Helmet>

      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                About Us
                <span className="watermark">About</span>
              </h1>
              <span className="sub-text">
                At TheRapidHire, we believe in hard work and transparency. We
                encourage professionalism and clarity of thought at all times.{" "}
              </span>
            </div>
          </div>
        </div>

        <div
          className="rs-services style5 bg14 pt-95 pb-95"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="container">
            <div className="animat-rat">
              <img src="images/sib-1.png" className="rat-sib" alt="icon1" />
              <img src="images/round-2.png" className="rat-round" alt="icon2" />
              <img src="images/ract.png" className="rat-ract" alt="icon3" />
              <img src="images/squar.png" className="rat-squar1" alt="icon4" />
              <img src="images/squar.png" className="rat-squar2" alt="icon5" />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title3 text-center">
                  <span className="sub-title">WHO WE ARE</span>
                  <h2 className="title">
                    Your Trusted Partner For All IT Solutions
                  </h2>
                  <div className="heading-border-line"></div>
                </div>
                <p className="pt-50 text-center">
                  TheRapidHire is a software development and IT outsourcing
                  company based in India. TheRapidHire takes an energetic,
                  collaborative strategy to create and customize solutions
                  across the digital value chain. We aim to create a network of
                  businesses that help each other to acquire more customers.
                  Giving a better idea of making your online presence better,
                  TheRapidHire company helps you with quality service at minimal
                  prices and complimentary with great satisfaction.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
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
            <div className="about-circle-shape">
              <img src="images/about-circle.png" alt="imagecircle" />
            </div>
          </div>
        </div>

        <div className="choose-area pt-95 pb-95">
          <div className="container">
            <div className="sec-title3 text-center">
              <span className="sub-title">WHY CHOOSE US</span>
              <h2 className="title">
                We help you to increase your product through solutions.
              </h2>
              <div className="heading-border-line"></div>
            </div>
            <br />
            <br />

            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <a href="/about">
                      <img src="images/choose-1.png" alt="imagechoose" />
                    </a>
                  </div>
                  <div className="choose-content">
                    <h3>
                      <a href="/about">Client Oriented</a>
                    </h3>
                    <p>
                      Being customer-oriented is an approach in which, rather
                      than solving for the business’s needs, our company solves
                      the customer’s problems first.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <a href="/about">
                      <img src="images/choose-2.png" alt="choose2" />
                    </a>
                  </div>
                  <div className="choose-content">
                    <h3>
                      <a href="/about">Creativity</a>
                    </h3>
                    <p>
                      Our Creative thinking can also lead to innovation that
                      will grow our business through increased productivity.
                      When we “focus on what things we can streamline and what
                      things we need to cut out”
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <a href="/about">
                      <img src="images/choose-3.png" alt="choose3" />
                    </a>
                  </div>
                  <div className="choose-content">
                    <h3>
                      <a href="/about">Meeting Deadlines</a>
                    </h3>
                    <p>
                      Meeting Deadlines help us to collaborate toward achieving
                      a shared goal, and to keep complex,we work multi stage
                      projects on track. we set all expectations
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <a href="/about">
                      <img src="images/choose-4.png" alt="choose4" />
                    </a>
                  </div>
                  <div className="choose-content">
                    <h3>
                      <a href="/about">A Plan for Success</a>
                    </h3>
                    <p>
                      Our Planning helps to critically assess the goal to see in
                      realistic. It facilitates decision making and allows
                      setting a time frame by predicting when our company can
                      achieve its goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
