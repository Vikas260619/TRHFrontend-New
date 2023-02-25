import React from "react";
import Common from "../Container/Common.js";

import "../rapidcss/Services.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Advancedtech() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/pradeepjaiswal.jpg" alt="pradeepjaiswal" />
        </div>
        <ul className="rating">
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
        </ul>
        <div className="author-detail">
          <div className="desc">
            We thank TheRapidHire for the wonderful job in helping us develop
            our program. Everyone was professional, excellent and hard working.
            Thanks to them, we were able to achieve our goal on time, and we
            look forward to continue working with them in the future.
          </div>
          <h4 className="name">Pradeep Jaiswal</h4>
          <span className="designation">Director - Sales, Softude</span>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/nandakumar.jpg" alt="nandakumar" />
        </div>
        <ul className="rating">
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
        </ul>
        <div className="author-detail">
          <div className="desc">
            A successful project always requires the best team. Together with
            Therapidhire, we at Softing have already been able to work on
            various projects with highly professional, flexible, and motivated
            people who deliver first-class results in complex environments.{" "}
          </div>
          <h4 className="name">Nanda Kumar</h4>
          <span className="designation">V.P.Sales, Mistminds </span>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/ManjunathRao.jpg" alt="ManjunathRao" />
        </div>
        <ul className="rating">
          <li>
            <i className="fa fa-star"></i>
          </li>``
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
          <li>
            <i className="fa fa-star"></i>
          </li>
        </ul>
        <div className="author-detail">
          <div className="desc">
            We would like to express our satisfaction on the co-operation
            regarding the development of our web application. TheRapidHire and
            the development team did a very professional job. We are satisfied
            with the solution given to us and with the communication flow
            through the project.
          </div>
          <h4 className="name"> Manjunath Rao</h4>
          <span className="designation">HR Manager, Kloud9</span>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="offwrap">
      <div className="main-content ">
        <Common
          name="Advanced Tech"
          description="through its vision and imagination, strengthened by its continuous pursuit for excellence has brought under its umbrella, well proven, state of art technologies time tested to fulfill the stringent needs of Indian Industry."
        />

        <div class="container-fluid mt-5">
          <section className="cloudapplication pb-3">
            <div className="sec-title3"></div>
            <div className="container">
              <div className="row pt-5">
                <div className="col-lg-6 image">
                  <img
                    className="imgset"
                    src="images/Advance.jpg"
                    alt="rqc"
                  />
                </div>

                <div className="col-lg-6 pt-3 cloudsection">
                  <h3 className="section-heading pb-10">
                    Achieving your business goals with the{" "}
                    <span className="text-red"> latest technologies!</span>{" "}
                  </h3>
                  <p className="section-paragraph">
                  To increase the performance of your business you will need the latest technologies as the traditional ones can not be used for the modern day solutions. We help businesses to manage the latest technologies and to increase their productivity by automating their business processes.
                  </p>
                  <p className="section-paragraph">
                  Our advanced technology experts and consultants would help you to identify the latest technologies which would be beneficial for the rapid growth of your company. We understand what will be the best suited technology for your business to reach its ultimate goal.  So, get your technologies updated now.   
                  </p>
                  <div className="pt-20"></div>
                </div>
              </div>
            </div>

            <div className="container pt-5 ">
              <h3 className="sectioncloud">
                Our key Cloud
                <br />
                <span className="text-blue">Advanced Technology Services</span>
              </h3>
                 <div className="row">
                <div className="col-lg-4">
                  <div className="single-services">
                    <i className="fa fa-desktop "></i>
                    <h3>AI/ML</h3>
                    <p>
                    We aim to provide best AI/ML solutions for your business. With our experts we ensure the deployment of AI services to boost performance.

                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-services">
                    <i className="fa fa-desktop "></i>

                    <h3>Low code development</h3>
                    <p>
                    Save your cost and time with our low code development solutions and get great applications and interfaces designed by our experts.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 ">
                  <div className="single-services">
                    <i className="fa fa-desktop "></i>
                    <h3>RPA/IPA</h3>
                    <p>
                    We promise to provide AI based RPA/IPA solutions which are based on advanced automation and robotics.


                    </p>
                  </div>
                </div>

                <div className="col-lg-4 ">
                  <div className="single-services">
                    <i className="fa fa-desktop "></i>
                    <h3>Chatbots</h3>
                    <p>
