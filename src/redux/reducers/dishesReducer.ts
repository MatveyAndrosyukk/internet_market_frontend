import {DishesAction, DishesActionTypes, DishesState, IDish, initValue} from "../../types/dish";

export const dishesReducer = (state = initValue, action: DishesAction):DishesState => {
    switch (action.type) {
        case DishesActionTypes.FETCH_DISHES:
            return {loading: true, error: null, dishes: []}
        case DishesActionTypes.FETCH_DISHES_SUCCESS:
            return {loading: false, error: null, dishes: action.payload}
        case DishesActionTypes.FETCH_DISHES_ERROR:
            return {loading: false, error: action.payload, dishes: []}
        case DishesActionTypes.FETCH_DISHES_BY_CATEGORY:
            return {loading: false, error: null, dishes: action.payload}
        case DishesActionTypes.ADD_DISH:
            return {loading: false, error: null, dishes: [...state.dishes, action.payload]}
        default:
            return state
    }
}

export const addDishReducer = (payload: IDish) => ({type: DishesActionTypes.ADD_DISH, payload})