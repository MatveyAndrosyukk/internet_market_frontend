import React from 'react';
// @ts-ignore
import classes from "./Cooks.module.css"
// @ts-ignore
import firstCook from "../../../../static/images/cook_1.png";
// @ts-ignore
import secondCook from "../../../../static/images/cook_2.png";
// @ts-ignore
import thirdCook from "../../../../static/images/cook_3.png";

const Cooks = () => {
    return (
        <div className={classes.cooks}>
            <div className='container'>
                <div className={classes.content}>
                    <div className={classes.title}>
                        Наши <span>Повара</span>
                    </div>
                    <div className={classes.images}>
                        <div className={classes.image_block}>
                            <img src={firstCook} alt='Cook'/>
                        </div>
                        <div className={classes.image_block}>
                            <img src={secondCook} alt='Cook'/>
                        </div>
                        <div className={classes.image_block}>
                            <img src={thirdCook} alt='Cook'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cooks;