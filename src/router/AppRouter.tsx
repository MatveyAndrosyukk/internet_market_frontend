import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import GreetingPage from "../components/pages/GreetingPage";
import MenuPage from "../components/pages/MenuPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'greetings'} element={<GreetingPage/>}>
            </Route>
            <Route path={'menu'} element={<MenuPage/>}>
            </Route>
            <Route path={'*'} element={<Navigate to={'/greetings'}/>}>
            </Route>
        </Routes>
    );
};

export default AppRouter;