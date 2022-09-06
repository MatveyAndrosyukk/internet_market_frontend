import React, {FC} from 'react';
// @ts-ignore
import classes from "./MenuBody.module.css"
import Dish from "../../../UI/dish/Dish";
import {IDish} from "../../../../types/dishes";

interface MenuBodyDishes {
    dishes: IDish[]
}

const MenuBody: FC<MenuBodyDishes> = (
    {
        dishes
    }) => {
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