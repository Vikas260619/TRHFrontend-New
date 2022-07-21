import React from "react";
import Common from "../Container/Common.js";
import { TechnoData } from "../Container/CardJSON";
import CardTechno from "../Container/CardTechno.js";
import Marquee from "react-fast-marquee";


function Technology() {
 
  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">

        <Common
          name="Technology"
          background="Technology"
          description=" The way we buy, sell, and do everything is changing as a result of technological advancements. With software development services, we help clients realize their full potential and accelerate their growth.	" />

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


        <section className="pt-95 pb-95 ">
          <div className="container">
           <div className="row">
           <div className="col-lg-12  col-md-6 ">
              <div className="sec-title3 text-center mb-35">
                <span className="sub-title">OUR EXPERTISE</span>
                <h2 className="title pb-25 ">
                We help clients harness the power and scope of the digital world for enhanced business performance and awareness.

                </h2>
                <div className="heading-border-line"></div>
              </div>
            </div>
           <Marquee className="marq1">
           <div><img src="images/expert1.png" alt="" /></div>
           <div><img src="images/expert2.png" alt="" /></div>
           <div><img src="images/expert3.png" alt="" /></div>
           <div><img src="images/expert4.png" alt="" /></div>
           <div><img src="images/expert5.png" alt="" /></div>
           <div><img src="images/expert6.png" alt="" /></div>
           <div><img src="images/expert7.png" alt="" /></div>
           <div><img src="images/expert8.png" alt="" /></div>
           <div><img src="images/expert9.png" alt="" /></div>
           <div><img src="images/expert10.png" alt="" /></div>




            


</Marquee>
           </div>

          </div>

        </section>
      </div>
    </div>
  );
}

export default Technology;
