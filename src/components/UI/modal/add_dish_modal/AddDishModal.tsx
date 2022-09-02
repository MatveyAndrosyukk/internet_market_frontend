import React, {FC, useContext, useState} from 'react';
import Modal from "../Modal";
import InfoModal from "../info-modal/InfoModal";
// @ts-ignore
import addImage from '../../../../static/images/add_dish_image.png';
import Select from "../../select/Select";
import {IDish} from "../../../../types/types";
import ImageLoader from "../../image_loader/ImageLoader";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";

interface AddDishModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
}

const AddDishModal: FC<AddDishModalProps> = ({modal, setModal}) => {
    const {dishes, setDishes} = useContext<GlobalContextValues>(GlobalContext)
    const [infoModal, setInfoModal] = useState<boolean>(false)
    const [dish, setDish] = useState<IDish>(
        {id: 0, image: '', count: 0, price: 0, title: '', description: '', category: ''}
    )

    const addDishToMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        setDish({...dish, id:Date.now()})
        setDishes([...dishes, dish])

        setModal(false)
        setInfoModal(true)
        setTimeout(() => {
            setInfoModal(false)
        }, 2000)

        setDish({id: 0, image: '', count: 0, price: 0, title: '', description: '', category: ''})
    }

    return (
        <div>
            <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
                <div className='text'>
                    Добавить <span> блюдо</span>
                </div>
                <form action='#'>
                    <button type='button' onClick={() => {
                        setDish({...dish, id: Date.now()})
                        console.log(dish)
                        console.log(dishes)
                    }}>ere</button>
                    <div className='modal-image'>
                        <ImageLoader dish={dish} setDish={setDish}/>
                    </div>
                    <div className='modal-select'>
                        <label>Укажите категорию</label>
                        <div>
                            <Select value={dish.category}
                                    onChange={(e) => {
                                        setDish({...dish, category: e.target.value})
                                    }}
                                    options={[
                                        {name: 'Еда', value: 'Еда'},
                                        {name: 'Напитки', value: 'Напитки'},
                                        {name: 'Закуски', value: 'Закуски'}
                                    ]}
                                    defaultValue={'Категория'}/>
                        </div>
                    </div>
                    <div className='data'>
                        <label>Укажите название</label>
                        <input type='text' value={dish.title} onChange={e => setDish({...dish, title: e.target.value})}/>
                    </div>
                    <div className='data'>
                        <label>Укажите описание</label>
                        <input type='tel' value={dish.description} onChange={e => setDish({...dish, description: e.target.value})}/>
                    </div>
                    <div className='data'>
                        <label>Укажите цену</label>
                        <input type='number' value={dish.price} onChange={e => setDish({...dish, price: parseInt(e.target.value)})}/>
                    </div>
                    <div className='btn'>
                        <div className='inner'>

                        </div>
                        <button type='submit' onClick={e => addDishToMenu(e)}>Добавить</button>
                    </div>
                </form>
            </Modal>
            <InfoModal modal={infoModal} setModal={setInfoModal}>
                <label>Блюдо успешно добавлено</label>
            </InfoModal>
        </div>
    );
};

export default AddDishModal;