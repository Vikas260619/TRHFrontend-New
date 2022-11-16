import React from "react";

const JsonLd = (props) => {
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data) }}
  />;
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(props.get) }}
  />;
};

export default JsonLd;
