import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {GlobalContext} from "./context/context";
import {cartMock, dishesMock, tablesMock, usersMock} from "./data/store";
import {IDish, ITable, IUser} from "./types/types";


const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [tables, setTables] = useState<ITable[]>(tablesMock)
    const [dishes, setDishes] = useState<IDish[]>(dishesMock)
    const [cart, setCart] = useState<IDish[]>(cartMock)
    const [users, setUsers] = useState<IUser[]>(usersMock)
    const [user, setUser] = useState<IUser | null>(null)

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
            tables, setTables,
            users, setUsers,
            user, setUser
        }}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
        </GlobalContext.Provider>
    );
};

export default App;