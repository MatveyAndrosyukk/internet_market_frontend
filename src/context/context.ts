import React, {createContext, Dispatch, SetStateAction, useContext} from "react";
import {IDish, ITable} from "../types/types";
import {cartMock, dishesMock, tablesMock} from "../data/store";
import Dishes from "../components/pages/greeting_page/menu/dishes/Dishes";

export interface GlobalContextValues {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>
    dishes: IDish[],
    setDishes: Dispatch<SetStateAction<IDish[]>>,
    cart: IDish[],
    setCart: Dispatch<SetStateAction<IDish[]>>,
    tables: ITable[],
    setTables: Dispatch<SetStateAction<ITable[]>>
}

export const GlobalContext = createContext<GlobalContextValues>({
    isAuth: false,
    setIsAuth: () => {},
    dishes: dishesMock,
    setDishes:() => {},
    cart: cartMock,
    setCart:() => {},
    tables: tablesMock,
    setTables: () => {}
})