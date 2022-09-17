import {Dispatch} from "redux";
import {DishesAction, DishesActionTypes, IDish} from "../../types/dish";
import axios from "axios";

export const fetchDishes = () => {
    return async (dispatch: Dispatch<DishesAction>) => {
        try {
            dispatch({type: DishesActionTypes.FETCH_DISHES})
            const response = await axios.get<IDish[]>('https://internet-market-ma.herokuapp.com/dishes')
            dispatch({type: DishesActionTypes.FETCH_DISHES_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: DishesActionTypes.FETCH_DISHES_ERROR,
                payload: 'Fetch dishes method failed!'
            })
        }
    }
}