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
    setDish: React.Dispatch<IDish>,
    image: any
}
const ImageLoader:FC<ImageLoader> = ({dish, setDish, image}) => {
    // const changeImage = (e: any):void => {
    //     let url = URL.createObjectURL(e.target.files[0])
    //     setDish({...dish, image: url})
    // }

    return (
        <div className={classes.image_loader}>
            <div className={classes.image}>
                {image.value
                ?<img id='chosen-image' src={image.value} alt='add image'/>
                :<img id='chosen-image' src={addImage} alt='add image'/>}
            </div>
            <div className={classes.file}>
                <label htmlFor={'upload-button'}>
                    <i className="fa-solid fa-upload"/>
                </label>
                <input type='file' id='upload-button' accept='image/*'
                       onBlur={e => image.onBlur(e)}
                       onChange={e => image.onChangeImage(e)}/>
            </div>
        </div>
    );
};

export default ImageLoader;