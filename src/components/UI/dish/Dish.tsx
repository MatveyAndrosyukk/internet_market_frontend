import React, {FC, useContext} from 'react';
import {IDish} from "../../../types/types";
// @ts-ignore
import manu_page_hamburger from "../../../static/images/manu_page_gamburger.png";
import {GlobalContext, GlobalContextValues} from "../../../context/context";
// @ts-ignore
import classes from "./Dish.module.css";

interface DishItemProps{
    dish: IDish
}
const Dish:FC<DishItemProps> = ({dish}) => {
    const {cart, setCart} = useContext<GlobalContextValues>(GlobalContext)

    const addToCart = () => {
        setCart([...cart, dish])
    }

    const deleteFromCart = () => {
        setCart(cart.filter(cartDish => cartDish.id !== dish.id))
    }

    return (
        <div>
            <div id={dish.id.toString()} className={classes.dish}>
                <div className={classes.dish_image_block}>
                    <img className={classes.dish_image} src={dish.image} alt='Hamburger'/>
                    <div className={classes.dish_price}>
                        {dish.price} р.
                    </div>
                </div>
                <div className={classes.dish_title}>
                    {dish.title}
                </div>
                <div className={classes.dish_description}>
                    {dish.description}
                </div>
                <div className={classes.dish_button_block}>
                    {cart.includes(dish)
                        ? <a className={classes.dish_button} onClick={() => deleteFromCart()}>УБРАТЬ</a>
                        : <a className={classes.dish_button} onClick={() => addToCart()}>ДОБАВИТЬ</a>}
                </div>
            </div>
        </div>
    );
};

export default Dish;