import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navtrh">
      <div className="container navihead">
        <a className="navbar-brand" href="/">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="therapidhire" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                We Are
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDr
              opdown" 
              >
                <li>
                  <a className="dropdown-item" href="/aboutus">
                    About Us
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/technology">
                    Technology
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="/pricing">
                    PRICING
                  </a>
                </li> */}
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/letsconnect"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/team">
                    Team
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/faq">
                    FAQ
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/workwithus">
                    Work with Us
                  </a>
                </li>
              </ul>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/letsconnect"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TRH Fire Safety Solution

              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/team">
                  Fire fighting sytem 
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/faq">
                  Fire Risk Assessment
                </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/workwithus">
                  Testing of Fire fighting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/workwithus">
                  Trainings


                  </a>
                </li>

              </ul>
            </li> */}

            <li className="nav-item">
              <a className="nav-link rounded-pill" href="/fire" style={{backgroundColor:"#FF4500",paddingTop:"10px",paddingBottom:"10px"}}>
              TRH Fire Safety Solution
              </a>
            </li>                                                                                                                                                                                                                                                                                                                                                                                         
          </ul>
          <a href="/letsconnect" className="enquirebtn">
            Let's Connect
          </a>
          {token ? (
            <button className="loginbtn" onClick={logoutBtn}>
              <span>
                <i className="fa fa-user"/>
              </span>
              Logout 
            </button>
          ) : (
            <a href="/login" className="loginbtn">
              <span>
                <i className="fa fa-user"/>
              </span>
              Login
            </a>
          )}
        </div>
      </div>
      <ToastContainer/>
    </nav>
  );
}

export default Header;
