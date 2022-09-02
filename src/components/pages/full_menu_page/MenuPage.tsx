import React, {FC, useContext, useState} from 'react';

// @ts-ignore
import logo from '../../../static/images/logo.png';
import MenuNavbar from "./navbar/MenuNavbar";
import MenuBody from "./body/MenuBody";
import Footer from "../../UI/footer/Footer";
import {dishesMock} from "../../../data/store";
import {GlobalContext, GlobalContextValues} from "../../../context/context";

const MenuPage: FC = () => {
    const {dishes} = useContext<GlobalContextValues>(GlobalContext)
    const [modal, setModal] = useState<boolean>(false)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('Закуски')


    return (
        <div className='full-menu'>
            <MenuNavbar
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}
                category={category}
                setCategory={setCategory}/>
            {category.includes('Напитки')
                ? <MenuBody title={'Напитки'} dishes={dishes.filter(dish => dish.category === 'Напитки')}/>
                : <span/>
            }
            {category.includes('Еда')
                ? <MenuBody title={'Еда'} dishes={dishes.filter(dish => dish.category === 'Еда')}/>
                : <span/>
            }
            {category.includes('Закуски')
                ? <MenuBody title={'Закуски'} dishes={dishes.filter(dish => dish.category === 'Закуски')}/>
                : <span/>
            }
            <Footer
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}/>
        </div>
    );
};

export default MenuPage;