import React, {FC} from 'react';
// @ts-ignore
import manu_page_hamburger from "../static/images/manu_page_gamburger.png";

const Dish:FC = () => {
    return (
        <div>
            <div className='menu-page-content-dish'>
                <div className='menu-page-content-dish-image'>
                    <img className='menu-page-content-dish-img'  src={manu_page_hamburger} alt='Hamburger'/>
                    <div className='menu-page-content-dish-price'>
                        420
                    </div>
                </div>
                <div className='menu-page-content-dish-title'>
                    Гамбургер макси
                </div>
                <div className='menu-page-content-dish-description'>
                    Максимально толстый
                    слой мяса
                </div>
                <div className='menu-page-content-dish-button'>
                    <a className='menu-page-content-dish-btn' href='#'>ЗАКАЗАТЬ</a>
                </div>
            </div>
        </div>
    );
};

export default Dish;