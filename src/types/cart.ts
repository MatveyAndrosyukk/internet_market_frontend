import {IDish} from "./dishes";

export const enum CartActionTypes {
    ADD_DISH_TO_CART = 'ADD_DISH_TO_CART',
    REMOVE_DISH_FROM_CART = 'REMOVE_DISH_FROM_CART',
    CLEAN_CART = 'CLEAN_CART'
}

export interface AddDishToCartAction {
    type: CartActionTypes.ADD_DISH_TO_CART,
    payload: IDish
}

export interface RemoveDishFromCartAction {
    type: CartActionTypes.REMOVE_DISH_FROM_CART,
    payload: IDish
}

export interface CleanCartAction {
    type: CartActionTypes.CLEAN_CART
}

export type CartAction = AddDishToCartAction | RemoveDishFromCartAction | CleanCartAction


export interface CartState {
    cart: IDish[]
}

export const initialValue:CartState = {
    cart: []
}