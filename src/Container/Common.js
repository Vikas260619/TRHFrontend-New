import React from 'react'

const Common = (props) => {
  return (
    <div className="rs-breadcrumbs img1">
    <div className="container-fluid">
      <div className="breadcrumbs-inner">
        <h1 className="page-title">
          {props.name}
          <span className="watermark">{props.background}</span>
        </h1>
        <span className="sub-text">
          {props.description}
        </span>
      </div>
    </div>
  </div>
  )
}

export default Common