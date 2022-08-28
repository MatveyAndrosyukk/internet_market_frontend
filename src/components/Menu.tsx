import React, {FC} from 'react';
// @ts-ignore
import menu_pizza from "../static/images/menu_pizza.png";
// @ts-ignore
import menu_hamburger from "../static/images/menu_hamburger.png";

const Menu:FC = () => {
    return (
        <div className='menu'>
            <div className='container'>
                <div className='menu-title'>
                    Наши <span>Блюда</span>
                </div>
                <div className='menu-content'>
                    <div className='menu-content-image'>
                        <img src={menu_pizza} alt='Pizza'/>
                    </div>
                    <div className='menu-content-dishes'>
                        <div className='menu-content-dishes-item'>
                            <div className='menu-item-image'>
                                <img src={menu_hamburger} alt='Hamburger'/>
                            </div>
                            <div className='menu-item-text'>
                                <div className='menu-item-text-name'>
                                    Гамбургер мини
                                </div>
                                <div className='menu-item-text-price'>
                                    220₽
                                </div>
                            </div>
                        </div>
                        <div className='menu-content-dishes-item'>
                            <div className='menu-item-image'>
                                <img src={menu_hamburger} alt='Hamburger'/>
                            </div>
                            <div className='menu-item-text'>
                                <div className='menu-item-text-name'>
                                    Гамбургер мини
                                </div>
                                <div className='menu-item-text-price'>
                                    220₽
                                </div>
                            </div>
                        </div>
                        <div className='menu-content-dishes-item'>
                            <div className='menu-item-image'>
                                <img src={menu_hamburger} alt='Hamburger'/>
                            </div>
                            <div className='menu-item-text'>
                                <div className='menu-item-text-name'>
                                    Гамбургер мини
                                </div>
                                <div className='menu-item-text-price'>
                                    220₽
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;