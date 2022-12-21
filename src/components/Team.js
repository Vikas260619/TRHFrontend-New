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
<meta name="image" content="https://www.therapidhire.com/images/ser1.png"/>
<meta itemprop="name" content="Meet Our Team - TheRapidHire"/>
<meta itemprop="description" content="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars. We can all do little things with great love, and together we can accomplish great things."/>
<meta itemprop="image" content="https://www.therapidhire.com/images/ser1.png"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="Meet Our Team - TheRapidHire"/>
<meta name="twitter:description" content="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars. We can all do little things with great love, and together we can accomplish great things."/>
<meta name="twitter:site" content="@therapidhire_"/>
<meta name="twitter:creator" content="@therapidhire_"/>
<meta name="twitter:image:src" content="https://www.therapidhire.com/images/ser1.png"/>
<meta name="og:title" content="Meet Our Team - TheRapidHire"/>
<meta name="og:description" content="A team's success is determined by how well it plays as a whole. You could have the world's best collection of individual stars. We can all do little things with great love, and together we can accomplish great things."/>
<meta name="og:url" content="https://www.therapidhire.com/team"/>
<meta name="og:type" content="article"/>
<meta name="article:section" content="softtware development"/>
<meta name="article:author" content="https://www.facebook.com/profile.php?id=100054281690679"/>
<meta name="article:tag" content="software development"/>
     
        <link rel="canonical" href="https://www.therapidhire.com/team"/>

        <link rel="alternate" href="https://www.therapidhire.com/team" hreflang="x-default"/>
  <link rel="alternate" href="https://www.therapidhire.com/team/en" hreflang="en"/>
  <link rel="alternate" href="https://www.therapidhire.com/team/fr" hreflang="fr"/>
  <link rel="alternate" href="https://www.therapidhire.com/team/es" hreflang="es"/>
  <link rel="alternate" href="https://www.therapidhire.com/team/mx" hreflang="es-mx"/>
  

     
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
