import {Dispatch} from "redux";
import {IUser, UserAction, UserActionTypes} from "../../types/user";
import axios from "axios";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios.post<IUser>('https://internet-market-ma.herokuapp.com/auth/signIn', {email, password})
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})
            return response.data
        }catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: 'Произошла ошибка при загрузке пользователя'
            })
        }
    }
}

export const fetchUserByEmail = (email: string | null) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios.get<IUser>('https://internet-market-ma.herokuapp.com/users/email', {
                params: {
                    email
                }
            })
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: 'Произошла ошибка при загрузке пользователя'
            })
        }
    }
}

export const updateUserCart = (dishId: number | undefined, user: IUser | null) => {
   return async (dispatch: Dispatch<UserAction>) => {
       try {
           axios.put('https://internet-market-ma.herokuapp.com/users/cart/' + dishId, user)
               .then(response => {
                   dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})
               })
       }catch (e) {
           console.log(e)
       }
   }
}