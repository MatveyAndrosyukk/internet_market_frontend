import React, {FC, useState} from 'react';
// @ts-ignore
import classes from "./MenuPage.module.css"
import MenuNavbar from "./navbar/MenuNavbar";
import MenuBody from "./body/MenuBody";
import Footer from "../../UI/footer/Footer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const MenuPage: FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('Закуски')
    const {dishes} = useTypedSelector(state => state.dishes)

    return (
        <div className={classes.full_menu}>
            <MenuNavbar
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}
                category={category}
                setCategory={setCategory}/>
            {category.includes('Напитки')
                && <MenuBody dishes={dishes.filter(dish => dish.category === 'Напитки')}/>
            }
            {category.includes('Еда')
                && <MenuBody dishes={dishes.filter(dish => dish.category === 'Еда')}/>
            }
            {category.includes('Закуски')
                && <MenuBody dishes={dishes.filter(dish => dish.category === 'Закуски')}/>
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