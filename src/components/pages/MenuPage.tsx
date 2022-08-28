import React, {FC} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../static/images/manu_page_gamburger.png";
// @ts-ignore
import menu_page_bg from "../../static/images/menu_page_bg.png";
import Dishes from "../Dishes";
import {Link} from "react-router-dom";

const MenuPage:FC = () => {
    return (
        <div className='menu-page'>
            <div className='container'>
                <div className='menu-page-content'>
                    <div className='menu-page-title'>
                        <div className='menu-page-prev-page'>
                            <Link className='menu-page-prev-page-link' to={'/greetings'}>Back</Link>
                        </div>
                        <div className='menu-page-content-text'>
                            <a className='menu-page-content-text-link' href='#'>Наше меню</a>
                        </div>
                    </div>
                    <Dishes/>
                    <div className='menu-page-hidden'/>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;