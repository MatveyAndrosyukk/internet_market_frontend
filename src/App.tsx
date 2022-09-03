import React, {useEffect, useState} from 'react';
import './App.css';
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