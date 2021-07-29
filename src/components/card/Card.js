import React from 'react';
import './card.css'

const Card = ({ title, image, description }) => {
    return (
        <div className="cardWrapper">
            <img src={image} />
            <div className="cardContent">
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    );
}

export default Card;