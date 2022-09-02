import React, {FC, useContext, useState} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../../static/images/menu_hamburger.png";
import {IDish} from "../../../../../types/types";
import {GlobalContext, GlobalContextValues} from "../../../../../context/context";
import dishes from "../../../greeting_page/menu/dishes/Dishes";


interface CartBodyDish {
    dish: IDish,
    deleteDish: (dish:IDish) => void
}

const CartBodyDish:FC<CartBodyDish> = ({dish, deleteDish}) => {
    const {setCart, cart} = useContext<GlobalContextValues>(GlobalContext)
    const [index, setIndex] = useState<number>(0)

    const addCount = ():void => {
        setIndex(cart.indexOf(dish))
        console.log(cart)
        console.log(dish)
        console.log(index)
        // let newCart = cart.splice(index, 0,
        //     {id: dish.id,
        //         title: dish.title,
        //         image: dish.image,
        //         count: dish.count+1,
        //         description: dish.description,
        //         category: dish.category,
        //         price:dish.price
        //     })
        // console.log(cart)
        // console.log(newCart)
        // setCart(newCart)
    }

    return (
        <div className='cart-dish'>
            <div className='cart-dish-image'>
                <img src={dish.image} alt='dish'/>
            </div>
            <div className='cart-dish-description'>
                <div className='description-item'>
                    {dish.title}
                </div>
                <div className='description-item'>
                    Количество: {dish.count} шт.
                </div>
                <div className='description-item'>
                    {dish.price} руб.
                </div>
                <div className='plus-count' onClick={addCount}>
                        <span>+</span>
                </div>
                <div className='cart-dish-button' onClick={() => deleteDish(dish)}>
                    <a>УБРАТЬ</a>
                </div>
            </div>
        </div>
    );
};

export default CartBodyDish;