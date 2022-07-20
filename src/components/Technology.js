import React from "react";
import Common from "../Container/Common.js";
import { TechnoData } from "../Container/CardJSON";
import CardTechno from "../Container/CardTechno.js";

function Technology() {
  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">

        <Common
          name="  We manage technology"
          background="Technology"
          description="  Technology is transforming the way we buy, sell, and do
         everything. We help clients unlock potential and fuel growth
         with software development services." />

        <section className="pt-95 pb-95 bg17">
          <div className="container">
            <div className="row">

              {TechnoData.map((item, key) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInLeft"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.2s">
                  <CardTechno
                    imgsrc={item.imgsrc}
                    Numb={item.Numb}
                    title={item.title}
                    description={item.description}
                    icon_imgsrc={item.icon_imgsrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Technology;
