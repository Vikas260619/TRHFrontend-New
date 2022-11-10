import React, { useEffect} from "react";

function Return(props) {
  useEffect(() => {
    document.title="Return"
    }, )
 
  return (
    <div>
      <div className="offwrap"></div>
      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container-fluid">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Return and Refund Policy
                <span className="watermark">Return</span>
              </h1>
              
            </div>
          </div>
        </div>

        <div className="termscondition pt-95 pb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="term12">
                  <ul>
                    <li>
                      In certain cases and within certain limits, some amount
                      may be refunded if the permitted work will not be
                      completed as per the NDA made with an individual.
                    </li>

                    <li>
                      If the work has not started, a 30% processing fee will be
                      retained by the company. City, State Surcharge, and Plan
                      Review fees are deducted separately.
                    </li>

                    <li>
                      If the authorized work has been started, the department
                      may retain an appropriate portion of the work fee in
                      addition to the processing fee.
                    </li>

                    <li>
                      A full refund will be made if the department is in error,
                      but if the bank charges some amount from our end then that
                      amount will be deducted accordingly.
                    </li>

                    <li>
                      Submit written explanation of refund request within 15
                      calendar days of payment of the amount. Request refunds by
                      mail to <a href="mailto:hr@therapidhire.com">hr@therapidhire.com.</a>
                    </li>

                    <li>
                      Refunds are paid by digital transfer only. It takes 4 to 6
                      weeks for a refund to be initiated.
                    </li>

                    <li>
                      Banking charges (if any) will be deducted from the amount
                      without intimation to parties.
                    </li>

                    <li>
                      If 2 or more channels are included in the payment method
                      then a refund will initiate accordingly.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

Return.propTypes = {};

export default Return;
