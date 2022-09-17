export interface IDish {
    id?: number,
    category: string,
    description: string,
    image: any,
    price: number,
    title: string,
    count: number,
    totalPrice: number
}

export interface DishesState {
    dishes: IDish[],
    loading: boolean,
    error: string | null
}

export enum DishesActionTypes {
    FETCH_DISHES = 'FETCH_DISHES',
    FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS',
    FETCH_DISHES_ERROR = 'FETCH_DISHES_ERROR',
    FETCH_DISHES_BY_CATEGORY = 'FETCH_DISHES_BY_CATEGORY',
    ADD_DISH = 'ADD_DISH'
}

export interface FetchDishesAction {
    type: DishesActionTypes.FETCH_DISHES
}

export interface FetchDishesSuccessAction {
    type: DishesActionTypes.FETCH_DISHES_SUCCESS,
    payload: IDish[]
}

export interface FetchDishesErrorAction {
    type: DishesActionTypes.FETCH_DISHES_ERROR,
    payload: string
}

export interface AddDishAction {
    type: DishesActionTypes.ADD_DISH,
    payload: IDish
}

export interface FetchDishesByCategoryAction {
    type: DishesActionTypes.FETCH_DISHES_BY_CATEGORY
    payload: IDish[]
}

export type DishesAction = FetchDishesAction | FetchDishesSuccessAction | FetchDishesErrorAction | AddDishAction
    | FetchDishesByCategoryAction

export const initValue: DishesState = {
    dishes: [],
    loading: false,
    error: null
}