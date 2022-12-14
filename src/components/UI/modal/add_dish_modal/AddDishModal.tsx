import React, {FC, useState} from 'react';
import Modal from "../Modal";
import InfoModal from "../info_modal/InfoModal";
// @ts-ignore
import addImage from '../../../../static/images/add_dish_image.png';
// @ts-ignore
import classes from './AddDishModal.module.css';
import Select from "../../select/Select";
import ImageLoader from "../../image_loader/ImageLoader";
import {useInput} from "../../../../hooks/useInput";
import DishesService from "../../../../api/DishesService";
import {useDispatch} from "react-redux";
import {addDishReducer} from "../../../../redux/reducers/dishesReducer";

interface AddDishModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
}

const AddDishModal: FC<AddDishModalProps> = (
    {
        modal,
        setModal
    }) => {
    const [infoModal, setInfoModal] = useState<boolean>(false)
    const dispatch = useDispatch();

    const image = useInput('', {isEmpty: true})
    const category = useInput('', {isEmpty: true})
    const title = useInput('', {isEmpty: true})
    const description = useInput('', {isEmpty: true})
    const price = useInput('', {isEmpty: true})

    const addDishToMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()

        let dish = {
            category: category.value,
            title: title.value,
            image: image.value,
            description: description.value,
            price: parseInt(price.value),
            count: 1,
            totalPrice: parseInt(price.value)
        }
        console.log(dish)
        DishesService.addDish(dish).then(() => {
            dispatch(addDishReducer(dish))
            setModal(false)
            setInfoModal(true)
            setTimeout(() => {
                setInfoModal(false)
            }, 2000)

            setInitValues()
        })
    }

    const setInitValues = (): void => {
        image.setValue('')
        image.setDirty(false)
        category.setValue('')
        category.setDirty(false)
        title.setValue('')
        title.setDirty(false)
        description.setValue('')
        description.setDirty(false)
        price.setValue('')
        price.setDirty(false)
    }

    return (
        <div>
            <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
                <div className={classes.text}>
                    ???????????????? <span> ??????????</span>
                </div>
                <form action='#'>
                    <div className={classes.modal_image}>
                        <ImageLoader image={image}/>
                    </div>
                    <div className={classes.modal_select}>
                        <div className={(category.isDirty && (category.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            ???????? ?????????????????? ??????????????
                        </div>
                        <label>?????????????? ??????????????????</label>
                        <div>
                            <Select
                                onBlur={() => {
                                    category.onBlurSelect()
                                }}
                                value={category.value}
                                onChange={(e) => {
                                    category.onChangeSelect(e)
                                }}
                                options={[
                                    {name: '??????', value: 'food'},
                                    {name: '??????????????', value: 'drinks'},
                                    {name: '??????????????', value: 'snacks'}
                                ]}
                                defaultValue={'??????????????????'}/>
                        </div>
                    </div>
                    <div className={classes.data}>
                        <div className={(title.isDirty && (title.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            ???????? ?????????????????? ??????????????
                        </div>
                        <label>?????????????? ????????????????</label>
                        <input type='text' value={title.value}
                               onBlur={() => title.onBlur()}
                               onChange={e => title.onChange(e)}/>
                    </div>
                    <div className={classes.data}>
                        <div className={(description.isDirty && (description.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            ???????? ?????????????????? ??????????????
                        </div>
                        <label>?????????????? ????????????????</label>
                        <input type='text' value={description.value}
                               onBlur={() => description.onBlur()}
                               onChange={e => description.onChange(e)}/>
                    </div>
                    <div className={classes.data}>
                        <div className={(price.isDirty && (price.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            ???????? ?????????????????? ??????????????
                        </div>
                        <label>?????????????? ????????</label>
                        <input type='number' value={price.value}
                               onBlur={() => price.onBlur()}
                               onChange={e => price.onChange(e)}/>
                    </div>
                    <div className={classes.button_block}>
                        <div className={classes.inner}>

                        </div>
                        <button disabled={!image.isInputValid || !category.isInputValid
                            || !title.isInputValid || !description.isInputValid || !price.isInputValid}
                                type='submit' onClick={e => addDishToMenu(e)}>????????????????
                        </button>
                    </div>
                </form>
            </Modal>
            <InfoModal modal={infoModal} setModal={setInfoModal}>
                <label>?????????? ?????????????? ??????????????????</label>
            </InfoModal>
        </div>
    );
};

export default AddDishModal;