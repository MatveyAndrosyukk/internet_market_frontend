import React, {createContext, useState} from "react";

export interface AuthContextValues{
    isAuth: boolean,
    setIsAuth: React.Dispatch<boolean>
}

export const AuthContext = createContext<AuthContextValues | null>(null)