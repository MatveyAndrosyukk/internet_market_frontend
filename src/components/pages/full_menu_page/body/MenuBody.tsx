import React, {FC, useContext} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../static/images/manu_page_gamburger.png";
import {IDish} from "../../../../types/types";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import DishItem from "../../greeting_page/menu/dishes/DishItem";

interface MenuBodyDishes {
    dishes:IDish[],
    title:string
}
const MenuBody:FC<MenuBodyDishes> = ({dishes, title}) => {
    return (
        <div className='menu-body'>
            <div className='container'>
                <div className='menu-body-content'>
                    <div className='dishes'>
                        {dishes.map(dish =>
                            <DishItem dish={dish}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBody;