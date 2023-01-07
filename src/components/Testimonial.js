import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Testimonial() {
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
    <div>
      <div className="rs-testimonial style1">
        <div className="secondary-bg2 left-radius relative pt-133 pb-133 md-pt-70 md-pb-70">
          <div className="container">
            <div className="sec-title3 text-center text88 ">
              <div className="sub-title secondary-color ">Testimonials</div>
              <h2 className="title white-color">Clients Reviews</h2>
              <div className="heading-border-line "></div>
            </div>
            <br />
            <br />
            <div>
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
            <div className="pattern-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
