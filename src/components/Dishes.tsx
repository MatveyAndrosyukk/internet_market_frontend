import React from 'react';
// @ts-ignore
import manu_page_hamburger from "../static/images/manu_page_gamburger.png";

const Dishes = () => {
    return (
        <div className='menu-page-content-dishes'>
            <div className='menu-page-prev-dish'>
                <span>&#8249;</span>
            </div>
            <div className='menu-page-content-dish'>
                <div className='menu-page-content-dish-image'>
                    <img className='menu-page-content-dish-img' src={manu_page_hamburger} alt='Hamburger'/>
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
            <div className='menu-page-next-dish'>
                <span>&#8250;</span>
            </div>
        </div>
    );
};

export default Dishes;