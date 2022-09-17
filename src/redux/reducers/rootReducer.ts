import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {dishesReducer} from "./dishesReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        dishes: dishesReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>