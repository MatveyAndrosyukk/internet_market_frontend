import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../../static/images/menu_hamburger.png";
import {IDish, ITotalInfo} from "../../../../../types/types";
import {GlobalContext, GlobalContextValues} from "../../../../../context/context";

interface CartBodyDish {
    dish: IDish,
    deleteDish: (dish: IDish) => void,
    totalInfo: ITotalInfo,
    setTotalInfo: React.Dispatch<ITotalInfo>
}

const CartBodyDish: FC<CartBodyDish> = ({dish, deleteDish, totalInfo, setTotalInfo}) => {
    const {cart} = useContext<GlobalContextValues>(GlobalContext)
    const [dishItem, setDishItem] = useState<IDish>(dish)

    const addCount = (): void => {
        setDishItem({...dishItem, count: dishItem.count + 1, totalPrice: dishItem.totalPrice + dishItem.price})
        setTotalInfo({price: totalInfo.price + dishItem.price, count: totalInfo.count + 1})
    }

    return (
        <div className='cart-dish'>
            <div className='cart-dish-image'>
                <img src={dishItem.image} alt='dish'/>
            </div>
            <div className='cart-dish-description'>
                <div className='description-item'>
                    {dishItem.title}
                </div>
                <div className='description-item'>
                    Количество: {dishItem.count} шт.
                </div>
                <div className='description-item'>
                    {dishItem.totalPrice} руб.
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