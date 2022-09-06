import {dishesMock} from "../redux/mock_objects/dishesMock";

export interface IDish {
    id:number,
    image: string,
    count: number,
    price:number,
    totalPrice:number,
    title:string,
    description:string,
    category: string
}

export enum DishActionTypes {
    ADD_DISH = 'ADD_DISH'
}
export interface DishesState {
    dishes: IDish[]
}

export interface AddDishAction {
    type: DishActionTypes.ADD_DISH,
    payload: IDish
}

export type DishesAction = AddDishAction

export const initialState: DishesState = {
    dishes: dishesMock
}