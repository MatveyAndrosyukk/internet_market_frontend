import React, {FC} from 'react';
import Dish from "../../../../UI/dish/Dish";
// @ts-ignore
import classes from "./Dishes.module.css";
import {IDish} from "../../../../../types/dish";

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
                <Dish key={dish.id} dish={dish}/>
            )}
        </div>
    );
};

export default Dishes;