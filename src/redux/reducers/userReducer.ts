import {initValue, IUser, UserAction, UserActionTypes, UserState} from "../../types/user";

export const userReducer = (state = initValue, action: UserAction):UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {loading: true, error: null, user: null}
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {loading: false, error: null, user: action.payload}
        case UserActionTypes.FETCH_USER_ERROR:
            return {loading: false, error: action.payload, user: null}
        case UserActionTypes.SET_USER:
            return {loading: false, error: null, user: action.payload}
        default:
            return state
    }
}

export const setUserReducer = (payload: IUser | null) => ({type: UserActionTypes.SET_USER, payload})