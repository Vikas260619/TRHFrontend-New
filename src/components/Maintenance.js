import React from "react";

function Maintenance() {
  return (
    <div>
      <img className="py-5" src="images/Mantanance6.png" alt="CloudServices" />
      <h2
        className="fs-2 h3 block-title text-center font-weight-bold"
        style={{ fontWeight: "700" }}
      >
       "Fire Fighting System Maintenance"
      </h2>
      
      <div class="row py-4">
        <div class="col-md-6">
          <img
            className="py-5"
            src="images/maintanance1.jpg"
            alt="CloudServices"
          />
        </div>
        <div class="col-md-6">
          <img className="py-5" src="images/Mantanance8.png" alt="CloudServices" />
        </div>

        <p className="text-center container">
          <strong className="text-center fs-5" style={{fontWeight:"400"}} >
            We provide superior fire compliance management services by certified
            fire technicians and offer advanced fire and safety services
            including:
          </strong>
        </p>

        <div class="col-md-6">

        <div className="py-5 ps-5">
          <ul className="justify-content-start fs-5 px-5" style={{ listStyle: "circle", paddingRight:"50px",fontWeight:"500" }}>
   <li> Deluge, water spray, vapor mitigation and sprinkler systems</li>
            <li>Hydrants, post indicator valves and fire monitors</li>
            <li>Fire pumps and fire apparatuses</li>
            <li>Fire hoses</li>
            <li>Smoke, flame and incipient fire detection</li>
            <li>Manual and remote controlled fixed monitor systems</li>
            <li>Emergency alarm and mass notification systems</li>
            <li>Combustible and toxic gas detection systems</li>
            <li>Clean agent fire suppression systems</li>
            <li>CO2, dry chemical and foam-based fire suppression systems</li>
            <li>Fixed and portable fire extinguishers</li>
          </ul>
        </div>
      </div>

      <div class="col-md-6">
      <img className="py-5" src="images/Man.png" alt="CloudServices" />

      </div>

      </div>

    </div>
  );
}

export default Maintenance;
