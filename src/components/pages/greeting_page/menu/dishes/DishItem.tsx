import React, {FC, useContext} from 'react';
import {IDish} from "../../../../../types/types";
// @ts-ignore
import manu_page_hamburger from "../../../../../static/images/manu_page_gamburger.png";
import {GlobalContext, GlobalContextValues} from "../../../../../context/context";

interface DishItemProps{
    dish: IDish
}
const DishItem:FC<DishItemProps> = ({dish}) => {
    const {cart, setCart} = useContext<GlobalContextValues>(GlobalContext)

    const addToCart = () => {
        setCart([...cart, dish])
    }

    const deleteFromCart = () => {
        setCart(cart.filter(cartDish => cartDish.id !== dish.id))
    }

    return (
        <div>
            <div id={dish.id.toString()} className='menu-page-content-dish'>
                <div className='menu-page-content-dish-image'>
                    <img className='menu-page-content-dish-img'  src={dish.image} alt='Hamburger'/>
                    <div className='menu-page-content-dish-price'>
                        {dish.price} р.
                    </div>
                </div>
                <div className='menu-page-content-dish-title'>
                    {dish.title}
                </div>
                <div className='menu-page-content-dish-description'>
                    {dish.description}
                </div>
                <div className='menu-page-content-dish-button'>
                    {cart.includes(dish)
                        ? <a className='menu-page-content-dish-btn' onClick={() => deleteFromCart()}>УБРАТЬ</a>
                        : <a className='menu-page-content-dish-btn' onClick={() => addToCart()}>ДОБАВИТЬ</a>}
                </div>
            </div>
        </div>
    );
};

export default DishItem;