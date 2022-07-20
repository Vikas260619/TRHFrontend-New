import React from 'react'

const CardTechno = (props) => {
    return (

        <div className="technology-item">
            <img
                src={props.imgsrc}
                alt="technology image"
                className="technology-bg-img"
            />
            <div className="bodytech">
                <h4>{props.Numb}</h4>
                <h5>{props.title}</h5>
                <p> {props.description}</p>
            </div>
            <div className="icontech">
                <img src={props.icon_imgsrc} alt="TRH" />
            </div>
            <div className="icontech-border"></div>
        </div>
    )
}

export default CardTechno