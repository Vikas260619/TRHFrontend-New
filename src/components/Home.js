import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Expertteam from "./Expertteam";
import Testimonial from "./Testimonial";

function Home() {
  const list = [
    {
      item: "Cloud Services",
      image: "images/slider1.jpg",
      descp:"We've been offering innovative cloud solutions to people in need of IT innovation and support.",
    },
    {
      item: "Web Development",
      image: "images/slider2.jpg",
      descp: "With a broad selection of web application services, we guarantee to best meet all of your business needs.",
    },
    {
      item: "Mobile App Development",
      image: "images/slider3.jpg",
      descp: "We provide complete application design, integration, and management services.",
    },
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items1 = [
    <div className="item" data-value="1">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services1.jpg" alt="" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/">Cloud Services</a>
          </h3>
          <div className="desc">
            Our cloud services provide the options of availing remote services
            via cloud computing servers.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services2.jpg" alt="" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/">Web Development</a>
          </h3>
          <div className="desc">
            We provide designing, coding, programming and modifying websites,
            from layout to function.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services3.jpg" alt="" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/">AWS Services</a>
          </h3>
          <div className="desc">
            Build, Deploy, and Manage Websites, Apps or Processes On AWS Secure,
            Reliable Network.
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services4.jpg" alt="" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/">Web Designing</a>
          </h3>
          <div className="desc">
            Want to build your product with a team that establishes a clear
            design process, meets deadlines,and delivers?{" "}
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services5.jpg" alt="" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/">Database Management</a>
          </h3>
          <div className="desc">
            In today’s business landscape, every CXO is in theprocess or
            planning on implementing CASS– Cloud,Analytics
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="service-wrap">
        <div className="image-part">
          <img src="images/services6.jpg" alt="" />
        </div>
        <div className="content-part">
          <h3 className="title">
            <a href="/">Cyber Security</a>
          </h3>
          <div className="desc">
            In today’s business landscape, every CXO is in theprocess or
            planning on implementing CASS– Cloud,Analytics
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <AliceCarousel autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="fadeout"
        infinite>
        {list.map((items) => (
          <>
            <div
              id="rs-slider"
              className="rs-slider slider3 rs-slider-style3"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div className="bend niceties">
                <div id="nivoSlider" className="slides"></div>
                <img src={items.image} alt="" title="#slide-1" />
              </div>
              <div className="wave"></div>
              <div id="slide-1" className="slider-direction">
                <div className="content-part">
                  <div className="container">
                    <div className="slider-des">
                      <div className="sl-subtitle">{items.item}</div>
                      <h1 className="sl-title">
                       {items.descp}
                      </h1>
                    </div>
                    <div className="slider-bottom">
                      <a className="readon blue-slide" href="/services">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </AliceCarousel>
      <div
        className="rs-about style4 pt-25 pb-95"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <div className="animat-rat">
            <img src="images/sib-1.png" className="rat-sib" alt="" />
            <img src="images/round-2.png" className="rat-round" alt="" />
            <img src="images/ract.png" className="rat-ract" alt="" />
            <img src="images/squar.png" className="rat-squar1" alt="" />
            <img src="images/squar.png" className="rat-squar2" alt="" />
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <div className="sec-title3 text-center ">
                <span className="sub-title">ABOUT US</span>
                <h2 className="title ">
                  We Are All In One IT Solution & Technology Company
                </h2>
                <div className="heading-border-line"></div>
              </div>
              <p className="pt-50 text-center para21">
                Therapidhire is a software development and IT outsourcing
                company based in India. Therapidhire takes an energetic,
                collaborative strategy to create and customize solutions across
                the digital value chain. We aim to create a network of
                businesses that help each other to acquire more customers.
                Giving a better idea of making your online presence better,
                Therapidhire company helps you with quality service at minimal
                prices and complimentary with great satisfaction.
              </p>

              <div className="btn-part text-center" style={{ display: "none" }}>
                <a className="readon2" href="">
                  Learn More <div className="btn-arrow"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rs-counter style1 counter-home5-style client23 bg25  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  col-md-6 ">
              <div className="sec-title3 text-center mb-35">
                <span className="sub-title">OUR CLIENTS</span>
                <h2 className="title pb-25 white-color">
                  Trusted By The World's Best Companies
                </h2>
                <div className="heading-border-line"></div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-3 col-md-6  col-6 md-mb-30 ">
              <div className="counter-area">
                <div className="counter-list mb-25">
                  <div className="counter-icon">
                    <img src="images/client1.png" alt="Counter" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  col-6 md-mb-30">
              <div className="counter-area">
                <div className="counter-list mb-25">
                  <div className="counter-icon">
                    <img src="images/client2.png" alt="Counter" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  col-6 sm-mb-30">
              <div className="counter-area">
                <div className="counter-list mb-25">
                  <div className="counter-icon">
                    <img src="images/client3.png" alt="Counter" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  col-6">
              <div className="counter-area">
                <div className="counter-list mb-25">
                  <div className="counter-icon">
                    <img src="images/client4.png" alt="Counter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rs-services" className="rs-services style2 bg11 pt-95 pb-25 ">
        <div className="container">
        <div className="row">
            <div className="col-lg-12  col-md-6 ">
              <div className="sec-title3 text-center mb-35">
                <span className="sub-title">OUR SERVICES</span>
                <h2 className="title pb-25 ">
                We provide industry-specific and need-based services, which
    allows us to deliver tailor-made solutions. We serve customers
    ranging from small individual startups to big corporate houses.
                </h2>
                <div className="heading-border-line"></div>
              </div>
            </div>
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
      </div>
      <Testimonial />
      <Expertteam />
    </div>
  );
}

export default Home;
