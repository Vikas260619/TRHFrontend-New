import { baseURL } from "./Basepath.js";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      axios
        .post(baseURL + "SubScrition/UserSubscription", { email: email })
        .then((res) => {
          toast(res.data.message);

          setTimeout(() => {
            setEmail("");
          }, 500);
        })
        .catch((err) => toast(err.response.data.message));
    } else {
      toast("Please fill the Email field");
    }
  };

  return (
    <div>
      <footer
        id="rs-footer"
        className="rs-footer style1 footer-home3-style"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="icon-six"
          style={{ backgroundImage: "url(images/icon-6.png)" }}
        ></div>

        <div
          className="icon-seven"
          style={{ backgroundImage: "url(images/icon-7.png)" }}
        ></div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-12 md-mb-10">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="site-map">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/technology">Technology</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                  {/* <li>
                    <a href="/Pricing">Pricing</a>
                  </li> */}
                  <li>
                    <a href="/sitemap">Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 md-mb-10 pl-55 md-pl-15">
                <h3 className="footer-title">General Links</h3>
                <ul className="site-map">
                  <li>
                    <a href="termsofservices">Terms of Services</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/letsconnect">Contact Us</a>
                  </li>
                  <li>
                  <a href="/fire">TRH Fire Safety Solution</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 md-mb-10">
                <h3 className="footer-title">Contact Info</h3>
                <ul className="address-widget">
                  <li>
                    <a  target="_blank" href="https://www.google.com/maps/place/TheRapidHire+-Software+,Website+%26+Mobile+App+Development+Company+in+India,+USA/@22.7528269,75.8651923,17z/data=!3m1!4b1!4m5!3m4!1s0x3962e32b2894590f:0x4e73ebc1261cc50!8m2!3d22.752822!4d75.867381">
                      <i className="fa fa-map-marker"></i></a>
                    <div className="desc">
                      51, Electronic Complex, Pardesipura,
                      <br />
                      Indore, Madhya Pradesh 452007
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <div className="desc">
                      <a href="tel:+1 (917) 628 2406">+0731 426 8367</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <div className="desc">
                      <a href="mailto:info@therapidhire.com">
                        info@therapidhire.com
                      </a>
                    </div>
                  </li>
                </ul>                                              
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h3 className="footer-title">Newsletter</h3>
                <p className="widget-desc white-color">
                  Stay up to update with our latest news and products.
                </p>
                <br />
                <div class="contentsubs">
                  <form class="subscription">
                    <input
                      class="add-email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </form>
                </div>
                <button className="subbtn" onClick={(e) => handleSubmit(e)}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p>©2022 TheRapidHire Pvt. Ltd . All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
