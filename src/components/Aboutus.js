import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Helmet } from "react-helmet";
import MetaTags from "react-meta-tags";
import OpenGraph from "./OpenGraph";

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
                  <img src="images/rapid1.webp" alt="website designing" />
                </div>
              </div>
              <div className="front-title-part">
                <h3 className="title">Vision</h3>
              </div>
              <div className="front-desc-part">
                <p>
                  TheRapidHire Pvt Ltd. will inspire it's employees to be the
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
                  <img src="images/rapid2.webp" alt="cyber security" />
                </div>
              </div>
              <div className="front-title-part">
                <h3 className="title">Mission</h3>
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
                  <img src="images/rapid3.webp" alt="reactjs" />
                </div>
              </div>
              <div className="front-title-part">
                <h3 className="title">Values</h3>
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
<OpenGraph
 title="About us - TheRapidHire|CMMI Level 5|Software|Website Development"
 description="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all time "
 image="https://www.therapidhire.com/images/software.jpg"
 url="https://therapidhire.com/aboutus"
/>
      {/* test code starts */}
      {/* <Helmet>
         </Helmet> */}
      {/* test code ends */}
      {/* <Helmet>
        <title>
          About us - TheRapidHire|CMMI Level 5|Software|Website Development
        </title>

        <meta
          name="description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all time"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:1, max-video-preview:1"
        />
        <link
          rel="canonical"
          href="https://www.therapidhire.com/aboutus"
          data-react-helmet="true"
        ></link>
      </Helmet>
      <MetaTags>         

        <meta
          name="fb:app_id"
          content="1369882117133030"
          data-react-helmet="true"
        />

        <meta
          property="og:url"
          content="https://www.therapidhire.com/aboutus"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About us - TheRapidHire|CMMI Level 5|Software|Website Development"
        />
        <meta
          property="og:description"
          content="At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all time"
        />
        <meta
          property="og:image"
          content="https://www.therapidhire.com/images/software.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:alt" content="therapidhire" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@therapidhire_"/>
        <meta
          property="twitter:url"
          content="https://www.therapidhire.com/aboutus"
        />
        <meta
          name="twitter:title"
          content=" About us - TheRapidHire|CMMI Level 5|Software|Website Development"
        />
        <meta
          name="twitter:description"
          content=" At TheRapidHire, we believe in hard work and transparency. We encourage professionalism and clarity of thought at all times"
        />
        <meta
          name="twitter:image"
          content="https://www.therapidhire.com/images/software.jpg"
        />
         </MetaTags> */}
      ``
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">About Us</h1>
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
              <img
                src="images/sib-1.webp"
                className="rat-sib"
                alt="website development company in indore"
              />
              <img
                src="images/round-2.webp"
                className="rat-round"
                alt="python"
              />
              <img src="images/ract.webp" className="rat-ract" alt="angular" />
              <img src="images/squar.png" className="rat-squar1" alt="php" />
              <img
                src="images/squar.png"
                className="rat-squar2"
                alt="payroll management"
              />
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title3 text-center">
                  <span className="sub-title">WHO WE ARE</span>
                  <h2 className="title">
                    Your Trustworthy IT Solutions Partner
                  </h2>
                  <div className="heading-border-line"></div>
                </div>
                <p className="pt-50 text-center">
                  TheRapidHire Pvt. Ltd. is a CMMI Level-5 software development,
                  IT outsourcing, and human resource consulting firm. We are a
                  CMMI 5-level certified and acclaimed organization that
                  provides quality products and professionals on a contract
                  basis. With a mission to deliver quality services at a
                  reasonable cost, TheRapidHire takes an agile, collaborative
                  approach to create customized solutions across the digital
                  value chain. Our deep expertise in web development and
                  application development, cloud services, database management,
                  cyber security, and payroll management transforms your ideas
                  into reality. We aim to create a network of businesses that
                  help each other acquire more customers. TheRapidHire company
                  helps you with quality service at low prices and great
                  satisfaction, giving you a better idea of how to improve your
                  online presence.
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
                infinite
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </div>
            <div className="about-circle-shape">
              <img src="images/about-circle.webp" alt="cmmi level" />
            </div>
          </div>
        </div>

        <div className="choose-area pt-95 pb-95">
          <div className="container">
            <div className="sec-title3 text-center">
              <span className="sub-title">WHY CHOOSE US</span>
              <h3 className="title">
                We help you to increase your product through solutions.
              </h3>
              <div className="heading-border-line"></div>
            </div>
            <br />
            <br />

            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <img src="images/choose-1.png" alt="business" />
                  </div>
                  <div className="choose-content">
                    <h4 className="headingcolor">Client Oriented</h4>
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
                    <img src="images/choose-2.png" alt="creative" />
                  </div>
                  <div className="choose-content">
                    <h4 className="headingcolor">Creativity</h4>
                    <p>
                      Our creative thinking can also lead to innovation that
                      will grow our business through increased productivity.
                      When we focus on what things we can streamline and what
                      things we need to cut out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <img src="images/choose-3.png" alt="meeting deadlines" />
                  </div>
                  <div className="choose-content">
                    <h4 className="headingcolor">Meeting Deadlines</h4>
                    <p>
                      Meeting deadlines help us to collaborate toward achieving
                      a shared goal, and to keep complex, we work multi stage
                      projects on track. We set all expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-choose-card">
                  <div className="choose-image">
                    <img src="images/choose-4.webp" alt="planning" />
                  </div>
                  <div className="choose-content">
                    <h4 className="headingcolor">A Plan for Success</h4>
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
