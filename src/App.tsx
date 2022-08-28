import React, {useState} from 'react';
import './static/css/App.css';
import './static/css/History.css';
import './static/css/Navbar.css';
import './static/css/BookTable.css';
import './static/css/Cards.css';
import './static/css/Menu.css';
import './static/css/MenuPage.css';
import './components/UI/modal/Modal.css';
import MenuPage from "./components/pages/MenuPage";
import GreetingPage from "./components/pages/GreetingPage";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {routes} from "./router/Routes";
import AppRouter from "./router/AppRouter";
import {AuthContext} from "./context/context";


const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;