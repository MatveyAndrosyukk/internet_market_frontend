import React, {FC} from 'react';
// @ts-ignore
import classes from "./MenuBody.module.css"
// @ts-ignore
import manu_page_hamburger from "../../../../static/images/manu_page_gamburger.png";
import {IDish} from "../../../../types/types";
import Dish from "../../../UI/dish/Dish";

interface MenuBodyDishes {
    dishes:IDish[]
}
const MenuBody:FC<MenuBodyDishes> = ({dishes}) => {
    return (
        <div className={classes.body}>
            <div className='container'>
                <div className={classes.content}>
                    <div className={classes.dishes}>
                        {dishes.map(dish =>
                            <Dish dish={dish}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBody;