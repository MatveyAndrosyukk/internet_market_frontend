import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import classes from "./MenuPage.module.css"
import MenuNavbar from "./navbar/MenuNavbar";
import MenuBody from "./body/MenuBody";
import Footer from "../../UI/footer/Footer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDishesActions} from "../../../hooks/use_actions/useDishesActions";
import {useUserActions} from "../../../hooks/use_actions/useUserActions";
import {IDish} from "../../../types/dish";
import dishes from "../greeting_page/menu/dishes/Dishes";
import dish from "../../UI/dish/Dish";

const MenuPage: FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('snacks')
    const [dishesByCategory, setDishesByCategory] = useState<IDish[]>()
    const {dishes, loading} = useTypedSelector(state => state.dishes)

    useEffect(() => {
        setDishesByCategory(dishes.filter(dish => dish.category === category))
    }, [category])

    return (
        <div className={classes.full_menu}>
            <MenuNavbar
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}
                category={category}
                setCategory={setCategory}/>
            <MenuBody dishes={dishesByCategory} loading={loading}/>
            <Footer
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}/>
        </div>
    );
};

export default MenuPage;