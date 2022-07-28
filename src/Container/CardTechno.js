import React from 'react'

const CardTechno = (props) => {
    return (

        <div className="technology-item">
            <img
                src={props.imgsrc}
                alt="technologyimage"
                className="technology-bg-img"
            />
            <div className="bodytech">
            <img src={props.icon_imgsrc} alt="Propimage" />
                <h5>{props.title}</h5>
                <p> {props.description}</p>
            </div>
            
        </div>
    )
}

export default CardTechno