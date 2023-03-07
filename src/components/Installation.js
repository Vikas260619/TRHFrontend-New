import React from "react";
import Common from "../Container/Common";

function Installation() {
  return (
    <div>
      <div
        id="rs-slider"
        className="rs-slider slider3 rs-slider-style3"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="bend niceties">
          <img src="images/bannerfire3.jpg" alt="trhslider" title="" />
        </div>
      </div>

      <div className=" py-5">
        <h2
          className="h3 block-title text-center py-3 font-weight-bold"
          style={{ fontWeight: "600",backgroundColor:"#00003c",color:"white" }}
        >
          FIRE PROTECTION SYSTEMS
        </h2>
        <p className="text-center">
          <strong className="text-center fs-4" style={{ fontWeight: "400" }}>
            Wet and dry riser systems, Courtyard hydrant systems, Auto sprinkler
            systems, Pump house of auto/manual start types, Gaseous fire
            suppression systems
          </strong>
        </p>

        <div class="container">
          <div class="row">
            <div class="col-md-4 mt-3 col-lg-3">
              <img className="" src="images/Fire1.jpg" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/Fire2.jpg" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/Fire3.png" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/Fire4.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2
          className="h3 block-title text-center py-3 font-weight-bold"
          style={{ fontWeight: "600",backgroundColor:"#00003c",color:"white" }}
        >
          FIRE DETECTION AND ALARM SYSTEMS
        </h2>
        <p className="text-center">
          <strong className="text-center fs-4" style={{ fontWeight: "400" }}>
            Conventional type fire detection and alarm systems, Addressable type
            fire detection and alarm systems, Aspiration / VESDA systems, Public
            Address and digital voice evacuation systems
          </strong>
        </p>

        <div class="container py-5">
          <div class="row">
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection1.jpg" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection2.jpg" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection6.png" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection4.jpg" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection8.png" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection3.jpg" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection7.png" class="img-fluid" alt="image" />
            </div>
            <div class="col-md-4 mt-3 col-lg-3">
              <img src="images/detection5.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;
