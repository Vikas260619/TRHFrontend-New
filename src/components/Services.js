import React from "react";
import Card from "../Container/Card.js";
import CardData from "../Container/CardJSON";


import Common from "../Container/Common.js";


function Services() {
  return (
    <div>
      <div className="offwrap">
      <div className="main-content">
        <Common
          name="Services"
          background="Services"
          description=" We offer industry-specific and need-based services, allowing us to deliver customized solutions. Customers range from small individual startups to large corporations." />

        <div className="rs-services style2 servicepage rs-services-style2 bg17 pt-95 pb-95 ">
          <div className="container custom">
            <div className="row">

              {CardData.map((item, key) => (

                <div className="col-lg-4 col-md-6 mb-20 wow fadeInDown"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.1s"
                >
                  <Card
                    imgsrc={item.imgsrc}
                    title={item.title}
                    description={item.description} />
                </div>

              ))}
            </div>
          </div>
        </div>

      </div>
</div>

    </div>
  );
}

export default Services;
