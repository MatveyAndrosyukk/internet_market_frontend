import React, {FC} from 'react';
import {ICard} from "../../../../../types/types";
import Card from "./card/Card";
// @ts-ignore
import classes from "./Cards.module.css"

const Cards:FC = () => {
    const cards:ICard[] = [
        {id: 1, blackTitle: 'Магическая', orangeTitle: 'Атмосфера', description: 'В нашем заведении царит магическая атмосфера наполненная вкусными ароматами'},
        {id: 2, blackTitle: 'Лучшее качество', orangeTitle: 'Еды', description: 'Качество нашей Еды - отменное!'},
        {id: 3, blackTitle: 'Недорогая', orangeTitle: 'Еда', description: 'Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!'}
    ]

    return (
        <div className={classes.cards}>
            {cards.map(card =>
                <Card card={card}/>
            )}
        </div>
    );
};

export default Cards;