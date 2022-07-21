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
         description="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars.
          We can all do little things with great love, and together we can accomplish great things.	"
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
