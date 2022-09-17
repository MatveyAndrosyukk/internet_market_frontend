import React, {FC} from 'react';
// @ts-ignore
import classes from './ImageLoader.module.css'
// @ts-ignore
import addImage from "../../../static/images/add_dish_image.png";

interface ImageLoader {
    image: any
}
const ImageLoader:FC<ImageLoader> = ({image}) => {

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
                       onBlur={() => image.onBlur()}
                       onChange={e => image.onChangeImage(e)}/>
            </div>
        </div>
    );
};

export default ImageLoader;