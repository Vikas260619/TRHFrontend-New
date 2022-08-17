import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import queryString from "query-string";

function Header() {
  // const { id } = useParams();
  const img = "images/logo.png";
  const location = window.location.href;
  const query = queryString.parse(location);
  const arr = location.split("/");
  const id = arr[arr.length - 1];
  console.log(id);
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light navtrh">
      <div className="container-fluid navihead">
        <a className="navbar-brand" href="/">
          <img src={process.env.PUBLIC_URL +'/images/logo.png'} alt="TRH" />
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
        <ToastContainer />
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
                WE ARE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/about">
                    ABOUT US
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/services">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/technology">
                    TECHNOLOGY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/pricing">
                  PRICING
                  </a>
                </li>
                
                
              </ul>
            </li>

            
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                BLOG
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/contactus"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CONTACT US
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/team">
                    TEAM
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/faq">
                    FAQ
                  </a>
                </li>
                

                <li>
                  <a className="dropdown-item" href="/career">
                    WORK WITH US
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="/contactus" className="enquirebtn">
            Get A Enquiry
          </a>
          {token ? (
            <button className="loginbtn" onClick={logoutBtn}>
              <span>
                <i className="fa fa-user" />
              </span>
              Logout
            </button>
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
    </nav>
  );
}

export default Header;
