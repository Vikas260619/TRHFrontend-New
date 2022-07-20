import React from "react";
import Common from "../Container/Common.js";
import CardTeam from "../Container/CardTeam.js";
import { Teamdata } from "../Container/CardJSON.js";

function Team() {
  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">

      <Common
          name="MEET OUR TEAM - Expert Team"   
         background= "Team" 
         description=" The way a team plays as a whole determines its success. You may
         have the greatest bunch of individual stars in the world. We can
         all do small things, with great love, and together we can do
         something wonderful."
            />


        <div className="pt-95 pb-95">
          <div className="container">
            <div className="row">

              {Teamdata.map((item,key)=>(
                <div className="col-md-3 col-sm-6">
                  <CardTeam
                     imgsrc={item.imgsrc}
                     title={item.title}
                     description={item.description}/>
                </div>

              ))}
            
            </div>
          </div>
        </div>

      </div>

      
    </div>
  );
}

export default Team;
