import React from "react";
import { Teamdata } from "../Container/CardJSON";
import CardTeam from "../Container/CardTeam";
import Common from "../Container/Common";

function Leadership() {
  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">
        <Common
          name="Leadership"
          description="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars.
    We can all do little things with great love, and together we can accomplish great things.	"
        />

       
        <div className="pt- pb-">
          
      
          {/* <div className="row">
            <div></div>

<div className="col-md-6 col-sm-6">


<div class="box">
    <div class="figure"> <img src="images/sunilrathore.jpg"/>
        <div class="caption">
            <div class="about">
                <h2>Aleesha Ragun</h2> <small>Android Application Developer</small>
                <p>For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them. For what reason would it be advisable for me to think about business content?</p>
            </div>
        </div>
    </div>
</div>
</div>
<div className="col-md-6 col-sm-6">


<div class="box">
    <div class="figure"> <img src="images/sunilrathore.jpg"/>
        <div class="caption">
            <div class="about">
                <h2>Aleesha Ragun</h2> <small>Android Application Developer</small>
                <p>For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them. For what reason would it be advisable for me to think about business content?</p>
            </div>
        </div>
    </div>
</div>
</div>
<div className="col-md-6 col-sm-6">


<div class="box">
    <div class="figure"> <img src="images/sunilrathore.jpg"/>
        <div class="caption">
            <div class="about">
                <h2>Aleesha Ragun</h2> <small>Android Application Developer</small>
                <p>For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them. For what reason would it be advisable for me to think about business content?</p>
            </div>
        </div>
    </div>
</div>
</div>
<div className="col-md-6 col-sm-6">


<div class="box">
    <div class="figure"> <img src="images/sunilrathore.jpg"/>
        <div class="caption">
            <div class="about">
                <h2>Aleesha Ragun</h2> <small>Android Application Developer</small>
                <p>For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them. For what reason would it be advisable for me to think about business content?</p>
            </div>
        </div>
    </div>
</div>
</div>

</div> */}

<header class=" text-center py-5 mb-4">
  <div class="container">
  <h5 class="card-title mb-0">Our Leader's</h5>

  </div>

</header>

<div class="container">
  <div class="row">
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="images/sunilrathore.jpg" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Sunil Rathore</h5>
          <div class="card-text text-black-50" >COO </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="images/versha.png" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Varsha Rathore </h5>
          <div class="card-text text-black-50">Director </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="images/team5.webp" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Vipin Joshi</h5>
          <div class="card-text text-black-50">HR manager</div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="images/laksya.JFIF" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Lakshya Nair</h5>
          <div class="card-text text-black-50">Marketing Head</div>
        </div>
      </div>
    </div>
  </div>

</div>

        </div>
      </div>
    </div>
  );
}

export default Leadership;
