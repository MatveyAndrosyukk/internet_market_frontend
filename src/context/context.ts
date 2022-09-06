import {createContext, Dispatch, SetStateAction} from "react";

export interface GlobalContextValues {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextValues>({
    isAuth: false,
    setIsAuth: () => {}
})