import {initialState, IUser, UsersAction, UsersActionTypes} from "../../types/users";

export const usersReducer = (state = initialState, action: UsersAction) => {
    switch (action.type){
        case UsersActionTypes.ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}

export const addUser = (payload: IUser) => ({type: UsersActionTypes.ADD_USER, payload})