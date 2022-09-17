import React, {FC} from 'react';
// @ts-ignore
import classes from "./MenuBody.module.css"
import Dish from "../../../UI/dish/Dish";
import {IDish} from "../../../../types/dish";
import Loader from "../../../UI/loader/Loader";

interface MenuBodyDishes {
    dishes: IDish[] | undefined,
    loading: boolean
}

const MenuBody: FC<MenuBodyDishes> = (
    {
        dishes,
        loading
    }) => {

    return (
        <div className={classes.body}>
            <div className='container'>
                <div className={classes.content}>
                    {loading
                        ? <Loader/>
                        :
                        <div className={classes.dishes}>
                            {dishes?.map(dish =>
                                <Dish key={dish.id} dish={dish}/>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuBody;