import React, {FC} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../static/images/manu_page_gamburger.png";
// @ts-ignore
import classes from "./Dish.module.css";
import {IDish} from "../../../types/dishes";
import {useDispatch} from 'react-redux';
import {addDishToCart, removeDisFromCart} from "../../../redux/reducers/cartReducer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface DishItemProps{
    dish: IDish
}
const Dish:FC<DishItemProps> = ({dish}) => {
    const dispatch = useDispatch()
    const {cart} = useTypedSelector(state => state.cart)

    const addToCart = () => {
        dispatch(addDishToCart(dish))
    }

    const deleteFromCart = () => {
        dispatch(removeDisFromCart(dish))
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