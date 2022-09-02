import React, {FC} from 'react';
// @ts-ignore
import card_image from "../../../../../static/images/card_image.png";
import {ICard} from "../../../../../types/types";

interface CardProps{
    card: ICard
}
const Card:FC<CardProps> = ({card}) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img className='card-img' src={card_image} alt='Card Image'/>
            </div>
            <div className='card-title' id='hist'>
                {card.blackTitle} <span>{card.orangeTitle}</span>
            </div>
            <div className='card-description'>
                {card.description}
            </div>
        </div>
    );
};

export default Card;