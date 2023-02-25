// import React from 'react'

// const CardTeam = (props) => {
//   return (
//     <div className="our-team">
//     <div className="pic">
//       <img src={props.imgsrc} alt="cloudservices" />
//     </div>
//     <h3 className="title">{props.title}</h3>
//     <span className="post">{props.description}</span>
//   </div>
//   )
// }

// export default CardTeam



import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";



function Servicescommon(props) {

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
   
      <div class="container-fluid mt-5">
        <section className="cloudapplication pb-3">
          <div className="sec-title3"></div>
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-6 image">
                <img
                  className="imgset"
                  src={props.imgsrc}                  
                  alt="rqc"
                />
              </div>

              <div className="col-lg-6 pt-3 cloudsection">
                <h3 className="section-heading pb-10">
                  {props.title}{" "}
                  <span className="text-red">{props.title2}</span>{" "}
                
                </h3>
                <p className="section-paragraph">
                {props.paragraph}
                </p>
                <p className="section-paragraph">
                {props.paragraph2}
                </p>
                <div className="pt-20"></div>
              </div>
            </div>
          </div>

          <div className="container pt-5 ">
            <h3 className="sectioncloud">
            {props.cloudtitle}
              <br />
              <span className="text-blue">
              {props.cloudtitle2}              </span>
            </h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-services">
                  <i className="fa fa-desktop "></i>
                  <h3>{props.cardtitle}</h3>
                  <p>
                   {props.carddesc}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-services">
                  <i className="fa fa-desktop "></i>

                  <h3>{props.cardtitle2}</h3>
                  <p>
                  {props.carddesc2}

                  </p>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className="single-services">
                  <i className="fa fa-desktop "></i>
                  <h3>{props.cardtitle3}</h3>
                  <p>
                  {props.carddesc3}
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
                {props.pagetitle}
                </span>
                <p className="paracloud empower ">
               {props.pagedesc}
                </p>
                <a href="/contact-us" class="getconnected">
                  {props.pagebutton}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <h3 className="sectioncloud">
{props.sertitle}            <br />
            <span className="text-blue">{props.sertitle2}</span>
           
          </h3>
          <p className="paracloud">
           {props.serpara}
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
                        <h2 className="title">{props.sercardtitle}</h2>
                        <p className="services-txt">
                         {props.sercardpara}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 pb-3 col-md-6 col-sm-6 xs-mb-30">
                  <div className="contact-item">
                    <div className="content-text">
                      <div className="contact-icon"></div>
                      <h2 className="title">{props.sercardtitle2}</h2>
                      <p className="services-txt">
                      {props.sercardpara2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 xs-mb-30">
                  <div className="contact-item">
                    <div className="content-text">
                      <div className="contact-icon"></div>
                      <h2 className="title">{props.sercardtitle3}</h2>
                      <p className="services-txt">
                      {props.sercardpara3}

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
                  <span className="subcloud">{props.contenttitle}</span>

                  <p className="paracloud">
                   {props.contentdesc}
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
  </div>  )
}

export default Servicescommon