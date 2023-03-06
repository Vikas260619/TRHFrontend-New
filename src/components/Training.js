import React from "react";

function Training() {
  return (
    <div>
  <div
              id="rs-slider"
              className="rs-slider slider3 rs-slider-style3"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div className="bend niceties">
                <img src="images/bannerfire4.jpg" alt="trhslider" title="" />
              </div>
             
            </div>    

      <div className="row text-center pt-3">
      <div class="col-md-4">

      <img className="mt-3" src="images/Firelogo2-removebg-preview.png" alt="CloudServices" style={{height:"25vh"}}/>

      </div>
      <div class="col-md-4">

      <h2
        className="fs-3 h3 block-title text-center py-5 font-weight-bold"
        style={{ fontWeight: "600" }}
      >
        Fire Service Motto <br/><h3 style={{color:"red"}}>"WE SERVE TO SAVE"</h3>
      </h2>
</div>
<div class="col-md-4">

<img className="mt-3" src="images/Firelogo1.png" alt="CloudServices" style={{height:"25vh"}}/>

</div>

      </div>

      {/* <h2
        className="fs-3 h3 block-title text-center font-weight-bold"
        style={{ fontWeight: "700", color: "#FF4500" }}
      >
        "The more we Sweet on Training ground.
        <br />
        The Less Well Blle on battleground"
      </h2> */}

      {/* <div class="row py-4">
        <div class="col-md-6">
          <img
            className="py-5"
            src="images/maintanance1.jpg"
            alt="CloudServices"
          />
        </div>
        <div class="col-md-6">
          <img
            className="py-5"
            src="images/Traningboy.png"
            alt="CloudServices"
          />
        </div>
      </div> */}

      <div class="row py-4 ">
        <div class="col-md-6">
          <div className="" style={{ paddingLeft: "80px" }}>
            <h2
              className="fa fa-arrow-right fs-1 h3 block-title py-4 font-weight-bold"
              style={{ fontWeight: "700", color: "#FF4500" }}
            >
              Training Modules
            </h2>
            
            <h2
              className=" fs-4 h3 block-title font-weight-bold py-2"
              style={{ fontWeight: "500" }}
            >
             Basic Fire Fighting Training
            </h2>

            <div className="py-3">
              <ul
                className="justify-content-start fs-5"
                style={{ listStyle: "circle", fontWeight: "500"}}
              >
                <li> Top Fire Fighting Training</li>
                <li>Middle Level</li>
                <li>Low Level</li>
              </ul>
            </div>

            <h2
              className="py-2 fs-4 h3 block-title font-weight-bold"
              style={{ fontWeight: "500" }}
            >
              Advanced Fire Fighting Training & Rescue training
            </h2>
            <h2
              className="py-2 fs-4 h3 block-title font-weight-bold"
              style={{ fontWeight: "500" }}
            >
              auxillary fire squad training
            </h2>
            <h2
              className=" py-2 fs-4 h3 block-title font-weight-bold"
              style={{ fontWeight: "500" }}
            >
              Incident Command System Training{" "}
            </h2>
          </div>
        </div>
        <div class="col-md-6 pe-5">
          <img
            className="py-5 shadow-lg p-3 mb-5 bg-white rounded"
            src="images/Traningboy.png"
            alt="CloudServices"
          />
        </div>
      </div>

      <h2
        className="fs- h3 block-title text-center py-5 font-weight-bold"
        style={{ fontWeight: "600" }}
      >
        "Sweat, Train, Save. The more we Sweat in trainig, the less we'll bleed if a real fire"
      </h2>


      <div className="container">
      <h2
              className=" fa fa-arrow-right fs-1 h3 block-title py-4 font-weight-bold"
              style={{ fontWeight: "700", color: "#FF4500" }}
            >
              Our Training Courses

            </h2>
            <div className="py-5 ps-5">
          <ul className="justify-content-start fs-5 px-5" style={{ listStyle: "circle", paddingRight:"50px" }}>
   <li> We offer a wide range of training courses to meet the diverse needs of our clients. Our courses include:
</li>
            <li>Fire Safety Awareness: This course is designed to provide a basic understanding of fire safety principles, including the causes of fires, fire prevention measures, and emergency procedures.
</li>
            <li>Fire Marshal Training: This course is ideal for individuals who have been appointed as fire marshals in their workplace. The course covers the role and responsibilities of a fire marshal, fire safety legislation, fire risk assessment, and evacuation procedures.
</li>
            <li>Fire Extinguisher Training: This course teaches participants how to safely and effectively use fire extinguishers. It covers the different types of extinguishers, their uses, and the correct techniques for using them.
</li>
            <li>Evacuation Chair Training: This course is designed for individuals who need to assist people with mobility issues during an emergency evacuation. It covers the use of evacuation chairs and the correct techniques for using them.
</li>
            <li>Bespoke Training: We also offer bespoke training courses tailored to meet the specific needs of our clients. We work closely with our clients to develop training programmes that address their unique requirements.
</li>
          
          </ul>
        </div>


        <h2
              className=" fa fa-arrow-right fs-1 h3 block-title py-4 font-weight-bold"
              style={{ fontWeight: "700", color: "#FF4500" }}
            >
              Why Choose Us?


            </h2>

            <div className="py-5 ps-5">
          <ul className="justify-content-start fs-5 px-5" style={{ listStyle: "circle", paddingRight:"50px" }}>
   <li>Experienced Professionals: Our trainers are highly experienced professionals with a wealth of knowledge and expertise in fire safety.
</li>
            <li>Tailored Training: We understand that every client is different, and we tailor our training programmes to meet their unique needs.
</li>
            <li>Comprehensive Training: Our courses cover all aspects of fire safety, from prevention to response.
</li>
            <li>Flexible Schedule: We offer flexible training schedules to minimize disruption to your business or organization.
</li>
            <li>Competitive Pricing: We offer competitive pricing for all our training courses, without compromising on quality.
</li>
    </ul>
        </div>

      </div>
    </div>
  );
}

export default Training;
