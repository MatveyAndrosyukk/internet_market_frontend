import React, {useEffect, useState} from 'react';
import './App.css';
import './components/pages/greeting_page/history/History.css';
import './components/pages/greeting_page/navbar/Navbar.css';
import './components/UI/footer/Footer.css';
import './components/pages/greeting_page/history/cards/Cards.css';
import './components/pages/full_menu_page/navbar/MenuNavbar.css';
import './components/pages/greeting_page/cooks/Cooks.css';
import './components/pages/greeting_page/menu/Menu.css';
import './components/UI/modal/Modal.css';
import './components/pages/cart_page/CartPage.css'
import './components/pages/cart_page/body/modal/OrderDishModal.css'
import './components/pages/cart_page/body/CartBody.css'
import './components/pages/full_menu_page/body/MenuBody.css'
import './components/pages/cart_page/body/table/CartBodyTable.css'
import './components/UI/modal/info-modal/InfoModal.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {GlobalContext} from "./context/context";
import {cartMock, dishesMock, tablesMock} from "./data/store";
import {IDish, ITable} from "./types/types";


const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [tables, setTables] = useState<ITable[]>(tablesMock)
    const [dishes, setDishes] = useState<IDish[]>(dishesMock)
    const [cart, setCart] = useState<IDish[]>(cartMock)

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return (
        <GlobalContext.Provider value={{
            isAuth, setIsAuth,
            dishes, setDishes,
            cart, setCart,
            tables, setTables
        }}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
        </GlobalContext.Provider>
    );
};

export default App;