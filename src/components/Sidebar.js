import React from "react";
function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="social">
          <ul>
            <li className="twit">
              <a href="https://twitter.com/therapidhire_" target="_blank">  
                Twitter <i className="fa fa-twitter "></i>
              </a>
            </li>
            <li className="insta">
              <a  
                href="https://www.instagram.com/therapidhire_/"
                target="_blank"
              >
                Instagram <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="linke">
              <a
                href="https://www.linkedin.com/company/therapidhire"
                target="_blank"
              >
                Linkedin <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="facebook">
              <a href="https://www.facebook.com/therapidhire" target="_blank">
                Facebook <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
