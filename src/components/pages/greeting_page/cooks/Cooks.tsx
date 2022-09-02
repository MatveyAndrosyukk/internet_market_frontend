import React from 'react';
// @ts-ignore
import firstCook from "../../../../static/images/cook_1.png";
// @ts-ignore
import secondCook from "../../../../static/images/cook_2.png";
// @ts-ignore
import thirdCook from "../../../../static/images/cook_3.png";

const Cooks = () => {
    return (
        <div className='cooks'>
            <div className='container'>
                <div className='content'>
                    <div className='title'>
                        Наши <span>Повара</span>
                    </div>
                    <div className='images'>
                        <div className='cook-image'>
                            <img src={firstCook} alt='Cook'/>
                        </div>
                        <div className='cook-image'>
                            <img src={secondCook} alt='Cook'/>
                        </div>
                        <div className='cook-image'>
                            <img src={thirdCook} alt='Cook'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cooks;