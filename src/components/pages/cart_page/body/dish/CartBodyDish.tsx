import React, {FC, useState} from 'react';
// @ts-ignore
import classes from "./CartBodyDish.module.css"
import DishButton from "../../../../UI/button/dish_button/DishButton";
import {IDish} from "../../../../../types/dishes";
import {ITotalInfo} from "../CartBody";

interface CartBodyDish {
    dish: IDish,
    deleteDish: (dish: IDish) => void,
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
                    <div className={[classes.plus_count, classes.first_plus].join(' ')} onClick={addCount}>
                        <span>+</span>
                    </div>
                </div>
                <div className={classes.description_item}>
                    Цена: <span>{dishItem.totalPrice} руб.</span>
                </div>
                <div className={[classes.plus_count, classes.second_plus].join(' ')} onClick={addCount}>
                    <span>+</span>
                </div>
            </div>
            <div className={classes.button_block}>
                <DishButton onClick={() => deleteDish(dish)}>
                    УБРАТЬ
                </DishButton>
            </div>
        </div>
    );
};

export default CartBodyDish;