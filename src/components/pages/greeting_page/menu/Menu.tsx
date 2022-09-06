import React, {FC, useMemo, useState} from 'react';
// @ts-ignore
import classes from "./Menu.module.css"
import Dishes from "./dishes/Dishes";
import {Link} from "react-router-dom";
import {IDish} from "../../../../types/dishes";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const Menu: FC = () => {
    const [index, setIndex] = useState<number>(0)
    const {dishes} = useTypedSelector(state => state.dishes)
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
                            index === 0
                                ? [classes.prev_dish, classes.disabled, classes.left_arrow].join(' ')
                                : [classes.prev_dish, classes.left_arrow].join(' ')
                        }
                             onClick={() => setIndex(index - 1)}
                        >
                            <span>&#8249;</span>
                        </div>
                        <div className={
                            index === 0
                                ? [classes.prev_dish, classes.disabled, classes.top_arrow].join(' ')
                                : [classes.prev_dish, classes.top_arrow].join(' ')
                        }
                             onClick={() => setIndex(index - 1)}
                        >
                            <span>↑</span>
                        </div>
                        <Dishes dishes={threeDishes}/>
                        <div className={
                            threeDishes[2]?.id === dishes[dishes.length - 1].id
                                ? [classes.next_dish, classes.disabled].join(' ')
                                : [classes.next_dish, classes.left_arrow].join(' ')
                        }
                             onClick={() => setIndex(index + 1)}
                        >
                            <span>&#8250;</span>
                        </div>
                        <div className={
                            threeDishes[2]?.id === dishes[dishes.length - 1].id
                                ? [classes.next_dish, classes.disabled].join(' ')
                                : [classes.next_dish, classes.top_arrow].join(' ')
                        }
                             onClick={() => setIndex(index + 1)}
                        >
                            <span>↓</span>
                        </div>
                        <div className={classes.hidden}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;