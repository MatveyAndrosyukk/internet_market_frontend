import {combineReducers} from "redux";
import {dishesReducer} from "./dishesReducer";
import {cartReducer} from "./cartReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers(
    {
        dishes: dishesReducer,
        cart: cartReducer,
        users: usersReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>