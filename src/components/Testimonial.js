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
          <img src="images/testimonial1.png" alt="" />
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
            "Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups."
          </div>
          <h4 className="name">Nathan Hirsch</h4>
          <span className="designation">Manager</span>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/testimonial2.png" alt="" />
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
            "Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups."
          </div>
          <h4 className="name">Piter More</h4>
          <span className="designation">Business Planner</span>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/testimonial1.png" alt="" />
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
            "Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups."
          </div>
          <h4 className="name">Devis Polo</h4>
          <span className="designation">CEO</span>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/testimonial1.png" alt="" />
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
            "Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups."
          </div>
          <h4 className="name">Jhon Peter</h4>
          <span className="designation">Manager</span>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="item text-center">
        <div className="testi-img">
          <img src="images/testimonial2.png" alt="" />
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
            "Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups."
          </div>
          <h4 className="name">Jeson Thomas</h4>
          <span className="designation">Consultant</span>
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
              <h2 className="title white-color">Customer Reviews</h2>
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
               animationType="fadeout"
               infinite
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </div>
            <div className="pattern-img">
              <img className="img2 common" src="images/pattern2.png" alt="" />
              <img className="img3 common" src="images/pattern3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
