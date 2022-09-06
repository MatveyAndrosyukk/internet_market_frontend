import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {GlobalContext} from "./context/context";


const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
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