We provide digital technology services to create interactive text based or speech based chatbots which will simulate human conversation.

                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="single-services">
                    <i className="fa fa-desktop "></i>
                    <h3>Data Analytics</h3>
                    <p>
                    Our Business Intelligence solutions help to provide meaningful insights about the companies and its customers by analyzing the data and visualizing it skillfully.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="single-services">
                    <i className="fa fa-desktop "></i>
                    <h3>IoT</h3>
                    <p>
                    Get access to newer IOT and related technologies to

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className=" cloudcontainer pt-5 pb-5">
            <div className=" sec-title3">
              <div className="spanpage">
                <div className="container">
                  <span className=" empower">
                    Helping You with the practical approach
                  </span>
                  <p className="paracloud empower ">
                  Practical knowledge aids us in acquiring the precise procedures that will become our tools of the trade.It is far more relevant to our daily activities. To thrive in today’s competitive environment, practical knowledge and implementation skills are required
 

                  </p>
                  <a href="/contact-us" class="getconnected">
                    Get connected now
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="container pt-5">

            
            <h3 className="sectioncloud">
              Maximizing digital transformation with
              <br />
              <span className="text-blue">
                {" "}
                advanced technology consultancy{" "}
              </span>
              business
            </h3>
            <p className="paracloud">
            Digital transformation is the incorporation of computer-based technologies into an organization's products, processes and strategies. Organizations undertake digital transformation to better engage and serve their workforce and customers and thus improve their ability to compete.

            </p>
          </div>


          
          <div className="rs-contact pb-5 main-home">
            <div className="contact-icons-style box-address  ">
              <div className="container">
                
                <div className="row">
                  
                  <div className="col-lg-4 col-md-6 col-sm-6 md-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon container">
                          <h2 className="title">Competitive pricing</h2>
                          <p className="services-txt">
                          Flexible match and pricing model based on the scope and nature of the consulting services we offer.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 pb-3 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon"></div>
                        <h2 className="title">Clear value proposition</h2>
                        <p className="services-txt">
                        a clear statement that explains the benefits of your product, how it solves customers' problems, why it is different from the rest, and why customer should buy it. 

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon"></div>
                        <h2 className="title">Assisted transformation</h2>
                        <p className="services-txt">
                        In-depth assistance for tech enablement. Leverage our center of excellence for advanced tech to achieve optimum outcomes.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rs-testimonial pt-5 pb-5 style1">
              <div className="secondary-bg2 left-radius relative pt-133 pb-133 md-pt-70 md-pb-70">
                <div className="container">
                  <div className="sec-title3 text-center text88 ">
                    <div className="sub-title secondary-color ">
                      Testimonials
                    </div>
                    <h2 className="title white-color">Customer Reviews</h2>
                    <div className="heading-border-line "></div>
                    <br />
                    <br />
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
          </div>

          <div className="rs-counter pt-5 style1 counter-home5-style client23 bg26  ">
            <div className="row">
              <div className="container">
                <div className="col-lg-12  col-md-12 col-xs-12 ">
                  <div className="sec-title3 mb-35">
                    <span className="subcloud">
                      Be the Next Tech-driven Enterprise
                    </span>

                    <p className="paracloud">
                    Our technology-driven solutions and processes make us leaders in the markets of today and help us to shape the markets of tomorrow.   

                    </p>

                    <a href="/contact-us" class="blue_button">
                    Book a free consulation
                  </a>
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

export default Advancedtech;
