import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Clients() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/Mistminds.webp" alt="Mistminds" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/trootech.webp" alt="trootech" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/bynebits.webp" alt="bynebits" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/coditas.webp" alt="coditas" />
          </div>
        </div>
      </div>
    </div>,
    <div className="item" data-value="5">
      <div className="counter-area">
        <div className="counter-list mb-25">
          <div className="counter-icon">
            <img src="images/cloud9.webp" alt="cloud9" />
          </div>
        </div>
      </div>
    </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/digital.jpg" alt="digital" />
         </div>
       </div>
     </div>
   </div>,
    
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/manven.jpg" alt="manven" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/sartdata.jpg" alt="sartdata" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/innovation.jpg" alt="innovation" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/softude.jpg" alt="softude" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/elgebra.jpg" alt="elgebra" />
         </div>
       </div>
     </div>
   </div>,
     <div className="item" data-value="5">
     <div className="counter-area">
       <div className="counter-list mb-25">
         <div className="counter-icon">
           <img src="images/linkage.jpg" alt="linkage" />
         </div>
       </div>
     </div>
   </div>,
    <div className="item" data-value="5">
    <div className="counter-area">
      <div className="counter-list mb-25">
        <div className="counter-icon">
          <img src="images/aventussoftware.jpg" alt="AventusSoftware" />
        </div>
      </div>
    </div>
  </div>,
   
  ];
  return (
    <div className="rs-counter style1 counter-home5-style client23 bg25  ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12  col-md-12 col-xs-12 ">
            <div className="sec-title3 text-center mb-35">
              <span className="sub-title">OUR CLIENTS</span>
              <h2 className="title pb-25 white-color">
                Trusted By The World's Best Companies
              </h2>
              <div className="heading-border-line"></div>
            </div>
          </div>
        </div>

        <div>
          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
