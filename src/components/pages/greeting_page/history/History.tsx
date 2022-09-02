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

const History:FC = () => {
    const {dishes, setDishes} = useContext<GlobalContextValues>(GlobalContext)

    return (
        <div className='history'>
            <div className='container'>
                <Cards/>
                <div className='history-content'>
                    <div className='history-text'>
                        <div className='history-title'>
                            Наша <span>История</span>
                        </div>
                        <div className='history-description'>
                            Как и у любого другого самобытного места, у нас есть своя, особая история.
                            Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана
                            застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось
                            навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
                        </div>
                        <div className='history-menu'>
                            <div className='history-menu-item'>
                                <div className='history-menu-item-number'>
                                    {dishes.filter(dish => dish.category === 'Напитки').length}
                                </div>
                                <div className='history-menu-item-text'>
                                    Напитки
                                </div>
                            </div>
                            <div className='history-menu-item'>
                                <div className='history-menu-item-number'>
                                    {dishes.filter(dish => dish.category === 'Еда').length}
                                </div>
                                <div className='history-menu-item-text'>
                                    Еда
                                </div>
                            </div>
                            <div className='history-menu-item'>
                                <div className='history-menu-item-number'>
                                    {dishes.filter(dish => dish.category === 'Закуски').length}
                                </div>
                                <div className='history-menu-item-text'>
                                    Закуски
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='history-images'>
                        <div className='history-image-1'>
                            <img className='history-img-1' src={history_image_one} alt='First image'/>
                        </div>
                        <div className='history-image-2'>
                            <img className='history-img-2' src={history_image_two} alt='Second image'/>
                        </div>
                        <div className='history-image-3'>
                            <img className='history-img-3' src={history_image_three} alt='Third image'/>
                        </div>
                        <div className='history-image-4'>
                            <img className='history-img-4' src={history_image_four} alt='Fourth image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;