import React from 'react'

const Card = (props) => {
  return (

    <div className="service-wrap">
      <div className="image-part">
        <img src={props.imgsrc} alt={props.imgsrc} />
      </div>
      <div className="content-part">
        <h3 className="title">
          {props.title}
        </h3>
        <div className="desc">
          {props.description}
        </div>
      </div>
    </div>

  )
}

export default Card