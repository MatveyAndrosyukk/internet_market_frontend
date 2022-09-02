import React, {FC, useState} from 'react';
// @ts-ignore
import classes from './ImageLoader.module.css'
// @ts-ignore
import addImage from "../../../static/images/add_dish_image.png";
// @ts-ignore
import manu_page_hamburger from "../../manu_page_gamburger.png";
import {IDish} from "../../../types/types";

interface ImageLoader {
    dish: IDish,
    setDish: React.Dispatch<IDish>
}
const ImageLoader:FC<ImageLoader> = ({dish, setDish}) => {
    const changeImage = (e: any):void => {
        let url = URL.createObjectURL(e.target.files[0])
        setDish({...dish, image: url})
    }
    return (
        <div className={classes.image_loader}>
            <div className={classes.image}>
                {dish.image
                ?<img id='chosen-image' src={dish.image} alt='add image'/>
                :<img id='chosen-image' src={addImage} alt='add image'/>}
            </div>
            <div className={classes.file}>
                <label htmlFor={'upload-button'}>
                    <i className="fa-solid fa-upload"/>
                </label>
                <input type='file' id='upload-button' accept='image/*' onChange={e => changeImage(e)}/>
            </div>
        </div>
    );
};

export default ImageLoader;