import React from "react";
import { useNavigate } from "react-router-dom";

function Verifie() {
  const Navigate = useNavigate();

  const Loginhandle = (e) => {
    Navigate("/login");
  };
  return (
    <div className="rs-appointment style1 apply-career bg17 pt-25 pb-25">
      <div className="container">
        <div className="appoint-schedule">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Email Verified Successfully..</h4>
              <div className="text-center">
                <input
                  className="readon submit"
                  type="submit"
                  style={{ display: "inline" }}
                  value="OK"
                  onClick={Loginhandle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verifie;
