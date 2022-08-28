import React, {FC} from 'react';

// @ts-ignore
import card_image from "../static/images/card_image.png";

const Cards:FC = () => {
    return (
        <div className='cards'>
            <div className='card'>
                <div className='card-image'>
                    <img className='card-img' src={card_image} alt='Card Image'/>
                </div>
                <div className='card-title'>
                    Магическая <span>Атмосфера</span>
                </div>
                <div className='card-description'>
                    В нашем заведении царит магическая атмосфера
                    наполненная вкусными ароматами
                </div>
            </div>
            <div className='card'>
                <div className='card-image'>
                    <img className='card-img' src={card_image} alt='Card Image'/>
                </div>
                <div className='card-title'>
                    Лучшее качество Еды
                </div>
                <div className='card-description'>
                    Качество нашей
                    Еды - отменное!
                </div>
            </div>
            <div className='card'>
                <div className='card-image'>
                    <img className='card-img' src={card_image} alt='Card Image'/>
                </div>
                <div className='card-title'>
                    Недорогая Еда
                </div>
                <div className='card-description'>
                    Стоимость нашей Еды
                    зависит только от ее
                    количества. Качество
                    всегда на высоте!
                </div>
            </div>
        </div>
    );
};

export default Cards;