import {usersMock} from "../redux/mock_objects/store";
export interface IRole {
    id: number,
    name: string
}


export interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string,
    password: string,
    roles: IRole[]
}

export enum UsersActionTypes {
    ADD_USER = 'ADD_DISH'
}
export interface UsersState {
    users: IUser[]
}

export interface AddUserAction {
    type: UsersActionTypes.ADD_USER,
    payload: IUser
}

export type UsersAction = AddUserAction

export const initialState: UsersState = {
    users: usersMock
}