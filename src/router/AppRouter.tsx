import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import GreetingPage from "../components/pages/greeting_page/GreetingPage";
import MenuPage from "../components/pages/full_menu_page/MenuPage";
import CartPage from "../components/pages/cart_page/CartPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'greetings'} element={<GreetingPage/>}>
            </Route>
            <Route path={'menu'} element={<MenuPage/>}>
            </Route>
            <Route path={'cart'} element={<CartPage/>}>
            </Route>
            <Route path={'*'} element={<Navigate to={'/greetings'}/>}>
            </Route>
        </Routes>
    );
};

export default AppRouter;