import React from 'react'

const CardTeam = (props) => {
  return (
    <div className="our-team">
    <div className="pic">
      <img src={props.imgsrc} alt="cloudservices" />
    </div>
    <h3 className="title">{props.title}</h3>
    <span className="post">{props.description}</span>
  </div>
  )
}

export default CardTeam