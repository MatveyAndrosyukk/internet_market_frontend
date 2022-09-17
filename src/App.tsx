import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {GlobalContext} from "./context/context";
import {useUserActions} from "./hooks/use_actions/useUserActions";
import {useDishesActions} from "./hooks/use_actions/useDishesActions";


const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const {fetchUserByEmail} = useUserActions()
    const {fetchDishes} = useDishesActions()

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    useEffect(() => {
        let email = localStorage.getItem('user_email')
        email && fetchUserByEmail(email)
    }, [])

    useEffect(() => {
        fetchDishes()
    }, [])

    return (
        <GlobalContext.Provider value={{
            isAuth, setIsAuth
        }}>
                <BrowserRouter basename={'/internet_market_frontend'}>
                    <AppRouter/>
                </BrowserRouter>
        </GlobalContext.Provider>
    );
};

export default App;