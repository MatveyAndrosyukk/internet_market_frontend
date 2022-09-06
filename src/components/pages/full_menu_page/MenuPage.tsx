import React, {FC, useState} from 'react';
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
        <div className='full-menu'>
            <MenuNavbar
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}
                category={category}
                setCategory={setCategory}/>
            {category.includes('Напитки')
                ? <MenuBody dishes={dishes.filter(dish => dish.category === 'Напитки')}/>
                : <span/>
            }
            {category.includes('Еда')
                ? <MenuBody dishes={dishes.filter(dish => dish.category === 'Еда')}/>
                : <span/>
            }
            {category.includes('Закуски')
                ? <MenuBody dishes={dishes.filter(dish => dish.category === 'Закуски')}/>
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