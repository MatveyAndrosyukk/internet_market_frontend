import React, {FC} from 'react';
// @ts-ignore
import card_image from "../../../../../../static/images/card_image.png";
import {ICard} from "../../../../../../types/types";
// @ts-ignore
import classes from "./Card.module.css"

interface CardProps{
    card: ICard
}
const Card:FC<CardProps> = ({card}) => {
    return (
        <div className={classes.card}>
            <div className={classes.image_block}>
                <img className={classes.image} src={card_image} alt='Card Image'/>
            </div>
            <div className={classes.title} id='hist'>
                {card.blackTitle} <span>{card.orangeTitle}</span>
            </div>
            <div className={classes.description}>
                {card.description}
            </div>
        </div>
    );
};

export default Card;