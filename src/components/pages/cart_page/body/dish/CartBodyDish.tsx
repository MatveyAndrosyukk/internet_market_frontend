import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../../static/images/menu_hamburger.png";
import {IDish, ITotalInfo} from "../../../../../types/types";
import {GlobalContext, GlobalContextValues} from "../../../../../context/context";
// @ts-ignore
import classes from "./CartBodyDish.module.css"

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
        <div className={classes.cart_dish}>
            <div className={classes.image_block}>
                <img src={dishItem.image} alt='dish'/>
            </div>
            <div className={classes.description}>
                <div className={classes.description_item}>
                    {dishItem.title}
                </div>
                <div className={classes.description_item}>
                    Количество: <span>{dishItem.count} шт.</span>
                </div>
                <div className={classes.description_item}>
                    Цена: <span>{dishItem.totalPrice} руб.</span>
                </div>
                <div className={classes.plus_count} onClick={addCount}>
                    <span>+</span>
                </div>
                <div className={classes.button_block} onClick={() => deleteDish(dish)}>
                    <a>УБРАТЬ</a>
                </div>
            </div>
        </div>
    );
};

export default CartBodyDish;