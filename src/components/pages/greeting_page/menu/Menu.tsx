import React, {FC, useContext, useMemo, useState} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../../static/images/manu_page_gamburger.png";
// @ts-ignore
import classes from "./Menu.module.css"
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
        <div className={classes.menu}>
            <div className='container'>
                <div className={classes.content}>
                    <div className={classes.title}>
                        <div id='menu' className={classes.content_text}>
                            <Link className={classes.content_text_link} to={'/menu'}>Наше меню</Link>
                        </div>
                    </div>
                    <div className={classes.dishes_list}>
                        <div className={
                            index == 0
                                ? [classes.prev_dish, classes.disabled].join(' ')
                                : classes.prev_dish
                        }
                             onClick={() => setIndex(index - 1)}
                        >
                            <span>&#8249;</span>
                        </div>
                        <Dishes dishes={threeDishes}/>
                        <div className={
                            threeDishes[2]?.id === dishes[dishes.length - 1].id
                                ? [classes.next_dish, classes.disabled].join(' ')
                                : classes.next_dish
                        }
                             onClick={() => setIndex(index + 1)}
                        >
                            <span>&#8250;</span>
                        </div>
                        <div className={classes.hidden}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;