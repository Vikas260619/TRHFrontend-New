import React from "react";
import Common from "../Container/Common.js";
import CardTeam from "../Container/CardTeam.js";
import { Teamdata } from "../Container/CardJSON.js";
import { Helmet } from "react-helmet";

function Team() {
  return (
    <div>
      <Helmet>



<meta charset="utf-8"/>
<title>Meet Our Team - TheRapidHire</title>
<meta name="description" content="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars. We can all do little things with great love, and together we can accomplish great things."/>
<meta
          name="robots"
          content="noindex, nofollow"/>
                  <link rel="canonical" href="https://www.therapidhire.com/team"/>


                  <meta name="fb:app_id" content="1369882117133030" data-react-helmet="true"/>
  <meta property="og:url" content="https://www.therapidhire.com/team"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Meet Our Team - TheRapidHire"/>
  <meta property="og:description" content="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars. We can all do little things with great love, and together we can accomplish great things."/>
  <meta property="og:image" content="https://www.therapidhire.com/images/software.jpg"/>
<meta property="og:image:type" content="image/jpg" />
<meta property="og:image:width" content="600" />
<meta property="og:image:height" content="315" />
<meta property="og:image:alt" content="therapidhire" />

  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:site" content="therapidhire_"/>
  <meta property="twitter:url" content="https://www.therapidhire.com/team"/>
  <meta name="twitter:title" content="Meet Our Team - TheRapidHire"/>
  <meta name="twitter:description" content="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars. We can all do little things with great love, and together we can accomplish great things."/>
  <meta name="twitter:image" content="https://www.therapidhire.com/images/software.jpg"/>
  

     
      </Helmet>
      <div className="offwrap"></div>

      <div className="main-content">
        <Common
          name="Meet Our Team "
          description="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars.
          We can all do little things with great love, and together we can accomplish great things.	"
        />

        <div className="pt-95 pb-95">
          <div className="container">
            <div className="row">
              {Teamdata.map((item, key) => (
                <div className="col-md-3 col-sm-6">
                  <CardTeam
                    imgsrc={item.imgsrc}
                    title={item.title}
                    description={item.description}
                  />
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
