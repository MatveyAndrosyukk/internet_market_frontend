import {IDish} from "./dish";

export interface IUser {
    token?: string,
    id?: number,
    email: string,
    name: string,
    password: string,
    phone: string,
    roles: string[],
    cart: IDish[]
}

export interface UserState {
    user: IUser | null,
    loading: boolean,
    error: string | null
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    SET_USER = 'SET_USER',
    ADD_DISH_TO_CART = 'ADD_DISH_TO_CART',
    REMOVE_DISH_FROM_CART = 'REMOVE_DISH_FROM_CART'
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: IUser
}

export interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: string
}

export interface SetUserAction {
    type: UserActionTypes.SET_USER,
    payload: IUser | null
}

export interface AddDishToCartAction {
    type: UserActionTypes.ADD_DISH_TO_CART,
    payload: IDish
}

export interface RemoveDishFromCartAction {
    type: UserActionTypes.REMOVE_DISH_FROM_CART,
    payload: IDish
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | SetUserAction
| AddDishToCartAction | RemoveDishFromCartAction

export const initValue: UserState = {
    user: null,
    loading: false,
    error: null
}
