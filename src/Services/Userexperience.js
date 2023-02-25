import React from "react";
import Common from "../Container/Common";
import Servicescommon from "../Container/Servicescommon";
import { Designdata } from "../Container/ServicesJSON";

function Userexperience() {
  return (
    <div className="offwrap">
      <div className="main-content ">
        <Common
          name="User Experience Design"
          description=" We offer the process design teams use to create products that provide meaningful and relevant experiences to users.
          "
        />
        {Designdata.map((item, key) => (
          <Servicescommon
            imgsrc={item.imgsrc}
            title={item.title}
            title2={item.title2}
            paragraph={item.paragraph}
            paragraph2={item.paragraph2}
            cloudtitle={item.cloudtitle}
            cloudtitle2={item.cloudtitle2}
            cardtitle={item.cardtitle}
            carddesc={item.carddesc}
            cardtitle2={item.cardtitle2}
            carddesc2={item.carddesc2}
            cardtitle3={item.cardtitle3}
            carddesc3={item.carddesc3}
            pagetitle={item.pagetitle}
            pagedesc={item.pagedesc}
            pagebutton={item.pagebutton}
            sertitle={item.sertitle}
            sertitle2={item.sertitle2}
            serpara={item.serpara}
            sercardtitle={item.sercardtitle}
            sercardpara={item.sercardpara}
            sercardtitle2={item.sercardtitle2}
            sercardpara2={item.sercardpara2}
            sercardtitle3={item.sercardtitle3}
            sercardpara3={item.sercardpara3}
            contenttitle={item.contenttitle}
            contentdesc={item.contentdesc}
          />
        ))}
      </div>
    </div>
  );
}
                                                                                       
export default Userexperience;
