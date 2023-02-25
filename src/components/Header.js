import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../rapidcss/Header.css";

import { useNavigate } from "react-router-dom";
function Header() {
  const Navigate = useNavigate();
  const [token, setToken] = useState("");
  const logoutBtn = () => {
    localStorage.clear();
    toast("Logout SuccessFull");
    setTimeout(() => {
      Navigate("/login");
      window.location.reload();
    }, 3000);
  };

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("Token"));
    setToken(val);
  }, []);

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a className="navbar-brand ps-3" href="/">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="TRH" />
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-3 mb-lg-0 ">
          <li class="nav-item dropdown dropdown-mega position-static has-megamenu">
              <a
                class="nav-link dropdown-toggle  "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {" "}
                About us{" "}
              </a>
              <div class="dropdown-menu  megamenu ">
                <div class="mega-content px-4">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/aboutus">
                          {" "}
                          <h6 class="title">About TRH</h6>
                        </a>

                        <ul class="list-unstyled ">
                          <li>
                            <p class="para">
                              It’s not about us, it’s about your business and
                              how we can help you grow it.
                            </p>{" "}
                            <br />
                            <br />
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/culture">
                          {" "}
                          <h6 class="title">Culture</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Join our global team to transform what’s next.
                              Immerse yourself in an atmosphere of innovative
                              solutions and build a career with resounding
                              impact.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/leadership">
                          {" "}
                          <h6 class="title">Leadership</h6>
                        </a>

                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              We're proud to be a hybrid team. Analysts,
                              consultants, data scientists, creators and
                              strategists.
                            </p>{" "}
                            <br />
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/team">
                          {" "}
                          <h6 class="title">Team</h6>
                        </a>

                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              We're proud to be a hybrid team. Analysts,
                              consultants, data scientists, creators and
                              strategists.
                            </p>{" "}
                            <br />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-mega position-static has-megamenu">
              <div
                class="nav-link dropdown-toggle  "
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {" "}
                Technology Services{" "}
              </div>
              <div class="dropdown-menu  megamenu ">
                <div class="mega-content px-4">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/consultingservices">
                          {" "}
                          <h6 class="title">Consulting Services</h6>
                        </a>
                        <ul class="list-unstyled ">
                          <li>
                            <a href="/cloudapplication">
                              Cloud Application Development
                            </a>
                          </li>
                          <li>
                            <a href="/advancetech">Advanced Tech</a>
                          </li>
                          <li>
                            <a href="/userexperiencedesign">
                              User Experience Design
                            </a>
                          </li>
                          <li>
                            <a href="/digitalacceleration">
                              Digital Acceleration
                            </a>
                          </li>
                          <li>
                            <a href="/itoutsourcing">
                              IT Outsourcing
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/mobileappdevelopment">
                          {" "}
                          <h6 class="title">Mobile App Development</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/androidappdevelopment">
                              Android App Development
                            </a>
                          </li>
                          <li>
                            <a href="/flutterappdevelopment">
                              Flutter App Development
                            </a>
                          </li>
                          <li>
                            <a href="/iosappdevelopment">iOS App Development</a>
                          </li>
                          <li>
                            <a href="/reactnativeappdevelopment">
                              React Native App Development
                            </a>
                          </li>
                          <li>
                            <a href="/rorappdevelopment">ROR App Development</a>
                          </li>
                          <li>
                            <a href="/uiuxdesign">UI/UX design</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/webwevelopment">
                          {" "}
                          <h6 class="title">Web Development</h6>
                        </a>
                        {/* <ul class="list-unstyled">
                          <li>
                            <a href="#">AngularJS Development</a>
                          </li>
                          <li>
                            <a href="#">MERN Development</a>
                          </li>
                          <li>
                            <a href="#">MEAN Development</a>
                          </li>
                          <li>
                            <a href="#">JAVA Development</a>
                          </li>
                          <li>
                            <a href="#">.Net MVC Development</a>
                          </li>
                          <li>
                            <a href="#">Python Development</a>
                          </li>
                        </ul> */}
                            <ul class="list-unstyled">
                          <li>
                            <a href="/angularjs">AngularJS Development</a>
                          </li>
                          <li>
                            <a href="/merndevelopment">MERN Development</a>
                          </li>
                          <li>
                            <a href="/meandevelopment">MEAN Development</a>
                          </li>
                          <li>
                            <a href="javadevelopment">JAVA Development</a>
                          </li>
                          <li>
                            <a href="/mvcdevelopment">.Net MVC Development</a>
                          </li>
                          <li>
                            <a href="/pythondevelopment">Python Development</a>
                          </li>
                          <li>
                            <a href="/reactjsdevelopment">ReactJS  Development</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/digitaltransformation">
                          {" "}
                          <h6 class="title">Digital Transformation</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <a href="/artificialintelligencedevelopment">AI and ML</a>
                          </li>
                          <li>
                            <a href="datascience">Data Science</a>
                          </li>
                          <li>
                            <a href="/iotdevelopment">IoT Development</a>
                          </li>
                          <li>
                            <a href="/lowcodedevelopmentservices">Low Code Development</a>
                          </li>
                          <li>
                            <a href="/whatsappbusinesschatbot">WhatsApp Chatbot</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/productengineering">
                          {" "}
                          <h6 class="title">Product Engineering</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              End-to-end product development, management, and
                              modernization
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/staffaugmentation">
                          {" "}
                          <h6 class="title">Staff Augmentation</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Accelerate your business with IT staff
                              augmentation services
                            </p>{" "}
                          </li>
                        </ul>
                      </div>

                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/cybersecurity">
                          {" "}
                          <h6 class="title">Cybersecurity</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Trustworthy Cyber Security solution partner for
                              your business
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/devops">
                          {" "}
                          <h6 class="title">Devops</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Ensure faster software delivery with DevOps
                            </p>
                            {"         "} <br />
                          </li>{" "}
                          <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* <li class="nav-item dropdown dropdown-mega position-static has-megamenu">
              <a
                class="nav-link dropdown-toggle  "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {" "}
                Solutions{" "}
              </a>
              <div class="dropdown-menu  megamenu ">
                <div class="mega-content px-4">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/b2bonlineorderingapp">
                          {" "}
                          <h6 class="title">B2B Online Ordering App</h6>
                        </a>
                        <ul class="list-unstyled ">
                          <li>
                            <p class="para">
                              Automate, Analyse and Accelerate your multi-brand
                              distribution business with India's leading B2B
                              Online Ordering App.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/fieldforcemonitoringapp">
                          {" "}
                          <h6 class="title">Field Force Monitoring App</h6>
                        </a>

                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Get 4 Essential and Real-Time Sales and Service
                              Data From Your “Feet-On-Street”
                            </p>{" "}
                            <br />
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/costingautomationandcontrol">
                          {" "}
                          <h6 class="title">Costing Automation and Control</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Manufacturing Costing and Control Solution for
                              Automotive OEMs, Tier 1 and Tier 2 suppliers
                            </p>
                            <br />
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/employeetimetrackingapp">
                          {" "}
                          <h6 class="title">Employee Time Tracking App</h6>
                        </a>

                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Extended Work-from-home is Productivity Disaster.
                              Redesign Performance Management with Workshots
                              Time Tracking Software.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}

            <li class="nav-item dropdown dropdown-mega position-static has-megamenu">
              <a
                class="nav-link dropdown-toggle  "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {" "}
                Industries{" "}
              </a>
              <div class="dropdown-menu  megamenu ">
                <div class="mega-content px-4">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/healthcare">
                          {" "}
                          <h6 class="title">Healthcare</h6>
                        </a>
                        <ul class="list-unstyled ">
                          <li>
                            <p class="para">
                              Engage patients, practitioners, and hospital
                              administrators with relevant and meaningful data
                              that inform and advise them at every step of their
                              journeys.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/ecommerce">
                          {" "}
                          <h6 class="title">Ecommerce</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Engage patients, practitioners, and hospital
                              administrators with relevant and meaningful data
                              that inform and advise them at every step of their
                              journeys.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/education">
                          {" "}
                          <h6 class="title">Education</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Engage patients, practitioners, and hospital
                              administrators with relevant and meaningful data
                              that inform and advise them at every step of their
                              journeys.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/entertainment">
                          {" "}
                          <h6 class="title">Media & Entertainment
                        </h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Engage patients, practitioners, and hospital
                              administrators with relevant and meaningful data
                              that inform and advise them at every step of their
                              journeys.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/travel">
                          {" "}
                          <h6 class="title">Travel & Hospitality

                        </h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Engage patients, practitioners, and hospital
                              administrators with relevant and meaningful data
                              that inform and advise them at every step of their
                              journeys.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                      <div class="col-12 col-sm-4 col-md-3 p-4">
                        <a href="/publicsector">
                          {" "}
                          <h6 class="title">Public Sector



                        </h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              Engage patients, practitioners, and hospital
                              administrators with relevant and meaningful data
                              that inform and advise them at every step of their
                              journeys.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

         

            {/* <li class="nav-item dropdown dropdown-mega position-static has-megamenu">
              <a
                class="nav-link dropdown-toggle  "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {" "}
                Resources{" "}
              </a>
              <div class="dropdown-menu  megamenu ">
                <div class="mega-content px-4">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/blog">
                          {" "}
                          <h6 class="title">Blogs</h6>
                        </a>

                        <ul class="list-unstyled ">
                          <li>
                            <p class="para">
                              Take a break and dig in some tech insights,
                              experiences and latest updates.
                            </p>{" "}
                            <br />
                            <br />
                          </li>
                        </ul>
                      </div>
                      
                      <div class="col-12 col-sm-4 col-md-3  p-4">
                        <a href="/events">
                          {" "}
                          <h6 class="title">Events</h6>
                        </a>
                        <ul class="list-unstyled">
                          <li>
                            <p class="para">
                              We believe face-to-face meetings during a trade
                              show go beyond the confines to explore synergies
                              of working together better. Let’s meet up at these
                              tradeshows.
                            </p>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
           <li class="nav-item dropdown has-megamenu ">
              <a class="nav-link " href="/blog">
                Blogs
              </a>
          

            </li>
        

            <li class="nav-item dropdown has-megamenu ">
              <a class="nav-link " href="/careers">
                Careers
              </a>
          

            </li>
          </ul>
      

          <div class="buttons">
            <a href="/letsconnect" className="enquirebtn">
              Let's Connect
            </a>
          
          &nbsp;

            {token ? (
              <a className="loginbtn" onClick={logoutBtn}>
                <span>
                  <i className="fa fa-user" />
                </span>
                Logout
              </a>
            ) : (
              <a href="/login" className="loginbtn">
                <span>
                  <i className="fa fa-user" />
                </span>
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
