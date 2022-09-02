import React, {FC} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../../static/images/manu_page_gamburger.png";
import {IDish} from "../../../../../types/types";
import DishItem from "./DishItem";

interface DishesProps{
    dishes: (IDish)[]
}
const Dishes:FC<DishesProps> = ({dishes}) => {
    return (
        <div className='menu-page-content-dishes'>
            {dishes.map(dish =>
                <DishItem dish={dish}/>
            )}
        </div>
    );
};

export default Dishes;