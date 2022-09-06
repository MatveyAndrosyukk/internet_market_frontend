import React, {FC} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../../static/images/manu_page_gamburger.png";
import Dish from "../../../../UI/dish/Dish";
// @ts-ignore
import classes from "./Dishes.module.css";
import {IDish} from "../../../../../types/dishes";

interface DishesProps {
    dishes: (IDish)[]
}

const Dishes: FC<DishesProps> = (
    {
        dishes
    }) => {
    return (
        <div className={classes.dishes}>
            {dishes.map(dish =>
                <Dish dish={dish}/>
            )}
        </div>
    );
};

export default Dishes;