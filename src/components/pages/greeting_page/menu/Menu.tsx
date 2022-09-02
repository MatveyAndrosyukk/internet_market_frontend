import React, {FC, useContext, useMemo, useState} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../static/images/manu_page_gamburger.png";
// @ts-ignore
import menu_page_bg from "../../../../static/images/menu_page_bg.png";
import Dishes from "./dishes/Dishes";
import {Link} from "react-router-dom";
import {IDish} from "../../../../types/types";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";

const Menu: FC = () => {
    const [index, setIndex] = useState<number>(0)
    const {dishes} = useContext<GlobalContextValues>(GlobalContext)
    const [threeDishes, setThreeDishes] = useState<IDish[]>(
        [dishes[index], dishes[index + 1], dishes[index + 2]]
    );

    useMemo(() => {
        setThreeDishes([dishes[index], dishes[index + 1], dishes[index + 2]])
    }, [index])

    return (
        <div className='menu-page'>
            <div className='container'>
                <div className='menu-page-content'>
                    <div className='menu-page-title'>
                        <div id='menu' className='menu-page-content-text'>
                            <Link className='menu-page-content-text-link' to={'/menu'}>Наше меню</Link>
                        </div>
                    </div>
                    <div className='dishes-list'>
                        <div className={
                            index == 0
                                ? 'menu-page-prev-dish disabled'
                                : 'menu-page-prev-dish'
                        }
                             onClick={() => setIndex(index - 1)}
                        >
                            <span>&#8249;</span>
                        </div>
                        <Dishes dishes={threeDishes}/>
                        <div className={
                            threeDishes[2]?.id === dishes[dishes.length - 1].id
                                ? 'menu-page-next-dish disabled'
                                : 'menu-page-next-dish'
                        }
                             onClick={() => setIndex(index + 1)}
                        >
                            <span>&#8250;</span>
                        </div>
                        <div className='menu-page-hidden'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;