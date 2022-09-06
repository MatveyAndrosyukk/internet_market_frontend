import {CartAction, CartActionTypes, initialValue} from "../../types/cart";
import {IDish} from "../../types/dishes";

export const cartReducer = (state = initialValue, action: CartAction) => {
    switch (action.type){
        case CartActionTypes.CLEAN_CART:
            return {...state, cart: []}
        case CartActionTypes.ADD_DISH_TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
        case CartActionTypes.REMOVE_DISH_FROM_CART:
            return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
        default:
            return state
    }
}

export const addDishToCart = (payload: IDish) => ({type: CartActionTypes.ADD_DISH_TO_CART, payload})
export const removeDisFromCart = (payload: IDish) => ({type: CartActionTypes.REMOVE_DISH_FROM_CART, payload})
export const cleanCart = () => ({type: CartActionTypes.CLEAN_CART})
