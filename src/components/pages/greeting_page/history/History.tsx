import React, {FC, useContext} from 'react';
import Cards from "./cards/Cards";
// @ts-ignore
import history_image_one from "../../../../static/images/history_image_one.png";
// @ts-ignore
import history_image_two from "../../../../static/images/history_image_two.png";
// @ts-ignore
import history_image_three from "../../../../static/images/history_image_three.png";
// @ts-ignore
import history_image_four from "../../../../static/images/history_image_four.png";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
// @ts-ignore
import classes from "./History.module.css"

const History:FC = () => {
    const {dishes, setDishes} = useContext<GlobalContextValues>(GlobalContext)

    return (
        <div className={classes.history}>
            <div className='container'>
                <Cards/>
                <div className={classes.history_content}>
                    <div className={classes.history_text}>
                        <div className={classes.history_title}>
                            Наша <span>История</span>
                        </div>
                        <div className={classes.history_description}>
                            Как и у любого другого самобытного места, у нас есть своя, особая история.
                            Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана
                            застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось
                            навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
                        </div>
                        <div className={classes.history_menu}>
                            <div className={classes.history_menu_item}>
                                <div className={classes.history_menu_item_number}>
                                    {dishes.filter(dish => dish.category === 'Напитки').length}
                                </div>
                                <div className={classes.history_menu_item_text}>
                                    Напитки
                                </div>
                            </div>
                            <div className={classes.history_menu_item}>
                                <div className={classes.history_menu_item_number}>
                                    {dishes.filter(dish => dish.category === 'Еда').length}
                                </div>
                                <div className={classes.history_menu_item_text}>
                                    Еда
                                </div>
                            </div>
                            <div className={classes.history_menu_item}>
                                <div className={classes.history_menu_item_number}>
                                    {dishes.filter(dish => dish.category === 'Закуски').length}
                                </div>
                                <div className={classes.history_menu_item_text}>
                                    Закуски
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.history_images}>
                        <div className={classes.history_image_1}>
                            <img className={classes.history_img_1} src={history_image_one} alt='First image'/>
                        </div>
                        <div className={classes.history_image_2}>
                            <img className={classes.history_img_2} src={history_image_two} alt='Second image'/>
                        </div>
                        <div className={classes.history_image_3}>
                            <img className={classes.history_img_3} src={history_image_three} alt='Third image'/>
                        </div>
                        <div className={classes.history_image_4}>
                            <img className={classes.history_img_4} src={history_image_four} alt='Fourth image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;