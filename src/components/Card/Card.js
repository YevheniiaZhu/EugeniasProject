import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';


const Card = ({ title, image, description }) => {
    return (
        <div className="cardWrapper">
            <Link>
                <img src={image}/>
                <div className="cardContent">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>
            </Link>
        </div>
    );
}

export default Card;