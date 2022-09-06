import {DishActionTypes, DishesAction, DishesState, IDish, initialState} from "../../types/dishes";

export const dishesReducer = (state = initialState, action: DishesAction): DishesState => {
    switch (action.type){
        case DishActionTypes.ADD_DISH:
            return {...state, dishes: [...state.dishes, action.payload]}
        default:
            return state
    }
}

export const addDishAction = (payload: IDish) => ({type: DishActionTypes.ADD_DISH, payload})