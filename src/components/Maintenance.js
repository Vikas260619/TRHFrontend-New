import React from "react";
import { Helmet } from "react-helmet";
import ReactWhatsapp from "react-whatsapp";

function Maintenance() {
  return (
    <div>
      <Helmet>
        <title>
          Fire Safety Equipment Maintenance Testing | Ensure Workplace Safe
        </title>

        <meta
          name="description"
          content="We provide superior fire compliance management services by certified fire technicians and offer advanced fire and safety services."
        />

        <meta
          name="keyword"
          content="fire and sprinkler inspection, fire sprinkler inspections, fire extinguishers, sprinklers systems, smoke detection, extinguishers, fire alarms system, type a fire extinguisher, fire detection system, sprinkler fire, fire sprinkler systems, fire alarm, fire suppression systems, fire alarm panel, fire sensor, fire panel, fire fighting companies, installation of fire alarm, fire alarm, and detection systems"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:1, max-video-preview:1"
        />
        <link
          rel="canonical"
          href="https://www.therapidhire.com/maintenance"
          data-react-helmet="true"
        ></link>
        <meta
          name="fb:app_id"
          content="1369882117133030"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://www.therapidhire.com/maintenance"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fire Safety Equipment"
        />
        <meta
          property="og:description"
          content="We provide superior fire compliance management services by certified fire technicians."
        />
        <meta
          property="og:image"
          content="https://www.therapidhire.com/images/Firesafety5.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="fire safety" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@therapidhire_" />
        <meta
          property="twitter:url"
          content="https://www.therapidhire.com/maintenance"
        />
        <meta
          name="twitter:title"
          content="Fire Safety Equipment"
        />
        <meta
          name="twitter:description"
          content="We provide superior fire compliance management services by certified fire technicians."
        />
        <meta
          name="twitter:image"
          content="https://www.therapidhire.com/images/Firesafety5.jpg"
        />
      </Helmet>
      <div
        id="rs-slider"
        className="rs-slider slider3 rs-slider-style3 py-5"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="bend niceties">
          <img src="images/Firesafety5.jpg" alt="Firesafety" title="" />
        </div>
      </div>{" "}
      <h2
        className="fs-2 h3 block-title text-center font-weight-bold"
        style={{ fontWeight: "700" }}
      >
        "Fire Fighting System Maintenance"
      </h2>
      <div className="container">
        <div class="row py-4">
          <div class="col-md-6">
            <img
              className="shadow rounded"
              src="images/maintanance1.jpg"
              alt="maintanance1"
            />
          </div>
          <div class="col-md-6">
            <img
              className="shadow rounded"
              src="images/Mantanance8.png"
              alt="maintanance8"
            />
          </div>

          <p className="text-center mt-5 container">
            <strong className="text-center fs-5" style={{ fontWeight: "400" }}>
              We provide superior fire compliance management services by
              certified fire technicians and offer advanced fire and safety
              services including:
            </strong>
          </p>

          <div class="col-md-6">
            <div className="py-5 ps-5">
              <ul
                className="justify-content-start px-1"
                style={{
                  listStyle: "circle",
                  paddingRight: "50px",
                  fontWeight: "500",
                }}
              >
                <li>
                  {" "}
                  Deluge, water spray, vapor mitigation and sprinkler systems
                </li>
                <li>Hydrants, post indicator valves and fire monitors</li>
                <li>Fire pumps and fire apparatuses</li>
                <li>Fire hoses</li>
                <li>Smoke, flame and incipient fire detection</li>
                <li>Manual and remote controlled fixed monitor systems</li>
                <li>Emergency alarm and mass notification systems</li>
                <li>Combustible and toxic gas detection systems</li>
                <li>Clean agent fire suppression systems</li>
                <li>
                  CO2, dry chemical and foam-based fire suppression systems
                </li>
                <li>Fixed and portable fire extinguishers</li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 mt-5">
            <img
              className="shadow rounded"
              src="images/maintanancesystem.jpg"
              alt="maintanancesystem"
            />
          </div>
        </div>
      </div>
      <div class="floating_btn">
        <a target="_blank" href="https://wa.me/">
          <div class="contact_icon">
            <ReactWhatsapp
              number="+91-9907657026"
              message="Hello, May I Help You !"
              class="whatsappbuttn"
            >
              {" "}
              <i className="fa fa-whatsapp"></i>
            </ReactWhatsapp>
          </div>
        </a>
        <p class="text_icon">Chat with us</p>
      </div>
    </div>
  );
}

export default Maintenance;
