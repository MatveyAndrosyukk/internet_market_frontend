import React, {createContext, Dispatch, SetStateAction, useContext} from "react";
import {IDish, ITable, IUser} from "../types/types";
import {cartMock, dishesMock, tablesMock, usersMock} from "../data/store";
import Dishes from "../components/pages/greeting_page/menu/dishes/Dishes";

export interface GlobalContextValues {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>
    dishes: IDish[],
    setDishes: Dispatch<SetStateAction<IDish[]>>,
    cart: IDish[],
    setCart: Dispatch<SetStateAction<IDish[]>>,
    tables: ITable[],
    setTables: Dispatch<SetStateAction<ITable[]>>,
    users: IUser[],
    setUsers: Dispatch<SetStateAction<IUser[]>>,
    user: IUser | null,
    setUser: Dispatch<SetStateAction<IUser | null>>
}

export const GlobalContext = createContext<GlobalContextValues>({
    isAuth: false,
    setIsAuth: () => {},
    dishes: dishesMock,
    setDishes:() => {},
    cart: cartMock,
    setCart:() => {},
    tables: tablesMock,
    setTables: () => {},
    users: usersMock,
    setUsers: () => {},
    user: null,
    setUser: () => {}
})