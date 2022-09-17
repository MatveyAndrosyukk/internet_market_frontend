import React, {FC, useState} from 'react';
// @ts-ignore
import classes from "./CartBodyDish.module.css"
import DishButton from "../../../../UI/button/dish_button/DishButton";
import {ITotalInfo} from "../CartBody";
import {IDish} from "../../../../../types/dish";
import {IUser} from "../../../../../types/user";

interface CartBodyDish {
    dish: IDish,
    deleteDish: (dishId: number | undefined) => void,
    totalInfo: ITotalInfo,
    setTotalInfo: React.Dispatch<ITotalInfo>
}

const CartBodyDish: FC<CartBodyDish> = (
    {
        dish,
        deleteDish,
        totalInfo,
        setTotalInfo
    }) => {
    const [cartItem, setCartItem] = useState<IDish>(dish)

    const addCount = (): void => {
        setCartItem({...cartItem, count: cartItem.count + 1, totalPrice: cartItem.totalPrice + cartItem.price})
        setTotalInfo({price: totalInfo.price + cartItem.price, count: totalInfo.count + 1})
    }

    return (
        <div className={classes.cart_dish}>
            <div className={classes.image_block}>
                <img src={cartItem.image} alt='dish'/>
            </div>
            <div className={classes.description}>
                <div className={classes.description_item}>
                    {cartItem.title}
                </div>
                <div className={classes.description_item}>
                    Количество: <span>{cartItem.count} шт.</span>
                    <div className={[classes.plus_count, classes.first_plus].join(' ')} onClick={addCount}>
                        <span>+</span>
                    </div>
                </div>
                <div className={classes.description_item}>
                    Цена: <span>{cartItem.totalPrice} руб.</span>
                </div>
                <div className={[classes.plus_count, classes.second_plus].join(' ')} onClick={addCount}>
                    <span>+</span>
                </div>
            </div>
            <div className={classes.button_block}>
                <DishButton onClick={() => deleteDish(cartItem.id)}>
                    УБРАТЬ
                </DishButton>
            </div>
        </div>
    );
};

export default CartBodyDish;