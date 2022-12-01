import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "./Basepath";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";

function Verifie() {
  const { id } = useParams();

  const Navigate = useNavigate();
  useEffect(() => {
    axios({
      url: baseURL + "user/emailstatus/" + id,
      method: "get",
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
